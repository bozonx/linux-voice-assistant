import {
  getSttModelsDir,
  isModelDownloaded,
  isOpfsAvailable,
} from './model-storage'
import WhisperWorker from '../../workers/whisper.worker.ts?worker'

interface BrowserWhisperOptions {
  modelName: string
  language?: string
  onText?: (text: string) => void
}

type WorkerResponse =
  | { type: 'init-ok'; id: number }
  | { type: 'progress'; id: number; data: { progress: number } }
  | { type: 'result'; id: number; data: unknown }
  | { type: 'error'; id: number; error: string }

let mediaRecorder: MediaRecorder | null = null
let mediaStream: MediaStream | null = null
let chunks: BlobPart[] = []
let worker: Worker | null = null
let workerInitialized = false
let currentOptions: BrowserWhisperOptions | null = null
let stopPromise: Promise<string> | null = null
let shouldTranscribeOnStop = true

function getWorker() {
  if (!worker) {
    worker = new WhisperWorker()
    workerInitialized = false
  }

  return worker
}

async function ensureWorkerInitialized() {
  if (workerInitialized) {
    return
  }

  const modelDirHandle = isOpfsAvailable() ? await getSttModelsDir() : null
  const activeWorker = getWorker()
  const id = Math.random()

  await new Promise<void>((resolve, reject) => {
    const handleMessage = (event: MessageEvent<WorkerResponse>) => {
      if (event.data.id !== id) {
        return
      }

      activeWorker.removeEventListener('message', handleMessage)

      if (event.data.type === 'init-ok') {
        workerInitialized = true
        resolve()
        return
      }

      reject(new Error(event.data.type === 'error' ? event.data.error : 'Worker init failed'))
    }

    activeWorker.addEventListener('message', handleMessage)
    activeWorker.postMessage({ type: 'init', id, data: { modelDirHandle } })
  })
}

function extractText(result: unknown) {
  if (!result || typeof result !== 'object') {
    return ''
  }

  const maybeText = (result as { text?: unknown }).text

  return typeof maybeText === 'string' ? maybeText.trim() : ''
}

async function decodeToMono16k(blob: Blob) {
  const audioContext = new AudioContext()

  try {
    const audioBuffer = await audioContext.decodeAudioData(await blob.arrayBuffer())
    const sourceRate = audioBuffer.sampleRate
    const source = audioBuffer.getChannelData(0)

    if (sourceRate === 16000) {
      return new Float32Array(source)
    }

    const targetLength = Math.max(1, Math.round((source.length * 16000) / sourceRate))
    const target = new Float32Array(targetLength)

    for (let i = 0; i < targetLength; i += 1) {
      const sourceIndex = (i * sourceRate) / 16000
      const leftIndex = Math.floor(sourceIndex)
      const rightIndex = Math.min(source.length - 1, leftIndex + 1)
      const mix = sourceIndex - leftIndex
      target[i] = source[leftIndex]! * (1 - mix) + source[rightIndex]! * mix
    }

    return target
  } finally {
    await audioContext.close()
  }
}

async function transcribeBlob(blob: Blob, options: BrowserWhisperOptions) {
  const downloaded = await isModelDownloaded(options.modelName)

  if (!downloaded) {
    throw new Error(`Whisper model is not downloaded: ${options.modelName}`)
  }

  await ensureWorkerInitialized()

  const audio = await decodeToMono16k(blob)
  const activeWorker = getWorker()
  const id = Math.random()

  return await new Promise<string>((resolve, reject) => {
    const handleMessage = (event: MessageEvent<WorkerResponse>) => {
      if (event.data.id !== id) {
        return
      }

      if (event.data.type === 'result') {
        activeWorker.removeEventListener('message', handleMessage)
        const text = extractText(event.data.data)
        options.onText?.(text)
        resolve(text)
      } else if (event.data.type === 'error') {
        activeWorker.removeEventListener('message', handleMessage)
        reject(new Error(event.data.error))
      }
    }

    activeWorker.addEventListener('message', handleMessage)
    activeWorker.postMessage(
      {
        type: 'transcribe',
        id,
        data: {
          audio,
          modelName: options.modelName,
          language: options.language?.trim() || undefined,
        },
      },
      [audio.buffer]
    )
  })
}

export async function startBrowserWhisperRecognition(options: BrowserWhisperOptions) {
  if (mediaRecorder?.state === 'recording') {
    return
  }

  const downloaded = await isModelDownloaded(options.modelName)

  if (!downloaded) {
    throw new Error(`Whisper model is not downloaded: ${options.modelName}`)
  }

  currentOptions = options
  chunks = []
  stopPromise = null
  shouldTranscribeOnStop = true
  mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true })
  mediaRecorder = new MediaRecorder(mediaStream)

  mediaRecorder.addEventListener('dataavailable', (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data)
    }
  })

  mediaRecorder.start()
}

export async function stopBrowserWhisperRecognition() {
  if (stopPromise) {
    return await stopPromise
  }

  if (!mediaRecorder || mediaRecorder.state === 'inactive') {
    return ''
  }

  stopPromise = new Promise<string>((resolve, reject) => {
    const recorder = mediaRecorder!
    const options = currentOptions

    recorder.addEventListener(
      'stop',
      () => {
        mediaStream?.getTracks().forEach((track) => track.stop())
        mediaStream = null
        mediaRecorder = null

        if (!options || !shouldTranscribeOnStop) {
          resolve('')
          return
        }

        const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' })
        chunks = []
        void transcribeBlob(blob, options).then(resolve, reject)
      },
      { once: true }
    )

    recorder.stop()
  }).finally(() => {
    stopPromise = null
    currentOptions = null
  })

  return await stopPromise
}

export async function cancelBrowserWhisperRecognition() {
  shouldTranscribeOnStop = false
  return await stopBrowserWhisperRecognition()
}

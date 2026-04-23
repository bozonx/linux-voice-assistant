import {
  env,
  pipeline,
  type AutomaticSpeechRecognitionPipeline,
} from '@huggingface/transformers'

type WorkerMessage =
  | {
      type: 'init'
      id: number
      data: { modelDirHandle: FileSystemDirectoryHandle | null }
    }
  | {
      type: 'transcribe'
      id: number
      data: {
        audio: Float32Array
        modelName: string
        language?: string
      }
    }

type WorkerResponse =
  | { type: 'init-ok'; id: number }
  | { type: 'progress'; id: number; data: { progress: number } }
  | { type: 'result'; id: number; data: unknown }
  | { type: 'error'; id: number; error: string }

env.allowRemoteModels = false
env.allowLocalModels = true
env.useBrowserCache = false
env.localModelPath = '/models/'

let modelDirHandle: FileSystemDirectoryHandle | null = null
let transcriber: AutomaticSpeechRecognitionPipeline | null = null
let currentModelName: string | null = null
let isWebGpuAvailable: boolean | null = null

const originalFetch = self.fetch
const IDB_NAME = 'librnet-assistant-stt-models'
const IDB_STORE = 'files'

function toModelDirName(modelName: string) {
  return modelName.replace(/\//g, '_')
}

function toModelFileKey(modelName: string, fileName: string) {
  return `${toModelDirName(modelName)}/${fileName}`
}

function openModelDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(IDB_NAME, 1)

    request.onupgradeneeded = () => {
      request.result.createObjectStore(IDB_STORE)
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error || new Error('Failed to open model database'))
  })
}

async function getIndexedDbFile(modelName: string, fileName: string) {
  const db = await openModelDb()

  return await new Promise<Blob | null>((resolve, reject) => {
    const transaction = db.transaction(IDB_STORE, 'readonly')
    const request = transaction.objectStore(IDB_STORE).get(toModelFileKey(modelName, fileName))

    request.onsuccess = () => resolve(request.result || null)
    request.onerror = () => reject(request.error || new Error(`Failed to read ${fileName}`))
    transaction.oncomplete = () => db.close()
  })
}

async function getOpfsFile(filePath: string) {
  if (!modelDirHandle || !currentModelName) {
    return null
  }

  const modelFolder = await modelDirHandle.getDirectoryHandle(
    toModelDirName(currentModelName)
  )
  const parts = filePath.split('/').filter(Boolean)
  let currentDir = modelFolder

  for (let i = 0; i < parts.length - 1; i += 1) {
    currentDir = await currentDir.getDirectoryHandle(parts[i]!)
  }

  let fileName = parts[parts.length - 1]!
  let fileHandle: FileSystemFileHandle

  try {
    fileHandle = await currentDir.getFileHandle(fileName)
  } catch (error) {
    if (fileName.endsWith('.onnx') && !fileName.includes('_quantized')) {
      fileName = fileName.replace('.onnx', '_quantized.onnx')
      fileHandle = await currentDir.getFileHandle(fileName)
    } else {
      throw error
    }
  }

  return await fileHandle.getFile()
}

function resolveModelFilePath(urlString: string) {
  if (!currentModelName) {
    return ''
  }

  const modelsPrefix = '/models/'
  const pathFromModels = urlString
    .slice(urlString.indexOf(modelsPrefix) + modelsPrefix.length)
    .split('?')[0]!
    .split('#')[0]!

  return pathFromModels.startsWith(`${currentModelName}/`)
    ? pathFromModels.slice(currentModelName.length + 1)
    : pathFromModels
}

self.fetch = (async (url: string | URL, options?: RequestInit) => {
  const urlString = url.toString()

  if (!urlString.includes('/models/') || !currentModelName) {
    return originalFetch(url, options)
  }

  try {
    const filePath = resolveModelFilePath(urlString)
    const file = modelDirHandle
      ? await getOpfsFile(filePath)
      : await getIndexedDbFile(currentModelName, filePath)

    if (!file) {
      throw new Error(`Model file not found: ${filePath}`)
    }

    return new Response(await file.arrayBuffer())
  } catch {
    return new Response('Not found', { status: 404 })
  }
}) as typeof self.fetch

async function hasWebGpu() {
  if (isWebGpuAvailable !== null) {
    return isWebGpuAvailable
  }

  try {
    const gpu = (self.navigator as Navigator & { gpu?: GPU }).gpu
    isWebGpuAvailable = Boolean(gpu && (await gpu.requestAdapter()))
  } catch {
    isWebGpuAvailable = false
  }

  return isWebGpuAvailable
}

async function getTranscriber(modelName: string) {
  if (transcriber && currentModelName === modelName) {
    return transcriber
  }

  currentModelName = modelName

  if (await hasWebGpu()) {
    try {
      env.backends.onnx.gpu = true
      transcriber = (await pipeline('automatic-speech-recognition', modelName, {
        device: 'webgpu',
        quantized: true,
      } as any)) as AutomaticSpeechRecognitionPipeline

      return transcriber
    } catch {
      isWebGpuAvailable = false
      transcriber = null
    }
  }

  env.backends.onnx.gpu = false
  transcriber = (await pipeline('automatic-speech-recognition', modelName, {
    device: 'wasm',
    quantized: true,
  } as any)) as AutomaticSpeechRecognitionPipeline

  return transcriber
}

let queue = Promise.resolve()

self.onmessage = (event: MessageEvent<WorkerMessage>) => {
  const { type, id, data } = event.data

  if (type === 'init') {
    modelDirHandle = data.modelDirHandle
    self.postMessage({ type: 'init-ok', id } satisfies WorkerResponse)
    return
  }

  queue = queue
    .then(async () => {
      const transcriberInstance = await getTranscriber(data.modelName)
      const result = await transcriberInstance(data.audio, {
        language: data.language || undefined,
        subtask: 'transcribe',
        return_timestamps: true,
        chunk_length_s: 30,
        stride_length_s: 5,
        progress_callback: (progress: { progress?: number }) => {
          self.postMessage({
            type: 'progress',
            id,
            data: { progress: progress.progress || 0 },
          } satisfies WorkerResponse)
        },
      } as any)

      self.postMessage({ type: 'result', id, data: result } satisfies WorkerResponse)
    })
    .catch((error: unknown) => {
      self.postMessage({
        type: 'error',
        id,
        error: error instanceof Error ? error.message : String(error),
      } satisfies WorkerResponse)
    })
}

import LlmWorker from '../../workers/llm.worker.ts?worker'
import type { ChatMessage, LlmModel } from '@shared'
import { desktopClient } from '../../lib/desktop/client'
import { DESKTOP_COMMANDS } from '@shared'
import { convertFileSrc } from '@tauri-apps/api/core'

type WorkerResponse =
  | { type: 'init-ok'; id: number }
  | {
      type: 'progress'
      id: number
      data: { status: string; file?: string; progress?: number }
    }
  | { type: 'result'; id: number; data: { content: string } }
  | { type: 'error'; id: number; error: string }

export interface BrowserLocalLlmProgress {
  status: string
  file?: string
  progress?: number
}

let worker: Worker | null = null
let workerInitialized = false

function getWorker() {
  if (!worker) {
    worker = new LlmWorker()
    workerInitialized = false
  }

  return worker
}

async function ensureWorkerInitialized() {
  if (workerInitialized) {
    return
  }

  const result = await desktopClient.invoke<string>(
    DESKTOP_COMMANDS.GET_LLM_MODEL_PATH,
    {
      modelName: '',
      fileName: '',
    }
  )

  let modelPath =
    result.success && typeof result.result === 'string' ? result.result : ''
  if (modelPath.endsWith('/')) {
    modelPath = modelPath.slice(0, -1)
  }

  const modelUrl = modelPath ? convertFileSrc(modelPath) : ''
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

      if (event.data.type === 'error') {
        reject(new Error(event.data.error))
        return
      }

      reject(new Error('Worker init failed'))
    }

    activeWorker.addEventListener('message', handleMessage)
    activeWorker.postMessage({ type: 'init', id, data: { modelUrl } })
  })
}

export async function runBrowserLocalChatCompletion(
  model: LlmModel,
  messages: ChatMessage[],
  onProgress?: (progress: BrowserLocalLlmProgress) => void
) {
  await ensureWorkerInitialized()
  const activeWorker = getWorker()
  const id = Math.random()

  return await new Promise<{ content: string }>((resolve, reject) => {
    const handleMessage = (event: MessageEvent<WorkerResponse>) => {
      if (event.data.id !== id) {
        return
      }

      if (event.data.type === 'progress') {
        onProgress?.(event.data.data)
        return
      }

      activeWorker.removeEventListener('message', handleMessage)

      if (event.data.type === 'result') {
        resolve(event.data.data)
        return
      }

      if (event.data.type === 'error') {
        reject(new Error(event.data.error))
        return
      }

      reject(new Error('Unexpected worker response'))
    }

    activeWorker.addEventListener('message', handleMessage)
    activeWorker.postMessage({
      type: 'generate',
      id,
      data: {
        modelName: model.localModel || model.model,
        messages,
        temperature: model.temperature ?? 0.2,
        maxTokens: model.maxTokens ?? 256,
      },
    })
  })
}

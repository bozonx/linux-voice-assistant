import LlmWorker from '../../workers/llm.worker.ts?worker'
import type { ChatMessage, LlmModel } from '@shared'

type WorkerResponse =
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

function getWorker() {
  if (!worker) {
    worker = new LlmWorker()
  }

  return worker
}

export async function runBrowserLocalChatCompletion(
  model: LlmModel,
  messages: ChatMessage[],
  onProgress?: (progress: BrowserLocalLlmProgress) => void
) {
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

      reject(new Error(event.data.error))
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

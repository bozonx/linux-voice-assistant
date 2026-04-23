import { env, pipeline, type TextGenerationPipeline } from '@huggingface/transformers'

type ChatMessage = {
  role: 'user' | 'assistant' | 'developer'
  content: string
}

type WorkerMessage = {
  type: 'generate'
  id: number
  data: {
    modelName: string
    messages: ChatMessage[]
    temperature?: number
    maxTokens?: number
  }
}

type WorkerResponse =
  | { type: 'progress'; id: number; data: { status: string; file?: string; progress?: number } }
  | { type: 'result'; id: number; data: { content: string } }
  | { type: 'error'; id: number; error: string }

env.allowRemoteModels = true
env.allowLocalModels = false
env.useBrowserCache = true

let generator: TextGenerationPipeline | null = null
let currentModelName: string | null = null
let isWebGpuAvailable: boolean | null = null

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

async function getGenerator(modelName: string, requestId: number) {
  if (generator && currentModelName === modelName) {
    return generator
  }

  currentModelName = modelName

  const progress_callback = (progress: {
    status?: string
    file?: string
    progress?: number
  }) => {
    self.postMessage({
      type: 'progress',
      id: requestId,
      data: {
        status: progress.status || 'loading',
        file: progress.file,
        progress: progress.progress,
      },
    } satisfies WorkerResponse)
  }

  if (await hasWebGpu()) {
    try {
      env.backends.onnx.gpu = true
      generator = (await pipeline('text-generation', modelName, {
        device: 'webgpu',
        dtype: 'q4',
        progress_callback,
      } as any)) as TextGenerationPipeline

      return generator
    } catch {
      isWebGpuAvailable = false
      generator = null
    }
  }

  env.backends.onnx.gpu = false
  generator = (await pipeline('text-generation', modelName, {
    device: 'wasm',
    dtype: 'q4',
    progress_callback,
  } as any)) as TextGenerationPipeline

  return generator
}

function normalizeMessages(messages: ChatMessage[]) {
  return messages
    .map((message) => ({
      role: message.role === 'developer' ? 'system' : message.role,
      content: message.content.trim(),
    }))
    .filter((message) => message.content)
}

function extractContent(result: unknown) {
  if (!Array.isArray(result) || !result[0]) {
    return ''
  }

  const generated = (result[0] as { generated_text?: unknown }).generated_text

  if (typeof generated === 'string') {
    return generated.trim()
  }

  if (!Array.isArray(generated)) {
    return ''
  }

  const lastMessage = generated[generated.length - 1] as
    | { content?: unknown }
    | undefined

  return typeof lastMessage?.content === 'string'
    ? lastMessage.content.trim()
    : ''
}

let queue = Promise.resolve()

self.onmessage = (event: MessageEvent<WorkerMessage>) => {
  const { id, data } = event.data

  queue = queue
    .then(async () => {
      const generatorInstance = await getGenerator(data.modelName, id)
      const result = await generatorInstance(normalizeMessages(data.messages), {
        max_new_tokens: data.maxTokens || 256,
        temperature: data.temperature ?? 0.2,
        do_sample: (data.temperature ?? 0.2) > 0,
        return_full_text: false,
      })

      self.postMessage({
        type: 'result',
        id,
        data: {
          content: extractContent(result),
        },
      } satisfies WorkerResponse)
    })
    .catch((error: unknown) => {
      self.postMessage({
        type: 'error',
        id,
        error: error instanceof Error ? error.message : String(error),
      } satisfies WorkerResponse)
    })
}

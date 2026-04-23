import { desktopClient } from '../../lib/desktop/client'
import { DESKTOP_COMMANDS, type LlmModelMetadata } from '@shared'

export interface LlmModelDownloadProgress {
  model: string
  file: string
  loaded: number
  total: number
  status: 'downloading' | 'saving' | 'done' | 'error'
  error?: string
}

const HF_BASE = 'https://huggingface.co'
const HF_REVISION = 'main'

export const DEFAULT_BROWSER_LLM_MODEL =
  'onnx-community/Qwen2.5-0.5B-Instruct'

export const DEFAULT_OLLAMA_MODEL = 'qwen2.5:0.5b'

const QWEN25_FILES = [
  'config.json',
  'generation_config.json',
  'tokenizer.json',
  'tokenizer_config.json',
  'special_tokens_map.json',
  'merges.txt',
  'vocab.json',
  'added_tokens.json',
  'quantize_config.json',
  'onnx/model_q4.onnx',
  'onnx/model_q4f16.onnx',
]

const SMOLLM2_360M_FILES = [
  'config.json',
  'generation_config.json',
  'tokenizer.json',
  'tokenizer_config.json',
  'special_tokens_map.json',
  'merges.txt',
  'vocab.json',
  'onnx/model_q4.onnx',
  'onnx/model_q4f16.onnx',
]

const QWEN2_FILES = [
  'config.json',
  'generation_config.json',
  'tokenizer.json',
  'tokenizer_config.json',
  'special_tokens_map.json',
  'merges.txt',
  'vocab.json',
  'added_tokens.json',
  'quantize_config.json',
  'onnx/model_q4.onnx',
  'onnx/model_q4f16.onnx',
]

export const BROWSER_LLM_MODELS = [
  {
    id: 'onnx-community/Qwen2.5-0.5B-Instruct',
    name: 'Qwen2.5 0.5B Instruct (best RU/multilingual balance)',
  },
  {
    id: 'HuggingFaceTB/SmolLM2-360M-Instruct',
    name: 'SmolLM2 360M Instruct (lighter and faster)',
  },
  {
    id: 'onnx-community/Qwen2-0.5B-Instruct-ONNX',
    name: 'Qwen2 0.5B Instruct (older fallback)',
  },
]

export const BROWSER_LLM_MODEL_FILES: Record<string, string[]> = {
  'onnx-community/Qwen2.5-0.5B-Instruct': QWEN25_FILES,
  'HuggingFaceTB/SmolLM2-360M-Instruct': SMOLLM2_360M_FILES,
  'onnx-community/Qwen2-0.5B-Instruct-ONNX': QWEN2_FILES,
}

export function toModelDirName(modelName: string) {
  return modelName.replace(/\//g, '_')
}

export async function isLlmModelDownloaded(modelName: string): Promise<boolean> {
  const result = await desktopClient.invoke<boolean>(
    DESKTOP_COMMANDS.IS_LLM_MODEL_DOWNLOADED,
    { modelName }
  )

  return result.success && result.result === true
}

export async function getLlmModelMetadata(
  modelName: string
): Promise<LlmModelMetadata | null> {
  const result = await desktopClient.invoke<LlmModelMetadata | null>(
    DESKTOP_COMMANDS.GET_LLM_MODEL_METADATA,
    { modelName }
  )

  return result.success ? result.result || null : null
}

export async function downloadLlmModel(
  modelName: string,
  onProgress?: (progress: LlmModelDownloadProgress) => void
): Promise<void> {
  const files = BROWSER_LLM_MODEL_FILES[modelName]

  if (!files) {
    throw new Error(`Unknown browser LLM model: ${modelName}`)
  }

  for (const fileName of files) {
    const url = `${HF_BASE}/${modelName}/resolve/${HF_REVISION}/${fileName}`

    onProgress?.({
      model: modelName,
      file: fileName,
      loaded: 0,
      total: 0,
      status: 'downloading',
    })

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to download ${fileName}: ${response.statusText}`)
    }

    const total = Number(response.headers.get('Content-Length')) || 0
    const reader = response.body?.getReader()

    if (!reader) {
      throw new Error(`Failed to read ${fileName}`)
    }

    const chunks: BlobPart[] = []
    let loaded = 0

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      chunks.push(
        value.buffer.slice(
          value.byteOffset,
          value.byteOffset + value.byteLength
        ) as ArrayBuffer
      )
      loaded += value.length

      onProgress?.({
        model: modelName,
        file: fileName,
        loaded,
        total,
        status: 'downloading',
      })
    }

    onProgress?.({
      model: modelName,
      file: fileName,
      loaded: total || loaded,
      total: total || loaded,
      status: 'saving',
    })

    const blob = new Blob(chunks)
    const arrayBuffer = await blob.arrayBuffer()
    const data = Array.from(new Uint8Array(arrayBuffer))

    const saveResult = await desktopClient.invoke(
      DESKTOP_COMMANDS.SAVE_LLM_MODEL_FILE,
      { modelName, fileName, data }
    )

    if (!saveResult.success) {
      throw new Error(`Failed to save ${fileName}: ${saveResult.error}`)
    }

    onProgress?.({
      model: modelName,
      file: fileName,
      loaded: total || loaded,
      total: total || loaded,
      status: 'done',
    })
  }

  const metadataResult = await desktopClient.invoke<LlmModelMetadata>(
    DESKTOP_COMMANDS.COMPLETE_LLM_MODEL_DOWNLOAD,
    {
      modelName,
      version: HF_REVISION,
      files,
    }
  )

  if (!metadataResult.success) {
    throw new Error(`Failed to complete model metadata: ${metadataResult.error}`)
  }
}

export async function deleteLlmModel(modelName: string): Promise<void> {
  const result = await desktopClient.invoke(DESKTOP_COMMANDS.DELETE_LLM_MODEL, {
    modelName,
  })

  if (!result.success) {
    throw new Error(`Failed to delete model: ${result.error}`)
  }
}

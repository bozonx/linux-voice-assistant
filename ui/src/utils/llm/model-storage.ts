export const DEFAULT_BROWSER_LLM_MODEL =
  'onnx-community/Qwen2.5-0.5B-Instruct'

export const DEFAULT_OLLAMA_MODEL = 'qwen2.5:0.5b'

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

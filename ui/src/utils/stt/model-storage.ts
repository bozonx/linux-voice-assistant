export interface ModelDownloadProgress {
  model: string
  file: string
  loaded: number
  total: number
  status: 'downloading' | 'saving' | 'done' | 'error'
  error?: string
}

const HF_BASE = 'https://huggingface.co'
const STT_MODELS_DIR = 'stt-models'
const IDB_NAME = 'librnet-assistant-stt-models'
const IDB_STORE = 'files'

const XENOVA_WHISPER_FILES = [
  'config.json',
  'generation_config.json',
  'preprocessor_config.json',
  'tokenizer.json',
  'tokenizer_config.json',
  'onnx/encoder_model_quantized.onnx',
  'onnx/decoder_model_merged_quantized.onnx',
]

export const WHISPER_LOCAL_MODELS = [
  { id: 'Xenova/whisper-tiny', name: 'Whisper Tiny (multilingual)' },
  { id: 'Xenova/whisper-base', name: 'Whisper Base (multilingual)' },
  { id: 'Xenova/whisper-small', name: 'Whisper Small (multilingual)' },
  { id: 'Xenova/whisper-medium', name: 'Whisper Medium (multilingual)' },
  { id: 'Xenova/whisper-large-v3', name: 'Whisper Large v3 (multilingual)' },
]

export const DEFAULT_WHISPER_LOCAL_MODEL = WHISPER_LOCAL_MODELS[0]!.id

export const WHISPER_MODEL_FILES: Record<string, string[]> = {
  'Xenova/whisper-tiny': XENOVA_WHISPER_FILES,
  'Xenova/whisper-base': XENOVA_WHISPER_FILES,
  'Xenova/whisper-small': XENOVA_WHISPER_FILES,
  'Xenova/whisper-medium': XENOVA_WHISPER_FILES,
  'Xenova/whisper-large-v3': XENOVA_WHISPER_FILES,
}

export function toModelDirName(modelName: string) {
  return modelName.replace(/\//g, '_')
}

export function toModelFileKey(modelName: string, fileName: string) {
  return `${toModelDirName(modelName)}/${fileName}`
}

export function isOpfsAvailable() {
  return Boolean(navigator.storage?.getDirectory)
}

export async function getSttModelsDir(): Promise<FileSystemDirectoryHandle> {
  if (!navigator.storage?.getDirectory) {
    throw new Error('Origin private file system is not available')
  }

  const root = await navigator.storage.getDirectory()
  return await root.getDirectoryHandle(STT_MODELS_DIR, { create: true })
}

async function getModelDir(modelName: string, create = false) {
  const modelsDir = await getSttModelsDir()
  return await modelsDir.getDirectoryHandle(toModelDirName(modelName), {
    create,
  })
}

async function removeModelDir(modelName: string) {
  const modelsDir = await getSttModelsDir()

  await modelsDir.removeEntry(toModelDirName(modelName), { recursive: true })
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

async function putIndexedDbFile(modelName: string, fileName: string, blob: Blob) {
  const db = await openModelDb()

  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(IDB_STORE, 'readwrite')
    const request = transaction
      .objectStore(IDB_STORE)
      .put(blob, toModelFileKey(modelName, fileName))

    request.onerror = () => reject(request.error || new Error(`Failed to save ${fileName}`))
    transaction.oncomplete = () => {
      db.close()
      resolve()
    }
    transaction.onerror = () => reject(transaction.error || new Error(`Failed to save ${fileName}`))
  })
}

async function deleteIndexedDbFile(modelName: string, fileName: string) {
  const db = await openModelDb()

  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(IDB_STORE, 'readwrite')
    const request = transaction
      .objectStore(IDB_STORE)
      .delete(toModelFileKey(modelName, fileName))

    request.onerror = () => reject(request.error || new Error(`Failed to delete ${fileName}`))
    transaction.oncomplete = () => {
      db.close()
      resolve()
    }
    transaction.onerror = () =>
      reject(transaction.error || new Error(`Failed to delete ${fileName}`))
  })
}

async function getNestedFileHandle(
  dir: FileSystemDirectoryHandle,
  fileName: string,
  create = false
) {
  const parts = fileName.split('/').filter(Boolean)
  let currentDir = dir

  for (let i = 0; i < parts.length - 1; i += 1) {
    currentDir = await currentDir.getDirectoryHandle(parts[i]!, { create })
  }

  return await currentDir.getFileHandle(parts[parts.length - 1]!, { create })
}

export async function isModelDownloaded(modelName: string): Promise<boolean> {
  const requiredFiles = WHISPER_MODEL_FILES[modelName]

  if (!requiredFiles) {
    return false
  }

  try {
    if (isOpfsAvailable()) {
      const dir = await getModelDir(modelName, false)

      for (const file of requiredFiles) {
        await getNestedFileHandle(dir, file, false)
      }

      return true
    }

    for (const file of requiredFiles) {
      if (!(await getIndexedDbFile(modelName, file))) {
        return false
      }
    }

    return true
  } catch {
    return false
  }
}

export async function downloadModel(
  modelName: string,
  onProgress?: (progress: ModelDownloadProgress) => void
): Promise<void> {
  const files = WHISPER_MODEL_FILES[modelName]

  if (!files) {
    throw new Error(`Unknown Whisper model: ${modelName}`)
  }

  const dir = isOpfsAvailable() ? await getModelDir(modelName, true) : null

  for (const fileName of files) {
    const url = `${HF_BASE}/${modelName}/resolve/main/${fileName}`

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

    const fileHandle = dir ? await getNestedFileHandle(dir, fileName, true) : null
    const writable = fileHandle ? await fileHandle.createWritable() : null
    const chunks: BlobPart[] = []
    let loaded = 0

    try {
      while (true) {
        const { done, value } = await reader.read()

        if (done) {
          break
        }

        if (writable) {
          await writable.write(value)
        } else {
          chunks.push(value.buffer.slice(
            value.byteOffset,
            value.byteOffset + value.byteLength
          ) as ArrayBuffer)
        }
        loaded += value.length

        onProgress?.({
          model: modelName,
          file: fileName,
          loaded,
          total,
          status: 'downloading',
        })
      }
    } finally {
      await writable?.close()
    }

    if (!writable) {
      onProgress?.({
        model: modelName,
        file: fileName,
        loaded,
        total: total || loaded,
        status: 'saving',
      })
      await putIndexedDbFile(modelName, fileName, new Blob(chunks))
    }

    onProgress?.({
      model: modelName,
      file: fileName,
      loaded: total || loaded,
      total: total || loaded,
      status: 'done',
    })
  }
}

export async function deleteModel(modelName: string): Promise<void> {
  const files = WHISPER_MODEL_FILES[modelName]

  if (!files) {
    throw new Error(`Unknown Whisper model: ${modelName}`)
  }

  if (isOpfsAvailable()) {
    try {
      await removeModelDir(modelName)
    } catch {
      // Missing model directory is already the desired state.
    }
    return
  }

  for (const fileName of files) {
    await deleteIndexedDbFile(modelName, fileName)
  }
}

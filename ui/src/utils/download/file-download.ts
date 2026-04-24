export interface DownloadProgress {
  file: string
  loaded: number
  total: number
  status: 'downloading' | 'saving' | 'done' | 'error'
}

interface DownloadBinaryFileOptions {
  url: string
  fileName: string
  onProgress?: (progress: DownloadProgress) => void
  onChunk: (chunk: Uint8Array, append: boolean) => Promise<void>
}

const STALLED_DOWNLOAD_TIMEOUT_MS = 30_000

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, error: Error) {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(error), timeoutMs)

    promise.then(
      (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      (reason) => {
        clearTimeout(timer)
        reject(reason)
      }
    )
  })
}

export async function downloadBinaryFile({
  url,
  fileName,
  onProgress,
  onChunk,
}: DownloadBinaryFileOptions): Promise<{ loaded: number; total: number }> {
  onProgress?.({
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

  let loaded = 0
  let append = false

  while (true) {
    const { done, value } = await withTimeout(
      reader.read(),
      STALLED_DOWNLOAD_TIMEOUT_MS,
      new Error(`Download stalled for ${fileName}`)
    )

    if (done) {
      break
    }

    loaded += value.length

    onProgress?.({
      file: fileName,
      loaded,
      total,
      status: 'saving',
    })

    await onChunk(value, append)
    append = true

    onProgress?.({
      file: fileName,
      loaded,
      total,
      status: 'downloading',
    })
  }

  onProgress?.({
    file: fileName,
    loaded: total || loaded,
    total: total || loaded,
    status: 'done',
  })

  return { loaded, total }
}

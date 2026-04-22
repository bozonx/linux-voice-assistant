import type { InitParams } from '@shared'

declare global {
  interface Window {
    __TAURI__?: {
      core?: {
        invoke<T>(command: string, args?: Record<string, unknown>): Promise<T>
      }
      event?: {
        listen<T>(
          event: string,
          handler: (payload: { payload: T }) => void
        ): Promise<() => void>
      }
    }
  }
}

export type { InitParams }

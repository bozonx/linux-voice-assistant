import { DEFAULT_INIT_PARAMS, DESKTOP_COMMANDS } from '@shared'
import { describe, expect, it, vi } from 'vitest'

import { createIpcStoreModel, type IpcStoreDeps } from './ipc-store'

function createDeps(overrides: Partial<IpcStoreDeps> = {}): IpcStoreDeps {
  const invokeMock: IpcStoreDeps['desktopClient']['invoke'] = vi.fn(
    async () => ({ success: true, result: ['ok'] })
  ) as IpcStoreDeps['desktopClient']['invoke']

  return {
    desktopClient: {
      invoke: invokeMock,
      getInitParams: vi.fn(() => DEFAULT_INIT_PARAMS),
    },
    notifyError: vi.fn(),
    logError: vi.fn(),
    ...overrides,
  }
}

describe('ipc-store', () => {
  it('maps a function name to desktop command invocation', async () => {
    const deps = createDeps()
    const store = createIpcStoreModel(deps)

    await store.callFunction('saveMainInputTmp', ['abc'])

    expect(deps.desktopClient.invoke).toHaveBeenCalledWith(
      DESKTOP_COMMANDS.SAVE_MAIN_INPUT_TMP,
      { value: 'abc' }
    )
  })

  it('returns an error for unknown function names', async () => {
    const deps = createDeps()
    const store = createIpcStoreModel(deps)

    const result = await store.callFunction('unknownMethod')

    expect(result).toEqual({
      success: false,
      error: 'Unknown desktop function: unknownMethod',
    })
  })

  it('falls back to local init params when desktop runtime returns failure', async () => {
    const deps = createDeps({
      desktopClient: {
        invoke: vi.fn(async () => ({ success: false, error: 'failed' })),
        getInitParams: vi.fn(() => ({
          ...DEFAULT_INIT_PARAMS,
          windowId: 'fallback-window',
        })),
      },
    })
    const store = createIpcStoreModel(deps)

    const result = await store.loadInitialParams()

    expect(result.windowId).toBe('fallback-window')
    expect(store.params.value.windowId).toBe('fallback-window')
  })

  it('reports thrown invocation errors via notifier and logger', async () => {
    const deps = createDeps({
      desktopClient: {
        invoke: vi.fn(async () => {
          throw new Error('boom')
        }),
        getInitParams: vi.fn(() => DEFAULT_INIT_PARAMS),
      },
    })
    const store = createIpcStoreModel(deps)

    const result = await store.callFunction('getEditorHistory')

    expect(result).toEqual({
      success: false,
      error: 'Error: boom',
    })
    expect(deps.notifyError).toHaveBeenCalledWith('Error: boom', 'Api call error')
    expect(deps.logError).toHaveBeenCalled()
  })
})

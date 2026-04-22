import { describe, expect, it, vi } from 'vitest'

import {
  createThemeController,
  type ThemeName,
  type ThemeRuntime,
} from './theme-controller'

function createRuntime(options: {
  storedTheme?: ThemeName | null
  systemTheme?: ThemeName
} = {}): ThemeRuntime {
  let storedTheme = options.storedTheme ?? null

  return {
    getStoredTheme: vi.fn(() => storedTheme),
    setStoredTheme: vi.fn((theme: ThemeName) => {
      storedTheme = theme
    }),
    clearStoredTheme: vi.fn(() => {
      storedTheme = null
    }),
    applyTheme: vi.fn(),
    getSystemTheme: vi.fn(() => options.systemTheme ?? 'light'),
  }
}

describe('theme-controller', () => {
  it('prefers stored theme over system theme', () => {
    const runtime = createRuntime({
      storedTheme: 'dark',
      systemTheme: 'light',
    })
    const controller = createThemeController(runtime)

    expect(controller.resolveInitialTheme()).toBe('dark')
  })

  it('toggles theme and persists the new value', () => {
    const runtime = createRuntime()
    const controller = createThemeController(runtime)

    const nextTheme = controller.toggleTheme('light')

    expect(nextTheme).toBe('dark')
    expect(runtime.setStoredTheme).toHaveBeenCalledWith('dark')
    expect(runtime.applyTheme).toHaveBeenCalledWith('dark')
  })

  it('resets theme to the current system theme', () => {
    const runtime = createRuntime({
      storedTheme: 'dark',
      systemTheme: 'light',
    })
    const controller = createThemeController(runtime)

    const nextTheme = controller.resetToSystemTheme()

    expect(nextTheme).toBe('light')
    expect(runtime.clearStoredTheme).toHaveBeenCalledOnce()
    expect(runtime.applyTheme).toHaveBeenCalledWith('light')
  })
})

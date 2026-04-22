export type ThemeName = 'light' | 'dark'

export interface ThemeRuntime {
  getStoredTheme: () => ThemeName | null
  setStoredTheme: (theme: ThemeName) => void
  clearStoredTheme: () => void
  applyTheme: (theme: ThemeName) => void
  getSystemTheme: () => ThemeName
}

export function createThemeController(runtime: ThemeRuntime) {
  const resolveInitialTheme = (): ThemeName => {
    return runtime.getStoredTheme() || runtime.getSystemTheme()
  }

  const applyTheme = (theme: ThemeName): ThemeName => {
    runtime.applyTheme(theme)
    return theme
  }

  const toggleTheme = (currentTheme: ThemeName): ThemeName => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

    runtime.setStoredTheme(nextTheme)
    runtime.applyTheme(nextTheme)

    return nextTheme
  }

  const resetToSystemTheme = (): ThemeName => {
    const nextTheme = runtime.getSystemTheme()

    runtime.clearStoredTheme()
    runtime.applyTheme(nextTheme)

    return nextTheme
  }

  return {
    resolveInitialTheme,
    applyTheme,
    toggleTheme,
    resetToSystemTheme,
  }
}

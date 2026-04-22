import type { ThemeName, ThemeRuntime } from './theme-controller'

function readStoredTheme(): ThemeName | null {
  const storedTheme = window.localStorage.getItem('theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return null
}

function getSystemTheme(): ThemeName {
  if (
    window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }

  return 'light'
}

export const browserThemeRuntime: ThemeRuntime = {
  getStoredTheme: readStoredTheme,
  setStoredTheme: (theme) => {
    window.localStorage.setItem('theme', theme)
  },
  clearStoredTheme: () => {
    window.localStorage.removeItem('theme')
  },
  applyTheme: (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
  },
  getSystemTheme,
}

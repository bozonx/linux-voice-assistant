import { defineStore } from 'pinia'
import { ref } from 'vue'
import { browserThemeRuntime } from '../lib/theme/browser-theme-runtime'
import { createThemeController, type ThemeMode } from '../lib/theme/theme-controller'

export const useThemeStore = defineStore('theme', () => {
  const controller = createThemeController(browserThemeRuntime)
  const themeMode = ref(controller.resolveInitialThemeMode())
  const theme = ref(controller.applyTheme(themeMode.value))

  controller.onSystemThemeChange(() => {
    const nextTheme = controller.handleSystemThemeChange(themeMode.value)

    if (!nextTheme) {
      return
    }

    theme.value = nextTheme
  })

  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode
    theme.value = controller.setThemeMode(mode)
  }

  return {
    theme,
    themeMode,
    setThemeMode,
  }
})

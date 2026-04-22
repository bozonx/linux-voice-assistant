import { defineStore } from 'pinia'
import { ref } from 'vue'
import { browserThemeRuntime } from '../lib/theme/browser-theme-runtime'
import { createThemeController } from '../lib/theme/theme-controller'

export const useThemeStore = defineStore('theme', () => {
  const controller = createThemeController(browserThemeRuntime)
  const theme = ref(controller.resolveInitialTheme())

  controller.applyTheme(theme.value)

  const toggleTheme = () => {
    theme.value = controller.toggleTheme(theme.value)
  }

  const resetToSystemTheme = () => {
    theme.value = controller.resetToSystemTheme()
  }

  return {
    theme,
    toggleTheme,
    resetToSystemTheme,
  }
})

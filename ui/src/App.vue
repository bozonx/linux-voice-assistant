<template>
  <MenuModals />
  <div class="layout">
    <NavPanel v-if="navPanelStore.params.panelVisible" />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

import { useGlobalEvents } from './composables/useGlobalEvents'
import { useI18n } from './composables/useI18n'
import { createAppBootstrap } from './lib/app/app-bootstrap'
import { desktopClient } from './lib/desktop/client'
import { syncI18nLocale } from './lib/i18n'
import { syncDocumentLanguageAttributes } from './lib/locale/language'
import { appNavigation } from './lib/navigation/navigation'
import { usePlugins } from './plugins'
import { useIpcStore } from './stores/ipc'
import { useMenuModalsStore } from './stores/menuModals'
import { useNavPanelStore } from './stores/navPanel'
import { useThemeStore } from './stores/theme'

useThemeStore()
const ipcStore = useIpcStore()
const { locale, t } = useI18n()
const { globalEvents } = useGlobalEvents()
const menuModalsStore = useMenuModalsStore()
const navPanelStore = useNavPanelStore()
const bootstrap = createAppBootstrap({
  loadInitialParams: () => ipcStore.loadInitialParams(),
  setParams: (params) => ipcStore.setParams(params),
  closeAllModals: () => menuModalsStore.closeAll(),
  navigateTo: (path) => appNavigation.push(path),
  listen: (event, handler) =>
    desktopClient.listen(event as never, handler as never),
  emitGlobal: (event, payload) => globalEvents.emit(event, payload),
  initPlugins: () => {
    usePlugins()
  },
  handleNavKeyUp: (event) => navPanelStore.handleKeyUp(event),
  addWindowKeyupListener: (handler) => {
    window.addEventListener('keyup', handler)

    return () => {
      window.removeEventListener('keyup', handler)
    }
  },
})

watch(
  () => ipcStore.params.userConfig?.appLanguage,
  (appLanguage) => {
    syncI18nLocale(appLanguage)
  },
  { immediate: true }
)

watch(
  () => ipcStore.params.userConfig,
  (userConfig) => {
    syncDocumentLanguageAttributes(userConfig)
  },
  { immediate: true, deep: true }
)

watch(
  () => locale.value,
  () => {
    syncDocumentLanguageAttributes(ipcStore.params.userConfig)
    document.title = t('app.title')
  },
  { immediate: true }
)

onMounted(() => {
  void bootstrap.start()
})

onUnmounted(() => {
  bootstrap.stop()
})
</script>

<style scoped>
.layout {
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1 1 0%;
  min-height: 0; /* Важно для flexbox, чтобы потомки могли сжиматься */
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

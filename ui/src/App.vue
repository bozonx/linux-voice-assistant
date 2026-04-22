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
import { DESKTOP_EVENTS, type InitParams } from '@shared'
import { onMounted, onUnmounted } from 'vue'

import { useRouter } from 'vue-router';

import { desktopClient } from './lib/desktop/client';
import { GlobalEvents, useGlobalEvents } from './composables/useGlobalEvents';
import { usePlugins } from "./plugins";
import { useIpcStore } from './stores/ipc';
import { useMenuModalsStore } from './stores/menuModals';
import { useNavPanelStore } from './stores/navPanel';
import { useThemeStore } from './stores/theme';

useThemeStore();
const ipcStore = useIpcStore();
const router = useRouter();
const { globalEvents } = useGlobalEvents();
const menuModalsStore = useMenuModalsStore();
const navPanelStore = useNavPanelStore();
let removeParamsListener: (() => void) | undefined;
let removeVoiceListener: (() => void) | undefined;

const applyParams = async (params: InitParams) => {
  ipcStore.setParams(params);

  menuModalsStore.closeAll();

  if (ipcStore.params?.mode) {
    await router.push(`/${ipcStore.params.mode}`);
  }
  else {
    await router.push('/');
  }
};

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp);
  usePlugins();

  void (async () => {
    removeParamsListener = await desktopClient.listen(
      DESKTOP_EVENTS.PARAMS_CHANGED,
      async (params) => {
        await applyParams(params);
      }
    );

    removeVoiceListener = await desktopClient.listen(
      DESKTOP_EVENTS.VOICE_TEXT,
      (data) => {
        globalEvents.emit(GlobalEvents.VOICE_RECOGNITION, data);
      }
    );

    const initialParams = await ipcStore.loadInitialParams();
    await applyParams(initialParams);
    globalEvents.emit(GlobalEvents.INITED);
  })();
});

onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyUp);
  removeParamsListener?.();
  removeVoiceListener?.();
});

const handleKeyUp = (event: KeyboardEvent) => {
  globalEvents.emit(GlobalEvents.KEY_UP, event);
  navPanelStore.handleKeyUp(event);
};
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

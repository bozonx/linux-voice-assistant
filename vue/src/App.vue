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
import { useIpcStore } from './stores/ipc';
import { InitParams } from './types';
import { useRouter } from 'vue-router';
import { GlobalEvents, useGlobalEvents } from './composables/useGlobalEvents';
import { usePlugins } from "./plugins";
import { useMenuModalsStore } from './stores/menuModals';
import { useThemeStore } from './stores/theme';
import { useNavPanelStore } from './stores/navPanel';

useThemeStore();
const ipcStore = useIpcStore();
const router = useRouter();
const { globalEvents } = useGlobalEvents();
const menuModalsStore = useMenuModalsStore();
const navPanelStore = useNavPanelStore();

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp);

  window.electron.ipcRenderer.on('params', async (params: InitParams) => {
    console.log("Received params:", params);

    ipcStore.setParams(params);

    menuModalsStore.closeAll();

    if (ipcStore.params!.mode) {
      router.push(`/${ipcStore.params!.mode}`);
    }
    else {
      router.push('/');
    }

    globalEvents.emit(GlobalEvents.INITED);
  });

  window.electron.ipcRenderer.on('vosk-text', (data: string) => {
    globalEvents.emit(GlobalEvents.VOICE_RECOGNITION, data);
  });

  globalEvents.once(GlobalEvents.INITED, () => {
    usePlugins();
  });
});

onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyUp);
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
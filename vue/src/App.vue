<template>
  <div class="layout">
    <div class="panel">
      <NavPanel />
    </div>
    <div class="main flex-1">
      <MenuModals />
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from './stores/ipc';
import { InitParams } from './types';
import { useRouter } from 'vue-router';
import { GlobalEvents, useGlobalEvents } from './composables/useGlobalEvents';
import { useKeysStore } from './stores/keys';
import { usePlugins } from "./plugins";

const ipcStore = useIpcStore();
const router = useRouter();
const { globalEvents } = useGlobalEvents();
const keysStore = useKeysStore();

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp);

  window.electron.ipcRenderer.on('params', async (params: InitParams) => {
    console.log("Received params:", params);

    ipcStore.setParams(params);

    if (ipcStore.params!.mode) {
      router.push(`/${ipcStore.params!.mode}`);
    }
    else {
      router.push('/');
    }

    usePlugins()
  });

  window.electron.ipcRenderer.on('vosk-text', (data: string) => {
    globalEvents.emit(GlobalEvents.VOICE_RECOGNITION, data);
  });
});

onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyUp);
});

const handleKeyUp = (event: KeyboardEvent) => {
  globalEvents.emit(GlobalEvents.KEY_UP, event);
  keysStore.setKeyup(event);
};


</script>

<style scoped>
.panel {
  background-color: #eee;
  border-bottom: 1px solid #ccc;
  height: 40px;
}
.main {
  position: relative;
}
.content {
  padding: 1.25rem;
  height: 100%;
}
.layout {
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
}
</style>
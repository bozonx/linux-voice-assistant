<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from './stores/ipc';
import { InitParams, START_MODES } from './types';
import { useRouter } from 'vue-router';
import { GlobalEvents, useGlobalEvents } from './composables/useGlobalEvents';

const ipcStore = useIpcStore();
const router = useRouter();
const { globalEvents } = useGlobalEvents();

onMounted(() => {
  // window.addEventListener('keyup', handleKeyUp)

  window.electron.ipcRenderer.on('params', async (params: InitParams) => {
    console.log("Received params:", params);

    ipcStore.setInitialData(params);

    if (ipcStore.data!.mode) {
      router.push(`/${params.mode}`);
    }
    else {
      router.push('/');
    }
  });

  window.electron.ipcRenderer.on('vosk-text', (data: string) => {
    globalEvents.emit(GlobalEvents.VOICE_RECOGNITION, data);
  });

  window.electron.ipcRenderer.on('incoming-command', (data: { mode: START_MODES }) => {
    console.log("Received command:", data);
    router.push(`/${data.mode}`);
  });
});

onUnmounted(() => {
  // window.removeEventListener('keyup', handleKeyUp);
});

// const handleKeyUp = (event: KeyboardEvent) => {
//     globalEvents.emit(GlobalEvents.KEY_UP, event);
// };

</script>

<style scoped>
.layout {
  height: 100dvh;
  width: 100vw;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
}
</style>
<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from './stores/ipc';
import { GlobalEvents, InitParams, START_MODES } from './types';
import { useRouter } from 'vue-router';
import { useGlobalEvents } from './composables/useGlobalEvents';

const ipcStore = useIpcStore();
const router = useRouter();
const { globalEvents } = useGlobalEvents();

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp)

  window.electron.ipcRenderer.on('init-params', async (params: InitParams) => {
    console.log("Received params:", params);

    ipcStore.setInitialData(params);

    if (ipcStore.data!.mode === START_MODES.SELECT) {
      router.push('/select');
    }
    else if (ipcStore.data!.mode === START_MODES.EDIT) {
      router.push('/edit');
    }
    else if (ipcStore.data!.mode === START_MODES.VOICE) {
      router.push('/voice');
    }
    else if (ipcStore.data!.mode === START_MODES.WRITE) {
      router.push('/write');
    }
    // Else just show the editor
  });

    // window.electron.ipcRenderer.on('voice-recognition', (data: string) => {
    //   mainInputStore.setValue(data);
    // });
});

onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyUp);
});

const handleKeyUp = (event: KeyboardEvent) => {
    globalEvents.emit(GlobalEvents.KEY_UP, event);
};

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
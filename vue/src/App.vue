<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from './stores/ipc';
import { useMainInputStore } from './stores/mainInput';
import { GlobalEvents, InitParams, START_MODES } from './types';
import { useOverlayStore } from './stores/mainOverlay';
import { useRouter } from 'vue-router';
import { useGlobalEvents } from './composables/useGlobalEvents';

const ipcStore = useIpcStore();
const mainInputStore = useMainInputStore();
const overlayStore = useOverlayStore();
const router = useRouter();
const { globalEvents } = useGlobalEvents();

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp)

  window.electron.ipcRenderer.on('init-params', async (params: InitParams) => {
    console.log("Received params:", params);

    ipcStore.setInitialData(params);

    if (ipcStore.data!.mode === START_MODES.SELECT) {
      if (ipcStore.data!.selectedText) {
        // если есть выбранный текст, то вставляем его в поле
        // и открываем оверлей с горячими клавишами
        mainInputStore.setValue(ipcStore.data!.selectedText);
        overlayStore.showTextDoShortcuts();
      }
      else {
        await nextTick()
        mainInputStore.focus()
      }
    }
    else if (ipcStore.data!.mode === START_MODES.EDIT) {
      if (ipcStore.data!.selectedText) mainInputStore.setValue(ipcStore.data!.selectedText);
      overlayStore.showEditPresets();
    }
    else if (ipcStore.data!.mode === START_MODES.VOICE) {
      router.push('/voice');
    }
    else if (ipcStore.data!.mode === START_MODES.WRITE) {
      router.push('/write');
    }
    // Без режима - фокусируемся на поле ввода
    else {
      await nextTick()
      mainInputStore.focus()
    }
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
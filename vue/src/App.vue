<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from './stores/ipc';
import { useMainInputStore } from './stores/mainInput';
import { InitParams, START_MODES } from './types';
import { useVoiceRecognitionStore } from './stores/voiceRecognition';
import { useKeysStore } from './stores/keys';
import { useHandleKeys } from './composables/useHandleKeys';
import { useOverlayStore } from './stores/overlay';

const ipcStore = useIpcStore();
const mainInputStore = useMainInputStore();
const voiceRecognitionStore = useVoiceRecognitionStore();
const keysStore = useKeysStore();
const { globalHandleKeyUp } = useHandleKeys();
const overlayStore = useOverlayStore();

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp)

  window.electron.ipcRenderer.on('init-params', async (params: InitParams) => {
    console.log("Received params:", params);

    ipcStore.setInitialData(params);

    // Режим выбора текста в предыдущем окне
    if (ipcStore.data!.mode === START_MODES.SELECT) {
      if (ipcStore.data!.selectedText) {
        // если есть выбранный текст, то вставляем его в поле
        // и открываем оверлей с горячими клавишами
        mainInputStore.setValue(ipcStore.data!.selectedText);
        overlayStore.showHotkeys();
      }
      else {
        // ничего не передано, поэтому загружаем сохраненное значение
        // await mainInputStore.loadSavedValue();
        await nextTick()
        mainInputStore.focus()
        // mainInputStore.selectAll()
      }
    }
    // Режим голосового ввода - сразу запускаем распознавание голоса
    else if (ipcStore.data!.mode === START_MODES.VOICE) {
      voiceRecognitionStore.startRecognizing();
    }
    // WRITE mode - загружаем сохраненное значение
    else {
      // await mainInputStore.loadSavedValue();
      await nextTick()
      mainInputStore.focus()
    }
  });

  window.electron.ipcRenderer.on('voice-recognition', (data: string) => {
    mainInputStore.setValue(data);
  });
});

onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyUp);
});

const handleKeyUp = (event: KeyboardEvent) => {
  keysStore.setKeyUp(event.code);
  globalHandleKeyUp(event);
};


</script>

<style scoped>
.layout {
  min-height: 100vh;
  padding: 1.25rem;
}
</style>
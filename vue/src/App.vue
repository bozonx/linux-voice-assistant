<template>
  <div class="layout">
    <Overlays />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from './stores/ipc';
import { useMainInputStore } from './stores/mainInput';
import { GlobalEvents, InitParams, START_MODES } from './types';
import { useVoiceRecognitionStore } from './stores/voiceRecognition';
import { useOverlayStore } from './stores/mainOverlay';
import { useRouter } from 'vue-router';
import { useGlobalEvents } from './composables/useGlobalEvents';

const ipcStore = useIpcStore();
const mainInputStore = useMainInputStore();
const voiceRecognitionStore = useVoiceRecognitionStore();
const overlayStore = useOverlayStore();
const router = useRouter();
const { globalEvents } = useGlobalEvents();

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
    // WRITE mode - переключаемся на роут /write и загружаем сохраненное значение
    else if (ipcStore.data!.mode === START_MODES.WRITE) {
      // Переключаемся на роут /write
      router.push('/write');
      // await mainInputStore.loadSavedValue();
      await nextTick()
      mainInputStore.focus()
    }
    // Остальные режимы - загружаем сохраненное значение
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
    // keysStore.setKeyUp(event.code);
    // globalHandleKeyUp(event);
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
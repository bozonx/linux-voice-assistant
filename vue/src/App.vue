<template>
  <div class="layout">
    <RouterView />
      </div>
</template>

<script setup lang="ts">
import { useIpcStore } from './stores/ipc';
import { useMainInputStore } from './stores/mainInput';
import { START_MODES } from './types';
import { useVoiceRecognitionStore } from './stores/voiceRecognition';
import { useKeysStore } from './stores/keys';

const ipcStore = useIpcStore();
const mainInputStore = useMainInputStore();
const voiceRecognitionStore = useVoiceRecognitionStore();
const keysStore = useKeysStore();

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp)

  window.electron.ipcRenderer.on('init-params', async (params: any) => {
    console.log("Received params:", params);
    
    ipcStore.setWindowId(params.windowId);
    ipcStore.setSelectedText(params.selectedText);
    ipcStore.setMode(params.mode);

    // Режим выбора текста в предыдущем окне
    if (ipcStore.mode === START_MODES.SELECT && ipcStore.selectedText) {
      mainInputStore.setValue(ipcStore.selectedText);
      // Ждем следующего тика для того, чтобы компонент успел обновиться
      await nextTick()
      mainInputStore.focus()
      mainInputStore.selectAll()
    }
    // Режим голосового ввода - сразу запускаем распознавание голоса
    else if (ipcStore.mode === START_MODES.VOICE) {
      voiceRecognitionStore.startRecognizing();
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
};


</script>

<style scoped>
.layout {
  min-height: 100vh;
  padding: 1.25rem;
}
</style>
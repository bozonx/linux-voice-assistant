<template>
  <div class="layout">
    <RouterView ref="routerViewRef" />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from './stores/ipc';
import { useMainInputStore } from './stores/mainInput';
import { START_MODES } from './types';
import { useOverlayStore } from './stores/overlay';

const ipcStore = useIpcStore();
const overlayStore = useOverlayStore();
const { setMainInputText } = useMainInputStore();
const routerViewRef = ref()

onMounted(() => {
  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('init-params', async (params: any) => {
    console.log("Received params:", params);
    ipcStore.setWindowId(params.windowId);
    ipcStore.setSelectedText(params.selectedText);
    ipcStore.setMode(params.mode);

    // Режим выбора текста в предыдущем окне
    if (ipcStore.mode === START_MODES.SELECT && ipcStore.selectedText) {
      setMainInputText(ipcStore.selectedText);
      // Ждем следующего тика для того, чтобы компонент успел обновиться
      await nextTick()
      // Получаем доступ к компоненту MainInput через RouterView
      const mainInput = routerViewRef.value?.$refs?.mainInput
      if (mainInput) {
        mainInput.selectAllAndFocus()
      }
    }
    // Режим голосового ввода - сразу запускаем распознавание голоса
    else if (ipcStore.mode === START_MODES.VOICE) {
      overlayStore.startVoiceRecognition();
      await ipcStore.callFunction("startVoiceRecognition");
    }
  });

  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('voice-recognition', (event: any, data: string) => {
    // inputText.value = data;
  });
});


</script>

<style scoped>
.layout {
  min-height: 100vh;
  padding: 1.25rem;
}
</style>
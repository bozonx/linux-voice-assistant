<template>
  <div class="layout">
    <RouterView ref="routerViewRef" />
  </div>
</template>

<script setup lang="ts">
import { useIpc } from './composables/useIpc';
import { useMainInput } from './composables/useMainInput';
import { START_MODES } from './types';
import { startVoiceRecognition } from './composables/useOverlay';

const { windowId, selectedText, mode, callFunction } = useIpc();
const { setMainInputText } = useMainInput();
const routerViewRef = ref()

onMounted(() => {
  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('init-params', async (params: any) => {
    console.log("Received params:", params);
    windowId.value = params.windowId;
    selectedText.value = params.selectedText;
    mode.value = params.mode;

    // Режим выбора текста в предыдущем окне
    if (mode.value === START_MODES.SELECT && selectedText.value) {
      setMainInputText(selectedText.value);
      // Ждем следующего тика для того, чтобы компонент успел обновиться
      await nextTick()
      // Получаем доступ к компоненту MainInput через RouterView
      const mainInput = routerViewRef.value?.$refs?.mainInput
      if (mainInput) {
        mainInput.selectAllAndFocus()
      }
    }
    // Режим голосового ввода - сразу запускаем распознавание голоса
    else if (mode.value === START_MODES.VOICE) {
      startVoiceRecognition();
      await callFunction("startVoiceRecognition");
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
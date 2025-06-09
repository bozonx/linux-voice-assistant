<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useIpc } from './composables/useIpc';

const { windowId, selectedText, mode } = useIpc();

onMounted(() => {
  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('init-params', async (event: any, params: any) => {
    // initParams(params);

    // if (mode.value === Modes.SELECT && selectedText.value) {
    //   inputText.value = selectedText.value;
    // } else if (mode.value === Modes.VOICE) {
    //   await startVoiceRecognition();
    // }
  });

  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('voice-recognition', (event: any, data: string) => {
    // inputText.value = data;
  });
});

// Получаем параметры инициализации
// window?.electron?.ipcRenderer?.on("init-params", async (event, params) => {
//   windowId.value = params.windowId;
//   selectedText.value = params.selectedText;
//   mode.value = params.mode;

//   console.log("Received params:", params);

//   // // Режим выбора текста в предыдущем окне
//   // if (mode === MODES.select && selectedText) {
//   //   mainInput.value = selectedText;
//   //   // Выбираем весь текст в textarea
//   //   mainInput.select();
//   //   mainInput.focus();

//   //   // Устанавливаем курсор в конец текста
//   //   //textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
//   // }
//   // // Режим голосового ввода - сразу запускаем распознавание голоса
//   // else if (mode === MODES.voice) {
//   //   await ipcRenderer.invoke("call-function", "startVoiceRecognition", []);
//   //   document.getElementById("voiceInput").classList.add("mini-btn-pressed");
//   //   document
//   //     .getElementById("voice-recognition-process")
//   //     .classList.add("active");
//   // }
// });
</script>

<style scoped>
.layout {
  min-height: 100vh;
  padding: 1.25rem;
}
</style>
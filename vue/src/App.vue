<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useIpc } from './composables/useIpc';
import { useTextInput } from './composables/useTextInput';
import { START_MODES } from './types';

const { windowId, selectedText, mode } = useIpc();
const { setText } = useTextInput();


onMounted(() => {
  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('init-params', async (params: any) => {
    console.log("Received params:", params);
    windowId.value = params.windowId;
    selectedText.value = params.selectedText;
    mode.value = params.mode;


    // if (mode.value === Modes.SELECT && selectedText.value) {
    //   inputText.value = selectedText.value;
    // } else if (mode.value === Modes.VOICE) {
    //   await startVoiceRecognition();
    // }

    // Режим выбора текста в предыдущем окне
    if (mode.value === START_MODES.SELECT && selectedText.value) {
      setText(selectedText.value);
      // Выбираем весь текст в textarea
      // mainInput.select();
      // mainInput.focus();

      // Устанавливаем курсор в конец текста
      //textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
    }
    // Режим голосового ввода - сразу запускаем распознавание голоса
    else if (mode === START_MODES.VOICE) {
          // await ipcRenderer.invoke("call-function", "startVoiceRecognition", []);
          // document.getElementById("voiceInput").classList.add("mini-btn-pressed");
          // document
          //   .getElementById("voice-recognition-process")
          //   .classList.add("active");
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
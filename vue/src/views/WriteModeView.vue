<template>
  <div class="write-mode-container">
    <div class="textarea-container">
      <div ref="textareaRef" @input="handleInput" class="textarea" contenteditable="true"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallAi } from '../composables/useCallAi';
import { useIpcStore } from '../stores/ipc';
import { MenuModals, useMenuModalsStore } from '../stores/menuModals';
import { useNavPanelStore } from '../stores/navPanel';
import useToast from '../composables/useToast';
import { useMainInputStore } from '../stores/mainInput';

const navPanelStore = useNavPanelStore();
const mainInputStore = useMainInputStore();
const ipcStore = useIpcStore();
const { correctText } = useCallAi();
const menuModalsStore = useMenuModalsStore();
const textareaRef = ref<HTMLDivElement>();
const inputText = ref('');
const correctedText = ref('');
const correctionIsActual = ref(true);
const appConfig = ipcStore.params!.appConfig;
const { toast } = useToast();

navPanelStore.resetNavParams({
  escBtnText: "Далее",
  escBtnAction: doCorrection,
});

onMounted(() => {
  focusTextarea();
});

const handleInput = (event: Event) => {
  inputText.value = (event.target as HTMLDivElement).innerText || '';
  mainInputStore.setValue(inputText.value);
  correctionIsActual.value = false;
}

function focusTextarea() {
  nextTick(() => {
    textareaRef.value?.focus();
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(textareaRef.value!);
    range.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(range);
  })
}

function toShortcuts() {
  menuModalsStore.nextModal(MenuModals.INSERT, {
    text: correctedText.value,
    oldText: inputText.value,
  });
}

async function doCorrection() {
  if (!inputText.value?.trim()) {
    toast('Введите текст для коррекции', 'warn');
  }
  else if (correctionIsActual.value) {
    toast('Текст уже корректирован', 'warn');
  }
  else if (inputText.value.length < appConfig.minCorrectionLength) {
    toast('Слишком короткий текст для коррекции', 'warn');

    correctedText.value = inputText.value;
    correctionIsActual.value = true;
  }
  else {
    menuModalsStore.setPendingModal({
      correction: true,
    });

    const result = await correctText(inputText.value);

    correctedText.value = result;
    correctionIsActual.value = true;

    menuModalsStore.clearPendingModal();
    menuModalsStore.nextModal(MenuModals.INSERT, {
      text: result,
      oldText: inputText.value,
    });
  }

  toShortcuts();
}

// const handleWriteModeKeyUp = (event: KeyboardEvent) => {
//   if (event.code === "Escape") {
//     doCorrection();
//   }
//   else if (event.code === "KeyQ" && event.ctrlKey) {
//     closeWindow();
//   }
// }
</script>

<style scoped>
.write-mode-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  font-family: monospace;
}

.textarea-container {
  flex: 1;
  display: flex;
  align-items: end;
  justify-content: center;
}

.textarea {
  width: 80%;
  min-height: 40px;
  resize: none;
  border: 1px solid #000;
  padding: 10px;
  border-radius: 10px;
  background-color: #ebfff6;
  color: #000;
  font-size: 16px;
}

</style>
<template>
  <Overlay v-if="overlayMode === OverlayMode.SHORTCUTS">
    <InsertMenu :text="correctedText" :oldText="inputText" @back="toWriteMode" @update:newText="handleNewText" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.CORRECTION">
    <InProgressMessage :correction="true" />
  </Overlay>

  <div @keyup="handleWriteModeKeyUp" class="write-mode-container">
    <div class="hint">
      <div class="hint-text">
        <span>Escape <button @click="doCorrection">to menu</button></span>
        <span>Ctrl + q - <button @click="closeWindow">закрыть программу</button></span>
      </div>
    </div>
    <div class="textarea-container">
      <div ref="textareaRef" @input="handleInput" class="textarea" contenteditable="true"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../composables/useCallApi';
import { useCallAi } from '../composables/useCallAi';
import { DebounceCallIncreasing } from 'squidlet-lib';
import { useMainInputHistoryStore } from '../stores/mainInputHistory';
import miniToastr from "mini-toastr";
import { useIpcStore } from '../stores/ipc';

enum OverlayMode {
  CORRECTION = "correction",
  SHORTCUTS = "shortcuts",
  NONE = "none",
}

const mainInputHistoryStore = useMainInputHistoryStore()
const ipcStore = useIpcStore();
const debounced = new DebounceCallIncreasing()
const { closeWindow } = useCallApi();
const { correctText } = useCallAi();
const overlayMode = ref(OverlayMode.NONE);
const textareaRef = ref<HTMLDivElement>();
const inputText = ref('');
const correctedText = ref('');
const correctionIsActual = ref(true);
const appConfig = ipcStore.params!.appConfig;

onMounted(() => {
  if (textareaRef.value) {
    focusTextarea();
  }
})

watch(() => ipcStore.params?.isWindowShown, (isWindowShown) => {
  if (!isWindowShown) {
    return;
  }

  inputText.value = '';
  correctedText.value = '';
  correctionIsActual.value = true;
  overlayMode.value = OverlayMode.NONE;

  if (textareaRef.value) {
    textareaRef.value.innerText = '';
  }

  focusTextarea();
});

function handleNewText(newText: string) {
  correctedText.value = newText;
}

const handleInput = (event: Event) => {
  inputText.value = (event.target as HTMLDivElement).innerText || '';
  correctionIsActual.value = false;

  debounced.invoke(() => {
    mainInputHistoryStore.saveMainInput(inputText.value)
  }, 1000)
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
  overlayMode.value = OverlayMode.SHORTCUTS;
}

function toWriteMode() {
  overlayMode.value = OverlayMode.NONE;

  focusTextarea();
}

async function doCorrection() {
  if (!inputText.value?.trim()) {
    miniToastr.warn('Введите текст для коррекции');
  }
  else if (correctionIsActual.value) {
    miniToastr.warn('Текст уже корректирован');
  }
  else if (inputText.value.length < appConfig.minCorrectionLength) {
    miniToastr.warn('Слишком короткий текст для коррекции');

    correctedText.value = inputText.value;
    correctionIsActual.value = true;
  }
  else {
    overlayMode.value = OverlayMode.CORRECTION;

    const result = await correctText(inputText.value);

    correctedText.value = result;
    correctionIsActual.value = true;
  }

  toShortcuts();
}

const handleWriteModeKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    doCorrection();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
}
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

.hint {
  width: 100%;
  background-color: #3a8f58;
  color: #fff;
  padding: 4px;
}

.hint-text {
  font-size: 12px;
}

.hint-text span {
  margin-right: 50px;
}

</style>
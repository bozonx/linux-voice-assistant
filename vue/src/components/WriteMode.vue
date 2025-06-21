<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.EDIT_PRESETS">
    <EditPresets @close="toShortcuts" :text="correctedText" />
  </OverlayOneColumn>

  <OverlayOneColumn v-if="overlayMode === OverlayMode.SHORTCUTS">
    <InsertShortCuts :text="inputText" @back="toWriteMode" @editPresets="toEditPresets" />
  </OverlayOneColumn>

  <OverlayOneColumn v-if="overlayMode === OverlayMode.CORRECTION">
    Коррекция ...
  </OverlayOneColumn>

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

enum OverlayMode {
  CORRECTION = "correction",
  SHORTCUTS = "shortcuts",
  EDIT_PRESETS = "edit-presets",
  NONE = "none",
}

const { closeWindow } = useCallApi();
const { correctText } = useCallAi();
const overlayMode = ref(OverlayMode.NONE);
const textareaRef = ref<HTMLDivElement>();
const inputText = ref('');
const correctedText = ref('');
const correctionIsActual = ref(true);

onMounted(() => {
  if (textareaRef.value) {
    focusTextarea();
  }
})

const handleInput = (event: Event) => {
  inputText.value = (event.target as HTMLDivElement).innerText || '';
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
  overlayMode.value = OverlayMode.SHORTCUTS;
}

function toEditPresets() {
  overlayMode.value = OverlayMode.EDIT_PRESETS;
}

function toWriteMode() {
  overlayMode.value = OverlayMode.NONE;

  focusTextarea();
}

async function doCorrection() {
  if (correctionIsActual.value) {
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
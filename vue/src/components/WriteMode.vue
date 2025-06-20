<template>
<OverlayOneColumn v-if="overlayMode === OverlayMode.EDIT_PRESETS">
  <EditPresets @close="toShortcuts" :text="inputText" />
</OverlayOneColumn>
<OverlayOneColumn v-if="overlayMode === OverlayMode.SHORTCUTS">
    <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
      <div>Esc - <button ref="backButton" @click="toWriteMode">назад</button></div>
      <div>Space - <button @click="typeIntoWindowAndClose(inputText)">вставить</button></div>
      <div>Ctrl + q - <button @click="closeWindow">закрыть программу</button></div>
      <div>q - <button @click="toEditor">в редактор</button></div>
      <div>w - </div>
      <div>e - </div>
      <div>r - <button @click="askAIShort(inputText)">быстрый вопрос к AI</button></div>
      <div>t - <button @click="dealToCalendar(inputText)">добавить дело в календарь</button></div>
      
      <div>a - <button @click="intoClipboardAndClose(inputText)">в буфер обмена и закрыть окно</button></div>
      <div>s - <button @click="fastNote(inputText)">быстрая заметка в Obsidian</button></div>
      <div>d - <button @click="addToKnowledgeBase(inputText)">вставить в базу знаний</button></div>
      <div>f - <button @click="toEditPresets">выбор пресета редактирования</button></div>
      <div>g - <button @click="searchInInternet(inputText)">поиск в интернете</button></div>

      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[0]">z - ➡️ <button @click="translate(0)">{{ipcStore.data?.userConfig.toTranslateLanguages[0]}}</button></div>
      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[1]">x - ➡️ <button @click="translate(1)">{{ipcStore.data?.userConfig.toTranslateLanguages[1]}}</button></div>
      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[2]">c - ➡️ <button @click="translate(2)">{{ipcStore.data?.userConfig.toTranslateLanguages[2]}}</button></div>
      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[3]">v - ➡️ <button @click="translate(3)">{{ipcStore.data?.userConfig.toTranslateLanguages[3]}}</button></div>
      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[4]">b - ➡️ <button @click="translate(4)">{{ipcStore.data?.userConfig.toTranslateLanguages[4]}}</button></div>
    </div>
  </OverlayOneColumn>

  <div @keyup="handleWriteModeKeyUp" class="write-mode-container">
    <div class="hint">
      <div class="hint-text">
        <span>Escape <button @click="toShortcuts">to menu</button></span>
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
import { useIpcStore } from '../stores/ipc';
import { useCallAi } from '../composables/useCallAi';

enum OverlayMode {
  SHORTCUTS = "shortcuts",
  EDIT_PRESETS = "edit-presets",
  NONE = "none",
}

const inputText = ref('');
const overlayMode = ref(OverlayMode.NONE);
const textareaRef = ref<HTMLDivElement>();
const router = useRouter();
const backButton = ref<HTMLButtonElement>();
const ipcStore = useIpcStore();
const { closeWindow, askAIShort,
  typeIntoWindowAndClose, searchInInternet, fastNote, dealToCalendar,
  addToKnowledgeBase, intoClipboardAndClose
} = useCallApi();

const { translateAndInsert } = useCallAi();

onMounted(() => {
  nextTick(() => {
    if (textareaRef.value) {
      focusTextarea();
    }
  })
})

const handleInput = (event: Event) => {
  inputText.value = (event.target as HTMLDivElement).innerText || '';
}

function focusTextarea() {
  textareaRef.value?.focus();
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(textareaRef.value!);
  range.collapse(false);
  selection?.removeAllRanges();
  selection?.addRange(range);
}

function toWriteMode() {
  overlayMode.value = OverlayMode.NONE;
  nextTick(() => {
    focusTextarea();
  })
}

function toShortcuts() {
  overlayMode.value = OverlayMode.SHORTCUTS;

  nextTick(() => {
    backButton.value?.focus();
  })
}

function toEditPresets() {
  overlayMode.value = OverlayMode.EDIT_PRESETS;
}

function translate(toLangNum: number) {
  translateAndInsert(toLangNum, inputText.value);
}

function toEditor() {
  if (!inputText.value.trim()) {
    router.push("/");
    return;
  }
  
  try {
    router.push({
      path: "/",
      query: { text: inputText.value }
    });
  } catch (error) {
    console.error("Error navigating to editor:", error);
    router.push("/");
  }
}

const handleWriteModeKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    toShortcuts();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
}

const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    toWriteMode();
  }
  else if (event.code === "Space") {
    typeIntoWindowAndClose(inputText.value)
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "KeyQ") {
    toEditor();
  }
  else if (event.code === "KeyW") {
    console.log("w");
  }
  else if (event.code === "KeyE") {
    console.log("e");
  }
  else if (event.code === "KeyR") {
    askAIShort(inputText.value);
  }
  else if (event.code === "KeyT") {
    dealToCalendar(inputText.value);
  }
  else if (event.code === "KeyA") {
    intoClipboardAndClose(inputText.value);
  }
  else if (event.code === "KeyS") {
    fastNote(inputText.value);
  }
  else if (event.code === "KeyD") {
    addToKnowledgeBase(inputText.value);
  }
  else if (event.code === "KeyF") {
    toEditPresets();
  }
  else if (event.code === "KeyG") {
    searchInInternet(inputText.value);
  }
  else if (event.code === "KeyZ") {
    translate(0);
  }
  else if (event.code === "KeyX") {
    translate(1);
  }
  else if (event.code === "KeyC") {
    translate(2);
  }
  else if (event.code === "KeyV") {
    translate(3);
  }
  else if (event.code === "KeyB") {
    translate(4);
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
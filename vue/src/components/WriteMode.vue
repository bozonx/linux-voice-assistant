<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.SHORTCUTS">
    <pre @keyup="handleShortCutKeyUp" class="shortcuts-list">
      Esc - <button ref="backButton" @click="toWriteMode">назад</button>
      Ctrl + q - <button @click="closeWindow">закрыть программу</button>
      q - <button @click="toEditor">в редактор</button>
      w - 
      e - 
      r - <button @click="askAIShort(inputText)">быстрый вопрос к AI</button>
      t - <button @click="dealToCalendar(inputText)">добавить дело в календарь</button>
      
      a - <button @click="intoClipboardAndClose(inputText)">в буфер обмена и закрыть окно</button>
      s - <button @click="fastNote(inputText)">быстрая заметка в Obsidian</button>
      d - <button @click="addToKnowledgeBase(inputText)">вставить в базу знаний</button>
      f - выбор пресета редактирования
      g - <button @click="searchInInternet(inputText)">поиск в интернете</button>

      <span v-if="ipcStore.data?.userConfig.toTranslateLanguages[0]">z - ➡️ <button @click="translate(0)">{{ipcStore.data?.userConfig.toTranslateLanguages[0]}}</button></span>
      <span v-if="ipcStore.data?.userConfig.toTranslateLanguages[1]">x - ➡️ <button @click="translate(1)">{{ipcStore.data?.userConfig.toTranslateLanguages[1]}}</button></span>
      <span v-if="ipcStore.data?.userConfig.toTranslateLanguages[2]">c - ➡️ <button @click="translate(2)">{{ipcStore.data?.userConfig.toTranslateLanguages[2]}}</button></span>
      <span v-if="ipcStore.data?.userConfig.toTranslateLanguages[3]">v - ➡️ <button @click="translate(3)">{{ipcStore.data?.userConfig.toTranslateLanguages[3]}}</button></span>
      <span v-if="ipcStore.data?.userConfig.toTranslateLanguages[4]">b - ➡️ <button @click="translate(4)">{{ipcStore.data?.userConfig.toTranslateLanguages[4]}}</button></span>
    </pre>
  </OverlayOneColumn>
  <div @keyup="handleWriteModeKeyUp" class="write-mode-container">
    <div class="hint">
      <div class="hint-text">
        <span>Escape <button @click="toMenu">to menu</button></span>
        <span>Shift + Enter <button @click="applyAndInsert">to apply</button></span>
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

function toMenu() {
  overlayMode.value = OverlayMode.SHORTCUTS;

  nextTick(() => {
    backButton.value?.focus();
  })
}

const handleInput = (event: Event) => {
  inputText.value = (event.target as HTMLDivElement).innerText || '';
  console.log(inputText.value);
}

function translate(toLangNum: number) {
  translateAndInsert(toLangNum, inputText.value);
}

function applyAndInsert() {
  typeIntoWindowAndClose(inputText.value);
}

function toEditor() {
  router.push("/");
}

const handleWriteModeKeyUp = (event: KeyboardEvent) => {
  console.log(event);
  if (event.code === "Escape") {
    toMenu();
  }
  else if (event.code === "q" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "Enter" && event.shiftKey) {
    console.log("Enter");
  }
}

const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    toWriteMode();
  }
  else if (event.code === "q" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "q") {
    toEditor();
  }
  else if (event.code === "w") {
    console.log("w");
  }
  else if (event.code === "e") {
    console.log("e");
  }
  else if (event.code === "r") {
    askAIShort(inputText.value);
  }
  else if (event.code === "t") {
    dealToCalendar(inputText.value);
  }
  else if (event.code === "a") {
    intoClipboardAndClose(inputText.value);
  }
  else if (event.code === "s") {
    fastNote(inputText.value);
  }
  else if (event.code === "d") {
    addToKnowledgeBase(inputText.value);
  }
  else if (event.code === "f") {
    // TODO: open edit presets
  }
  else if (event.code === "g") {
    searchInInternet(inputText.value);
  }
  else if (event.code === "z") {
    translate(0);
  }
  else if (event.code === "x") {
    translate(1);
  }
  else if (event.code === "c") {
    translate(2);
  }
  else if (event.code === "v") {
    translate(3);
  }
  else if (event.code === "b") {
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

.shortcuts-input {
  /* visibility: hidden; */
}
</style>
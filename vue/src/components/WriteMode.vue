<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.SHORTCUTS">
    <pre @keyup="handleShortCutKeyUp" class="shortcuts-list">
      Esc - <button ref="backButton" @click="toWriteMode">назад</button>
      Ctrl + q - закрыть программу
      q - в редактор
      w - 
      e - 
      r - быстрый вопрос к AI
      t - добавить дело в календарь
      
      a - в буфер обмена и закрыть окно
      s - быстрая заметка в Obsidian
      d - вставить в базу знаний
      f - выбор пресета редактирования
      g - поиск в интернете

      z - ➡️ RU > вставить
      x - ➡️ EN > вставить
      c - ➡️ ES > вставить
      v - ➡️ 
      b - ➡️ 
    </pre>
  </OverlayOneColumn>
  <div @keyup="handleKeyUp" class="write-mode-container">
    <div class="hint">
      <div class="hint-text">
        <span>Escape to menu</span>
        <span>Shift + Enter to apply and put to the editor</span>
        <span>Ctrl + q - закрыть программу</span>
      </div>
    </div>
    <div class="textarea-container">
      <div ref="textareaRef" @input="handleInput" class="textarea" contenteditable="true"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
enum OverlayMode {
  SHORTCUTS = "shortcuts",
  EDIT_PRESETS = "edit-presets",
  NONE = "none",
}

const currentLineText = ref('');
const overlayMode = ref(OverlayMode.NONE);
const textareaRef = ref<HTMLDivElement>();
const router = useRouter();
const backButton = ref<HTMLButtonElement>();

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

const handleInput = (event: Event) => {
  currentLineText.value = (event.target as HTMLDivElement).textContent || '';
}

const handleKeyUp = (event: KeyboardEvent) => {
  console.log(event);
  if (event.code === "Escape") {
    overlayMode.value = OverlayMode.SHORTCUTS;

    nextTick(() => {
      backButton.value?.focus();
    })
  }
  else if (event.code === "q" && event.ctrlKey) {
    router.push("/");
  }
  else if (event.code === "Enter" && event.shiftKey) {
    console.log("Enter");
  }
}

const handleShortCutKeyUp = (event: KeyboardEvent) => {
  console.log(event);
  if (event.code === "Escape") {
    toWriteMode();
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
<template>
  <OverlayOneColumn>
    <pre>
      Esc - назад
      Ctrl + q - закрыть программу
      q - ➡️ RU > вставить
      w - ➡️ EN > вставить
      e - ➡️ ES > вставить
      r - ➡️ 
      t - ➡️ 
      a - в буфер обмена
      s - выбор пресета редактирования
      d - 
      f - быстрая заметка в Obsidian
      g - поиск в интернете
      z - в редактор
      x - в базу знаний
      c - дело в календарь
      v - быстрый вопрос к AI
      b - 
    </pre>
  </OverlayOneColumn>
  <div class="write-mode-container">
    <div class="hint">
      <div class="hint-text">
        <span>Escape to menu</span>
        <span>Shift + Enter to apply and put to the editor</span>
        <span>Ctrl + q - закрыть программу</span>
      </div>
    </div>
    <div class="textarea-container">
      <div ref="textareaRef" @keyup="handleKeyUp" @input="handleInput" class="textarea" contenteditable="true"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentLineText = ref('');
const textareaRef = ref<HTMLDivElement>();

onMounted(() => {
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.focus();
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(textareaRef.value);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  })
})

const handleInput = (event: Event) => {
  currentLineText.value = (event.target as HTMLDivElement).textContent || '';
}

const handleKeyUp = (event: KeyboardEvent) => {
  console.log(event);
  if (event.code === "Escape") {
    router.push("/");
  }
  else if (event.code === "q" && event.ctrlKey) {
    router.push("/");
  }
  else if (event.code === "Enter" && event.shiftKey) {
    console.log("Enter");
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
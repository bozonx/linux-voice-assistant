<template>
  <div class="write-mode-container">
    <div class="hint">
      <div class="hint-text">
        <span>Escape to menu</span>
        <span>Left Shift to apply and put to the editor</span>
      </div>
    </div>
    <div class="textarea-container">
      <div ref="textareaRef" @input="handleInput" class="textarea" contenteditable="true"></div>
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
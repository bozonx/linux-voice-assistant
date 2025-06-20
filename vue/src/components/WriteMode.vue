<template>
  <div class="write-mode-container">
    <div ref="textareaRef" @input="handleInput" class="write-mode-textarea" contenteditable="true"></div>
    
    <!-- <textarea 
      class="write-mode-textarea" 
      v-model="text" 
      ref="textareaRef"
      @input="scrollToBottom"
      @focus="forceCursorToBottom"
    /> -->
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
  align-items: end;
  justify-content: center;
  height: 100%;
  min-height: 100%;
}

.write-mode-textarea {
  width: 80%;
  min-height: 40px;
  resize: none;
  border: 1px solid #000;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-family: monospace;
}
</style>
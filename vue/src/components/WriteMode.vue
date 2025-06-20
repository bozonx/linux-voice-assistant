<template>
  <div class="write-mode-container">
    <textarea 
      class="write-mode-textarea" 
      v-model="text" 
      ref="textareaRef"
      @input="scrollToBottom"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch, onMounted } from 'vue';

const text = ref('');
const textareaRef = ref<HTMLTextAreaElement>();

// Функция для прокрутки к низу textarea
const scrollToBottom = () => {
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.scrollTop = textareaRef.value.scrollHeight;
    }
  });
};

// Следим за изменениями текста и прокручиваем к низу
watch(text, () => {
  scrollToBottom();
});

// Прокручиваем к низу при монтировании компонента
onMounted(() => {
  scrollToBottom();
});
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
  height: 100%;
  resize: none;
}

</style>
<template>
  <div class="text-edit-container">
    <textarea
      id="inputText"
      :value="modelValue"
      placeholder="Enter text..."
      @input="handleInput"
      :disabled="isVoiceRecognitionActive"
      :class="{ 'disabled': isVoiceRecognitionActive }"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import TextEditToolbar from './TextEditToolbar.vue';

// Props definition
const props = defineProps<{
  modelValue: string;
  isVoiceRecognitionActive: boolean;
}>();

// Emits definition
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'toggleVoiceRecognition'): void;
  (e: 'correctText'): void;
  (e: 'editText'): void;
  (e: 'translateText', from: string, to: string): void;
  (e: 'transformText', type: string): void;
}>();

// Input handler with type safety
const handleInput = (event: Event): void => {
  const target = event.target as HTMLTextAreaElement;
  if (target) {
    emit('update:modelValue', target.value);
  }
};
</script>

<style scoped>
.text-edit-container {
  margin-bottom: 16px;
}

#inputText {
  width: 100%;
  min-height: 100px;
  padding: 6px;
  margin-bottom: 0px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

#inputText:focus {
  outline: none;
  border-color: #2196F3;
}

#inputText.disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.7;
}
</style> 
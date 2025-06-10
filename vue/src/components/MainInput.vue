<template>
  <textarea
    ref="textareaRef"
    class="main-input"
    placeholder="Enter text..."
    :value="store.value"
    @input="handleInput"
  ></textarea>
</template>

<script setup lang="ts">
import { useMainInputStore } from '../stores/mainInput'

const store = useMainInputStore()
const textareaRef = ref<HTMLTextAreaElement | null>(null)

watch(() => store.focusCount, (newValue, oldValue) => {
  if (newValue > oldValue) {
    textareaRef.value?.focus()
  }
})

watch(() => store.selectAllCount, (newValue, oldValue) => {
  if (newValue > oldValue) {
    textareaRef.value?.select()
  }
})

// Input handler with type safety
const handleInput = (event: Event): void => {
  const target = event.target as HTMLTextAreaElement
  if (target) {
    store.setValue(target.value)
  }
}
</script>

<style scoped>
.main-input {
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
}

.main-input:focus {
  outline: none;
  border-color: #2196F3;
}
</style> 
<template>
  <textarea
    ref="textareaRef"
    class="main-input"
    placeholder="Enter text..."
    :value="mainInputStore.value"
    @input="handleInput"
    @select="handleSelect"
    @mouseup="handleMouseUp"
  ></textarea>
</template>

<script setup lang="ts">
import { useMainInputStore } from '../stores/mainInput'

const mainInputStore = useMainInputStore()
const textareaRef = ref<HTMLTextAreaElement | null>(null)

watch(() => mainInputStore.focusCount, (newValue, oldValue) => {
  if (newValue > oldValue) {
    textareaRef.value?.focus()
  }
})

watch(() => mainInputStore.selectAllCount, (newValue, oldValue) => {
  if (newValue > oldValue) {
    textareaRef.value?.select()
  }
})

// Следим за изменениями выделения в store
watch(
  () => [mainInputStore.selectionStart, mainInputStore.selectionEnd],
  ([start, end]) => {
    if (textareaRef.value) {
      textareaRef.value.setSelectionRange(start, end)
    }
  }
)

const handleInput = (event: Event): void => {
  if (event.target) mainInputStore.setValue((event.target as HTMLTextAreaElement).value)
}

// Selection handler
const handleSelect = (event: Event): void => {
  const target = event.target as HTMLTextAreaElement
  if (target) {
    const start = target.selectionStart || 0
    const end = target.selectionEnd || 0
    const text = target.value.substring(start, end)

    mainInputStore.setSelection(text, start, end)
  }
}

// Очистка значений выделения при снятии выделения
const handleMouseUp = (event: Event): void => {
  const target = event.target as HTMLTextAreaElement
  if (target) {
    const start = target.selectionStart || 0
    const end = target.selectionEnd || 0
    
    // Если начало и конец выделения совпадают, значит выделение снято
    if (start === end) {
      mainInputStore.setSelection('', 0, 0)
    }
  }
}

</script>

<style scoped>
.main-input {
  display: block;
  width: 100%;
  min-height: 100%;
  padding: 6px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
  overflow-y: scroll;
  margin: 0px;
}

.main-input:focus {
  outline: none;
  border-color: #2196F3;
}
</style> 
<template>
  <textarea
    ref="textareaRef"
    class="textarea main-input"
    :placeholder="placeholder"
    :value="mainInputStore.value"
    @input="handleInput"
    @select="handleSelect"
    @mouseup="handleMouseUp"
  ></textarea>
</template>

<script setup lang="ts">
import { useMainInputStore } from '../stores/mainInput'

const props = defineProps<{
  placeholder?: string
}>()

const mainInputStore = useMainInputStore()
const textareaRef = ref<HTMLTextAreaElement | null>(null)

watch(
  () => mainInputStore.focusCount,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      textareaRef.value?.focus()
    }
  }
)

watch(
  () => mainInputStore.selectAllCount,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      textareaRef.value?.select()
    }
  }
)

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
  if (event.target)
    mainInputStore.setValue((event.target as HTMLTextAreaElement).value)
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
  width: 100%;
  height: 100%;
  resize: none;
}
</style>

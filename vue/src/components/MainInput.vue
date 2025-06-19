<template>
  <textarea
    ref="textareaRef"
    class="main-input"
    placeholder="Enter text..."
    :value="store.value"
    @input="handleInput"
    @select="handleSelect"
    @mouseup="handleMouseUp"
  ></textarea>
</template>

<script setup lang="ts">
import { useMainInputStore } from '../stores/mainInput'
import { DebounceCallIncreasing } from 'squidlet-lib'
import { useIpcStore } from '../stores/ipc'

const ipcStore = useIpcStore()
const store = useMainInputStore()
const textareaRef = ref<HTMLTextAreaElement | null>(null)
const debounced = new DebounceCallIncreasing()

watch(() => store.value, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    debounced.invoke(() => {
      ipcStore.saveMainInput(newValue)
    }, 600)
  }
})

watch(() => store.focusCount, (newValue, oldValue) => {
  if (newValue > oldValue) {
    textareaRef.value?.focus()
  }
})

// watch(() => store.selectAllCount, (newValue, oldValue) => {
//   if (newValue > oldValue) {
//     textareaRef.value?.select()
//   }
// })

// Следим за изменениями выделения в store
watch(
  () => [store.selectionStart, store.selectionEnd],
  ([start, end]) => {
    if (textareaRef.value) {
      textareaRef.value.setSelectionRange(start, end)
    }
  }
)

// Input handler with type safety
const handleInput = (event: Event): void => {
  const target = event.target as HTMLTextAreaElement
  if (target) {
    store.setValue(target.value)
  }
}

// Selection handler
const handleSelect = (event: Event): void => {
  const target = event.target as HTMLTextAreaElement
  if (target) {
    const start = target.selectionStart || 0
    const end = target.selectionEnd || 0
    const text = target.value.substring(start, end)
    store.setSelection(text, start, end)
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
      store.setSelection('', 0, 0)
    }
  }
}

</script>

<style scoped>
.main-input {
  width: 100%;
  min-height: 150px;
  padding: 6px;
  margin-bottom: 0px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
  overflow-y: scroll;
}

.main-input:focus {
  outline: none;
  border-color: #2196F3;
}
</style> 
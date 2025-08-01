<template>
  <textarea
    class="textarea"
    :placeholder="placeholder"
    v-model="value"
    @select="handleSelect"
    @mouseup="handleSelect"
    @keyup="handleSelect"
    ref="textareaRef"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string
  placeholder?: string
  selected?: string
}>()

const emit = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'update:selected', selected: string): void
  (e: 'select', value: string, start: number, end: number): void
}>()

const textareaRef = ref<HTMLTextAreaElement>()

const value = computed({
  get: () => props.value,
  set: (value: string) => emit('update:value', value),
})

const selected = computed({
  get: () => props.selected || '',
  set: (selected: string) => emit('update:selected', selected),
})

const handleSelect = () => {
  if (!textareaRef.value) return

  const textarea = textareaRef.value
  const start = textarea.selectionStart
  const end = textarea.selectionEnd

  if (start === end) {
    // Нет выделения
    selected.value = ''

    emit('select', '', start, end)
  } else {
    // Есть выделение
    const selectedText = textarea.value.substring(start, end)
    selected.value = selectedText

    emit('select', selected.value, start, end)
  }
}

// Экспортируем функцию focus для внешнего использования
defineExpose({
  focus: () => textareaRef.value?.focus(),
  select: (start?: number, end?: number) => {
    if (typeof start === 'undefined' && typeof end === 'undefined') {
      textareaRef.value?.select()
    } else {
      textareaRef.value?.setSelectionRange(start, end)
    }
  },
})
</script>

<style scoped>
textarea {
  width: 100%;
  min-height: 100px;
  resize: vertical;
}
</style>

<template>
  <FieldTextArea
    ref="textareaRef"
    class="main-input"
    placeholder="Введите текст..."
    :value="writerInputStore.value"
    @update:value="handleInput"
  />
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

import { useMenuModalsStore } from '../stores/menuModals'
import { useWriterInputStore } from '../stores/writerInput'

const writerInputStore = useWriterInputStore()
const menuModalsStore = useMenuModalsStore()
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// set value from route params and focus
onMounted(async () => {
  await nextTick()
  writerInputStore.focus()
})

// set focus on close modal
watch(
  () => menuModalsStore.anyModalOpen,
  (value) => {
    if (!value) writerInputStore.focus()
  }
)

// handle focus
watch(
  () => writerInputStore.focusCount,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      textareaRef.value?.focus()
    }
  }
)

const handleInput = (value: string): void => {
  writerInputStore.setValue(value)
}
</script>

<style scoped>
.main-input {
  height: 100%;
  resize: none;
}
</style>

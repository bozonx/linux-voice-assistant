<template>
  <FieldTextArea
    ref="textareaRef"
    class="main-input"
    :placeholder="t('input.textPlaceholder')"
    :value="editorInputStore.value"
    @update:value="handleInput"
    @select="handleSelect"
  />
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch, watchEffect } from 'vue'

import { useI18n } from '../composables/useI18n'
import { useEditorInputStore } from '../stores/editorInput'
import { useMenuModalsStore } from '../stores/menuModals'
import { useRouteParams } from '../stores/routeParams'

const editorInputStore = useEditorInputStore()
const routeParamsStore = useRouteParams()
const menuModalsStore = useMenuModalsStore()
const { t } = useI18n()
type TextareaExposed = {
  focus: () => void
  select: (start?: number, end?: number) => void
}

const textareaRef = ref<TextareaExposed | null>(null)

// set value from route params and focus
onMounted(async () => {
  if (routeParamsStore.params.text) {
    editorInputStore.setValue(routeParamsStore.params.text)
  }

  await nextTick()
  editorInputStore.focus()
})

// set focus on close modal
watch(
  () => menuModalsStore.anyModalOpen,
  (value) => {
    if (!value) editorInputStore.focus()
  }
)

// handle focus
watch(
  () => editorInputStore.focusCount,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      textareaRef.value?.focus()
    }
  }
)

// handle select all
watch(
  () => editorInputStore.selectAllCount,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      textareaRef.value?.select()
    }
  }
)

watchEffect(() => {
  textareaRef.value?.select(
    editorInputStore.selectionStart,
    editorInputStore.selectionEnd
  )
})

const handleInput = (value: string): void => {
  editorInputStore.setValue(value)
}

const handleSelect = (value: string, start: number, end: number): void => {
  editorInputStore.setSelection(value, start, end)
}
</script>

<style scoped>
.main-input {
  height: 100%;
  resize: none;
}
</style>

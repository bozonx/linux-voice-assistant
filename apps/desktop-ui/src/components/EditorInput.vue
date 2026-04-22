<template>
  <FieldTextArea
    ref="textareaRef"
    class="main-input"
    placeholder="Введите текст..."
    :value="editorInputStore.value"
    @update:value="handleInput"
    @select="handleSelect"
  />
</template>

<script setup lang="ts">
import { useEditorInputStore } from '../stores/editorInput'
import { useMenuModalsStore } from '../stores/menuModals'
import { useRouteParams } from '../stores/routeParams'

const editorInputStore = useEditorInputStore()
const routeParamsStore = useRouteParams()
const menuModalsStore = useMenuModalsStore()
const textareaRef = ref<HTMLTextAreaElement | null>(null)

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

// Следим за изменениями выделения в store
watch(
  () => [editorInputStore.selectionStart, editorInputStore.selectionEnd],
  ([start, end]) => {
    if (textareaRef.value) {
      textareaRef.value.select(start, end)
    }
  }
)

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

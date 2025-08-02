<template>
  <FieldTextArea
    ref="textareaRef"
    class="main-input"
    placeholder="Введите текст..."
    :value="chatInputStore.value"
    @update:value="handleInput"
  />
</template>

<script setup lang="ts">
import { useChatInputStore } from '../stores/chatInput'
import { useRouteParams } from '../stores/routeParams'

const chatInputStore = useChatInputStore()
const routeParamsStore = useRouteParams()
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// set value from route params and focus
onMounted(async () => {
  if (routeParamsStore.params.text) {
    chatInputStore.setValue(routeParamsStore.params.text)
  }

  await nextTick()
  chatInputStore.focus()
})

// set focus on close modal
// watch(
//   () => menuModalsStore.anyModalOpen,
//   (value) => {
//     if (!value) chatInputStore.focus()
//   }
// )

// handle focus
watch(
  () => chatInputStore.focusCount,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      textareaRef.value?.focus()
    }
  }
)

const handleInput = (value: string): void => {
  chatInputStore.setValue(value)
}
</script>

<style scoped>
.main-input {
  height: 100%;
  resize: none;
}
</style>

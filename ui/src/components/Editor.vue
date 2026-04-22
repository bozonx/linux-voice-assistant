<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex-1 flex gap-2">
      <div class="flex-1">
        <EditorInput />
      </div>
      <div class="flex gap-2 flex-col">
        <Button sm square @click="voiceRecognition" title="Голосовой ввод">
          <Icon icon="mdi:microphone" height="24" />
        </Button>
        <Button sm square @click="editorInputStore.clear" title="Очистить">
          <Icon icon="mdi:clear" height="24" />
        </Button>
        <Button
          sm
          square
          @click="editorInputStore.selectAll"
          title="Выбрать всё"
        >
          <Icon icon="mdi:select-all" height="24" />
        </Button>
      </div>
    </div>

    <div>
      <p class="text-xs mt-1 mb-2 text-gray-500">
        Подсказка: можно выделить текст, и тогда изменения будут касаться только
        того, что выделено.
      </p>

      <div class="flex gap-1 w-full flex-wrap">
        <Button
          v-for="item in editMenuStore.getEditMenu()"
          :key="item.name"
          sm
          neutral
          :icon="item.icon"
          @click="doEdit(item.action)"
          >{{ item.name }}</Button
        >
      </div>

      <h2 class="mt-4 mb-1 text-sm">Действия</h2>
      <div class="flex gap-1 w-full flex-wrap">
        <Button
          v-for="item in actionMenuStore.getActionsMenu()"
          :key="item.name"
          :icon="item.icon"
          @click="doAction(item.action)"
          >{{ item.name }}</Button
        >
      </div>

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'

import useToast from '../composables/useToast'
import { useActionMenuStore } from '../stores/actionMenu'
import { useEditMenuStore } from '../stores/edditMenu'
import { useEditorInputStore } from '../stores/editorInput'
import { useHistoryStore } from '../stores/history'
import { MenuModals, useMenuModalsStore } from '../stores/menuModals'
import { Icon } from '@iconify/vue'

const actionMenuStore = useActionMenuStore()
const editorInputStore = useEditorInputStore()
const editMenuStore = useEditMenuStore()
const menuModalsStore = useMenuModalsStore()
const { toast } = useToast()
const historyStore = useHistoryStore()

onUnmounted(async () => {
  if (editorInputStore.value) {
    historyStore.saveEditorHistory(editorInputStore.value)
  }

  await historyStore.clearMainInputTmp()
})

function voiceRecognition() {
  menuModalsStore.nextModal(MenuModals.VOICE_RECOGNITION, {
    onCorrected: (resultText: string) => {
      editorInputStore.setValueAtCursor(resultText)
      menuModalsStore.closeAll()
    },
  })
}

const doAction = async (cb: (text: string) => Promise<void>): Promise<void> => {
  let value = editorInputStore.value

  if (editorInputStore.selectedText) {
    value = editorInputStore.selectedText
  }

  value = value.trim()

  return cb(value)
}

async function doEdit(cb: (text: string) => Promise<string>): Promise<void> {
  let value = editorInputStore.value

  if (editorInputStore.selectedText) {
    value = editorInputStore.selectedText
  }

  value = value.trim()

  if (!value) {
    toast('Текст не выбран', 'error')
    return
  }

  const result = await cb(value)

  editorInputStore.selectedText
    ? editorInputStore.replaceSelection(result)
    : editorInputStore.setValue(result)
}
</script>

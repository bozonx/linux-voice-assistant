<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1 class="menu-title">Сравните результат</h1>
    <div class="flex-1 relative">
      <DiffInput
        :oldText="props.oldText"
        :newText="props.newText"
        @update:newText="updateNewText"
      />
    </div>

    <ShortcutList
      :leftLetterKeys="leftLetterKeys"
      :spaceKey="spaceKey"
      :toEditorVisible="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useRouter } from 'vue-router'

import { ActionItem, useActionMenuStore } from '../../stores/actionMenu'
import { useEditorInputStore } from '../../stores/editorInput'
import { useIpcStore } from '../../stores/ipc'
import { useMenuModalsStore } from '../../stores/menuModals'
import { useRouteParams } from '../../stores/routeParams'

const props = defineProps<{
  oldText: string
  newText: string
}>()

const ipcStore = useIpcStore()
const editorInputStore = useEditorInputStore()
const menuModalsStore = useMenuModalsStore()
const editedNewText = ref(props.newText)
const actionMenuStore = useActionMenuStore()
const DEFAULT_ACTIONS = actionMenuStore.DEFAULT_ACTIONS
const routeParams = useRouteParams()
const router = useRouter()

const leftLetterKeys = [
  ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined,
  DEFAULT_ACTIONS[1],
  {
    name: 'Вставить в редактор',
    action: async () => {
      editorInputStore.setValue(editedNewText.value)
      routeParams.setParams({ text: editedNewText.value })
      editorInputStore.focus()
      menuModalsStore.closeAll()
      await router.push('/')
    },
  },
].filter(Boolean) as ActionItem[]

const spaceKey = ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined

function updateNewText(text: string) {
  editedNewText.value = text
}
</script>

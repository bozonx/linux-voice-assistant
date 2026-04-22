<template>
<div class="flex flex-col gap-4 w-full h-full"> 
  <h1>Вставить</h1>

  <div class="flex-1">
    <DiffInput
      v-if="props.oldText"
      :oldText="props.oldText"
      :newText="props.text"
      @update:newText="handleNewText" />
    <TextPreview v-else :text="props.text" />
  </div>

  <ShortcutList
    :text="props.text"
    :leftLetterKeys="leftLetterKeys"
    :spaceKey="spaceKey"
    :stopListening="props.stopListening"
    :toEditorVisible="!routeParamsStore.isEditorPage()" />
</div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc'
import { type ActionItem, useActionMenuStore } from '../../stores/actionMenu'
import { useRouteParams } from '../../stores/routeParams'

const routeParamsStore = useRouteParams()

const props = withDefaults(
  defineProps<{
    text?: string
    oldText?: string
    allowInsertButton?: boolean
    stopListening?: boolean
  }>(),
  {
    text: '',
    oldText: '',
    allowInsertButton: true,
    stopListening: false,
  }
)

const emit = defineEmits<{
  (e: 'update:text', value: string): void
}>()

const ipcStore = useIpcStore()
const actionMenuStore = useActionMenuStore()
const actionsMenu = computed(() => actionMenuStore.getActionsMenu())

const leftLetterKeys = computed<ActionItem[]>(() =>
  actionsMenu.value.map((item: ActionItem, index: number) => ({
    ...item,
    disabled: index === 0 && !needShowInsertButton(),
  }))
)

const spaceKey = computed<ActionItem | undefined>(() => {
  const [firstItem] = actionsMenu.value

  if (!firstItem) {
    return undefined
  }

  return {
    ...firstItem,
    disabled: !needShowInsertButton(),
  }
})

function handleNewText(newText: string) {
  emit('update:text', newText)
}

function needShowInsertButton() {
  return Boolean(ipcStore.params?.windowId && props.text && props.allowInsertButton)
}
</script>

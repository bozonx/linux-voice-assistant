<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1 class="menu-title">Проверьте результат</h1>
    <div class="flex-1 relative">
      <TextPreview :text="props.text" class="absolute" />
    </div>

    <ShortcutList 
      :text="props.text"
      :leftLetterKeys="leftLetterKeys"
      :spaceKey="spaceKey"
      :toEditorVisible="true" />
  </div>
</template>

<script setup lang="ts">
import { ActionItem, useActionMenuStore } from '../../stores/actionMenu';
import { useIpcStore } from '../../stores/ipc';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const actionMenuStore = useActionMenuStore();
const DEFAULT_ACTIONS = actionMenuStore.DEFAULT_ACTIONS;
const ipcStore = useIpcStore();

const leftLetterKeys = [
  ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined,
  DEFAULT_ACTIONS[1],
  // {
  //   name: "Вставить в редактор",
  //   action: () => {
  //     routeParams.toEditor(props.text);
  //   },
  // }
] as ActionItem[]

const spaceKey = ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined;
</script>
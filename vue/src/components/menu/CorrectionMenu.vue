<template>
<div class="flex flex-col gap-4 w-full h-full"> 
  <h1 class="menu-title">Проверьте результат коррекции</h1>
  <div class="flex-1 relative">
    <DiffInput :oldText="props.oldText" :newText="props.newText" @update:newText="handleNewText" />
  </div>

  <ShortcutList :text="props.newText" :leftLetterKeys="leftLetterKeys" :spaceKey="spaceKey" />
</div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { ActionItem, useActionMenuStore } from '../../stores/actionMenu';
import { useMainInputStore } from '../../stores/mainInput';
import { useMenuModalsStore } from '../../stores/menuModals';

const ipcStore = useIpcStore();
const actionMenuStore = useActionMenuStore();
const DEFAULT_ACTIONS = actionMenuStore.DEFAULT_ACTIONS;
const mainInputStore = useMainInputStore();
const menuModalsStore = useMenuModalsStore();

const props = defineProps({
  newText: {
    type: String,
    required: true,
  },
  oldText: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'update:newText', value: string): void;
}>();

function handleNewText(newText: string) {
  emit('update:newText', newText);
}

const leftLetterKeys = [
  ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined,
  DEFAULT_ACTIONS[1],
  {
    name: "Вставить в редактор",
    action: () => {
      mainInputStore.setValue(props.newText);
      mainInputStore.focus();
      menuModalsStore.closeAll();
    },
  }
] as ActionItem[]

const spaceKey = ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined;
</script>

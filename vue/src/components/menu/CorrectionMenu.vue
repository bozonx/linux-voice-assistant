<template>
<div class="flex flex-col gap-4 w-full h-full"> 
  <h1>Проверьте результат коррекции</h1>

  <div class="flex-1">
    <DiffInput :oldText="props.oldText" :newText="props.newText" @update:newText="handleNewText" />
  </div>

  <ShortcutList
    :text="props.newText"
    :spaceKey="spaceKey"
    :toEditorVisible="true" />
</div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { useActionMenuStore } from '../../stores/actionMenu';

const ipcStore = useIpcStore();
const actionMenuStore = useActionMenuStore();
const DEFAULT_ACTIONS = actionMenuStore.DEFAULT_ACTIONS;

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
  (e: 'update:text', value: string): void;
}>();

function handleNewText(newText: string) {
  emit('update:text', newText);
}

const spaceKey = ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined;
</script>

<template>
<div class="flex flex-col gap-4 w-full h-full"> 
  <h1 class="menu-title">Проверьте результат коррекции</h1>
  <div class="flex-1 relative">
    <DiffInput :oldText="props.oldText" :newText="props.text" @update:newText="handleNewText" />
  </div>

  <ShortcutList :text="props.text" :leftLetterKeys="leftLetterKeys" :spaceKey="spaceKey" />
</div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import miniToastr from "mini-toastr";
import { ActionItem, useActionMenuStore } from '../../stores/actionMenu';

const ipcStore = useIpcStore();
const actionMenuStore = useActionMenuStore();
const DEFAULT_ACTIONS = actionMenuStore.DEFAULT_ACTIONS;

const props = defineProps({
  text: {
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
] as ActionItem[]

const spaceKey = ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined;



        // if (!text?.trim()) return;
        // if (text.length < appConfig.minCorrectionLength) {
        //   miniToastr.warn("Слишком короткий текст для коррекции");
        //   return;
        // }
        // overlayStore.showCorrection();
        // const newText = await correctText(mainInputStore.value);
        // overlayStore.showDiff(newText);
</script>


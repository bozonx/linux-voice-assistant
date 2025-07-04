<template>
  <Overlay>
    <AiTaskMenu :text="text" :escToEditor="true" />
  </Overlay>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';

const ipcStore = useIpcStore();
const text = computed(() => ipcStore.params!.selectedText || '');
</script>
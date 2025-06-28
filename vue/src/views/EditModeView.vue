<template>
  <EditPresetsMenu :text="text" :escToEditor="true" />
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';

const ipcStore = useIpcStore();
const text = computed(() => ipcStore.data!.selectedText || '');
</script>
<template>
  <InsertMenu :showBackButton="false" 
    :allowInsertButton="false"
    :text="text" />
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';

const ipcStore = useIpcStore();
const text = computed(() => ipcStore.params!.selectedText || '');
</script>
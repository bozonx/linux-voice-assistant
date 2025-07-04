<template>
  <Overlay> 
    <InsertMenu :allowInsertButton="false" :text="text" />
  </Overlay>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';

const ipcStore = useIpcStore();
const text = computed(() => ipcStore.params!.selectedText || '');
</script>
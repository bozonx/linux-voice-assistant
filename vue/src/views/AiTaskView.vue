<template>
  <Overlay>
    <AiTaskMenu 
      :text="text"
      :escToEditor="true"
      :stopListening="menuModalsStore.anyModalOpen" />
  </Overlay>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { useMenuModalsStore } from '../stores/menuModals';

const ipcStore = useIpcStore();
const menuModalsStore = useMenuModalsStore();
const text = computed(() => ipcStore.params!.selectedText || '');
</script>
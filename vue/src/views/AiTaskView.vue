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
import { useNavPanelStore } from '../stores/navPanel';

const ipcStore = useIpcStore();
const menuModalsStore = useMenuModalsStore();
const navPanelStore = useNavPanelStore();
const text = computed(() => ipcStore.params!.selectedText || '');

navPanelStore.resetNavParams({
  escBtnVisible: false,
});
</script>
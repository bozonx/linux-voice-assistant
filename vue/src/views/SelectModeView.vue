<template>
  <Overlay> 
    <InsertMenu :allowInsertButton="false" :text="text" />
  </Overlay>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { useNavPanelStore } from '../stores/navPanel';

const navPanelStore = useNavPanelStore();
const ipcStore = useIpcStore();
const text = computed(() => ipcStore.params!.selectedText || '');

navPanelStore.resetNavParams({
  escBtnText: "Меню",
});
</script>
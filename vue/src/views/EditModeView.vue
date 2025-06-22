<template>
  <EditPresets :text="text" :showBackButton="false" />
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';

const ipcStore = useIpcStore();
const text = ref('');

onMounted(() => {
  text.value = ipcStore.data!.selectedText || '';
});

</script>
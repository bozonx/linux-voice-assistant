<template>
  <EditPresets @close="toEditor" :text="text" />
</template>

<script setup lang="ts">
import { useRouteParams } from '../stores/routeParams';
import { useRouter } from 'vue-router';
import { useIpcStore } from '../stores/ipc';

const routeParamsStore = useRouteParams();
const router = useRouter();
const ipcStore = useIpcStore();
const text = ref('');

onMounted(() => {
  text.value = ipcStore.data!.selectedText || '';
});

function toEditor() {
  if (text.value?.trim()) {
    routeParamsStore.setParams({ text });
  }
  
  router.push("/");
}
</script>
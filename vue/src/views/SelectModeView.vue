<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.EDIT_PRESETS">
    <EditPresets @close="toShortcuts" :text="text" />
  </OverlayOneColumn>

  <InsertShortCuts :showBackButton="false" :showInsertButton="false" @editPresets="toEditPresets"
    :text="text" />
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';

enum OverlayMode {
  EDIT_PRESETS = "edit-presets",
  NONE = "none",
}

const ipcStore = useIpcStore();
const overlayMode = ref(OverlayMode.NONE);
const text = ref('');

onMounted(() => {
  text.value = ipcStore.data!.selectedText || '';
});

function toShortcuts() {
  overlayMode.value = OverlayMode.NONE;
}

function toEditPresets() {
  overlayMode.value = OverlayMode.EDIT_PRESETS;
}
</script>

<style scoped>
</style>
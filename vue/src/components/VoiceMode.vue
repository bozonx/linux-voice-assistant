<template>
  <Overlay v-if="overlayMode === OverlayMode.INSERT_MENU">
    <InsertMenu :text="correctedText" :showBackButton="false" />
  </Overlay>
  
  <div>
    <VoiceRecognitionMenu v-if="ipcStore.params?.isWindowShown" :showBackButton="false" @corrected="handleCorrected" />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';

enum OverlayMode {
  INSERT_MENU = "insert-menu",
  NONE = "none",
}

const correctedText = ref('');
const overlayMode = ref(OverlayMode.NONE);
const ipcStore = useIpcStore();

watch(() => ipcStore.params?.isWindowShown, (isWindowShown) => {
  if (isWindowShown) {
    overlayMode.value = OverlayMode.NONE;
    correctedText.value = '';
  }
})


function toInsertMenu() {
  overlayMode.value = OverlayMode.INSERT_MENU;
}

function handleCorrected(text: string) {
  correctedText.value = text;
  toInsertMenu();
}

</script>

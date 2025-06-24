<template>
  <Overlay v-if="overlayMode === OverlayMode.INSERT_MENU">
    <InsertMenu :text="correctedText" :showBackButton="false" @editPresets="toEditPresets" />
  </Overlay>
  
  <Overlay v-if="overlayMode === OverlayMode.EDIT_PRESETS">
    <EditPresetsMenu @close="toInsertMenu" :text="correctedText" />
  </Overlay>

  <div>
    <VoiceRecognitionMenu :showBackButton="false" @corrected="handleCorrected" />
  </div>
</template>

<script setup lang="ts">
enum OverlayMode {
  INSERT_MENU = "insert-menu",
  EDIT_PRESETS = "edit-presets",
  NONE = "none",
}

const correctedText = ref('');
const overlayMode = ref(OverlayMode.NONE);

function toInsertMenu() {
  overlayMode.value = OverlayMode.INSERT_MENU;
}

function toEditPresets() {
  overlayMode.value = OverlayMode.EDIT_PRESETS;
}

function handleCorrected(text: string) {
  correctedText.value = text;
  toInsertMenu();
}

</script>

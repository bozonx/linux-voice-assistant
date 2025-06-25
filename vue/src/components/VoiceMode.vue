<template>
  <Overlay v-if="overlayMode === OverlayMode.INSERT_MENU">
    <InsertMenu :text="correctedText" :showBackButton="false" />
  </Overlay>
  
  <div>
    <VoiceRecognitionMenu :showBackButton="false" @corrected="handleCorrected" />
  </div>
</template>

<script setup lang="ts">
enum OverlayMode {
  INSERT_MENU = "insert-menu",
  NONE = "none",
}

const correctedText = ref('');
const overlayMode = ref(OverlayMode.NONE);

function toInsertMenu() {
  overlayMode.value = OverlayMode.INSERT_MENU;
}

function handleCorrected(text: string) {
  correctedText.value = text;
  toInsertMenu();
}

</script>

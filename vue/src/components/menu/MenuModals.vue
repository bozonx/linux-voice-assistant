<template>
  <Overlay v-if="overlayMode === OverlayMode.MENU">
    <InsertMenu @back="overlayStore.hideOverlay"
       :showToEditor="false" :text="mainInputStore.value" />
    <EditPresetsMenu @close="overlayStore.hideOverlay" :text="mainInputStore.value" />
    <InProgressMessage :correction="true" />
    <DiffMenu :oldText="mainInputStore.value" :newText="overlayStore.diffText" @close="overlayStore.hideOverlay" />
    <VoiceRecognitionMenu @close="overlayStore.hideOverlay" @corrected="handleCorrected" />
    <TranslateMenu :text="mainInputStore.value" @back="overlayStore.hideOverlay" />
  </Overlay>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
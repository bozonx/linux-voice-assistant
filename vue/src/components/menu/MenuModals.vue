<template>
  <Overlay v-if="menuModalsStore.currentModal !== MenuModals.NONE">
    <InsertMenu v-if="menuModalsStore.currentModal === MenuModals.INSERT" v-bind="menuModalsStore.currentModalParams" />
    <EditPresetsMenu v-else-if="menuModalsStore.currentModal === MenuModals.EDIT_PRESETS" v-bind="menuModalsStore.currentModalParams" />
    <CorrectionMenu v-else-if="menuModalsStore.currentModal === MenuModals.CORRECTION" v-bind="menuModalsStore.currentModalParams" />
    <DiffMenu v-else-if="menuModalsStore.currentModal === MenuModals.DIFF" v-bind="menuModalsStore.currentModalParams" />
    <VoiceRecognitionMenu v-else-if="menuModalsStore.currentModal === MenuModals.VOICE_RECOGNITION" v-bind="menuModalsStore.currentModalParams" />
    <TranslateMenu v-else-if="menuModalsStore.currentModal === MenuModals.TRANSLATE" v-bind="menuModalsStore.currentModalParams" />
    <PreviewMenu v-else-if="menuModalsStore.currentModal === MenuModals.PREVIEW" v-bind="menuModalsStore.currentModalParams" />
  </Overlay>

  <Overlay v-if="menuModalsStore.pendingModal">
    <InProgressMessage v-bind="menuModalsStore.pendingModal" />
  </Overlay>
</template>

<script setup lang="ts">
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';

const menuModalsStore = useMenuModalsStore();
</script>
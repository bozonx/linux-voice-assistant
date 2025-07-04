<template>
  <Overlay v-if="menuModalsStore.currentModal !== MenuModals.NONE" :modal="true">
    <InsertMenu v-if="menuModalsStore.currentModal === MenuModals.INSERT" v-bind="menuModalsStore.currentModalParams" />
    <AiTaskMenu v-else-if="menuModalsStore.currentModal === MenuModals.AI_TASK" v-bind="menuModalsStore.currentModalParams" />
    <CorrectionMenu v-else-if="menuModalsStore.currentModal === MenuModals.CORRECTION" v-bind="menuModalsStore.currentModalParams" />
    <DiffMenu v-else-if="menuModalsStore.currentModal === MenuModals.DIFF" v-bind="menuModalsStore.currentModalParams" />
    <VoiceRecognitionMenu v-else-if="menuModalsStore.currentModal === MenuModals.VOICE_RECOGNITION" v-bind="menuModalsStore.currentModalParams" />
    <TranslateMenu v-else-if="menuModalsStore.currentModal === MenuModals.TRANSLATE" v-bind="menuModalsStore.currentModalParams" />
    <PreviewMenu v-else-if="menuModalsStore.currentModal === MenuModals.PREVIEW" v-bind="menuModalsStore.currentModalParams" />
  </Overlay>

  <Overlay v-if="menuModalsStore.pendingModal" :modal="true">
    <InProgressMessage v-bind="menuModalsStore.pendingModal" />
  </Overlay>
</template>

<script setup lang="ts">
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';

const menuModalsStore = useMenuModalsStore();
</script>
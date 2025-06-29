<template>
  <Overlay v-if="currentModal !== MenuModals.NONE">
    <InsertMenu v-if="currentModal === MenuModals.INSERT" v-bind="currentModalParams" />
    <EditPresetsMenu v-else-if="currentModal === MenuModals.EDIT_PRESETS" v-bind="currentModalParams" />
    <InProgressMessage v-else-if="currentModal === MenuModals.PENDING" v-bind="currentModalParams" />
    <DiffMenu v-else-if="currentModal === MenuModals.DIFF" v-bind="currentModalParams" />
    <VoiceRecognitionMenu v-else-if="currentModal === MenuModals.VOICE_RECOGNITION" v-bind="currentModalParams" />
    <TranslateMenu v-else-if="currentModal === MenuModals.TRANSLATE" v-bind="currentModalParams" />
  </Overlay>
</template>

<script setup lang="ts">
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';

const menuModalsStore = useMenuModalsStore();

const currentModal = computed(() => menuModalsStore.currentModal);
const currentModalParams = computed(() => menuModalsStore.currentModalParams);
</script>
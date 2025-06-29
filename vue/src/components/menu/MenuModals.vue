<template>
  <Overlay v-if="currentModal !== MenuModals.NONE">
    <div>
      <div v-for="breadcrumb in currentBreadcrumbs" :key="breadcrumb">
        {{ breadcrumb }}
      </div>
    </div>

    <InsertMenu v-if="currentModal === MenuModals.INSERT" v-bind="currentModalParams" :onBack="onBack" :showBackButton="showBackButton" />
    <EditPresetsMenu v-else-if="currentModal === MenuModals.EDIT_PRESETS" v-bind="currentModalParams" :onBack="onBack" :showBackButton="showBackButton" />
    <InProgressMessage v-else-if="currentModal === MenuModals.PENDING" v-bind="currentModalParams" :onBack="onBack" :showBackButton="showBackButton" />
    <DiffMenu v-else-if="currentModal === MenuModals.DIFF" v-bind="currentModalParams" :onBack="onBack" :showBackButton="showBackButton" />
    <VoiceRecognitionMenu v-else-if="currentModal === MenuModals.VOICE_RECOGNITION" v-bind="currentModalParams" :onBack="onBack" :showBackButton="showBackButton" />
    <TranslateMenu v-else-if="currentModal === MenuModals.TRANSLATE" v-bind="currentModalParams" :onBack="onBack" :showBackButton="showBackButton" />
  </Overlay>
</template>

<script setup lang="ts">
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';

const menuModalsStore = useMenuModalsStore();

const currentModal = computed(() => menuModalsStore.currentModal);
const currentModalParams = computed(() => menuModalsStore.currentModalParams);
const currentBreadcrumbs = computed(() => menuModalsStore.currentBreadcrumbs);
const showBackButton = computed(() => currentBreadcrumbs.value.length > 1);

onMounted(() => {
  menuModalsStore.clearBreadcrumbs();
});

const onBack = () => {
  menuModalsStore.popBreadcrumb();

  if (currentBreadcrumbs.value.length === 0) {
    menuModalsStore.hideModal();
  }
};
</script>
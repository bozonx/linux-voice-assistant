<template>
  <ContentPadding>
    <VoiceRecognitionMenu 
      v-if="ipcStore.params?.isWindowShown"
      :showBackButton="false"
      :escToMenu="true"
      @corrected="handleCorrected" />
  </ContentPadding>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { MenuModals, useMenuModalsStore } from '../stores/menuModals';
import { useNavPanelStore } from '../stores/navPanel';
import { useMainInputStore } from '../stores/mainInput';

const ipcStore = useIpcStore();
const menuModalsStore = useMenuModalsStore();
const navPanelStore = useNavPanelStore();
const mainInputStore = useMainInputStore();

navPanelStore.resetNavParams({});

function handleCorrected(
  resultText: string,
  recognizedText: string,
) {
  if (recognizedText) {
    mainInputStore.setValue(recognizedText);
  }

  menuModalsStore.nextModal(MenuModals.INSERT, {
    text: resultText,
  });
}
</script>

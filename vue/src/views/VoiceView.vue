<template>
  <Overlay>
    <VoiceRecognitionMenu 
      v-if="ipcStore.params?.isWindowShown"
      :showBackButton="false"
      :escToMenu="true"
       @corrected="handleCorrected" />
  </Overlay>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { MenuModals, useMenuModalsStore } from '../stores/menuModals';
import { useNavPanelStore } from '../stores/navPanel';

const correctedText = ref('');
const ipcStore = useIpcStore();
const menuModalsStore = useMenuModalsStore();
const navPanelStore = useNavPanelStore();

navPanelStore.resetNavParams({
  escBtnText: "Меню",
});

function handleCorrected(text: string) {
  correctedText.value = text;
  
  // navPanelStore.resetNavParams({
  //   rightPanelVisible: false,
  // });
  menuModalsStore.nextModal(MenuModals.INSERT, {
    text: correctedText.value,
  });
}

</script>

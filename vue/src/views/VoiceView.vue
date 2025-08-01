<template>
  <ContentPadding>
    <VoiceRecognitionMenu
      v-if="!isInsertMenu"
      :escToCancel="false"
      @corrected="handleCorrected"
    />
    <InsertMenu
      v-else
      :text="resText"
      :allowInsertButton="false"
      :stopListening="menuModalsStore.anyModalOpen"
    />
  </ContentPadding>
</template>

<script setup lang="ts">
import { useMainInputStore } from '../stores/EditorInput'
import { useMenuModalsStore } from '../stores/menuModals'
import { useNavPanelStore } from '../stores/navPanel'

const navPanelStore = useNavPanelStore()
const mainInputStore = useMainInputStore()
const menuModalsStore = useMenuModalsStore()
const isInsertMenu = ref(false)
const resText = ref('')

navPanelStore.resetNavParams({
  panelVisible: false,
})

function handleCorrected(resultText: string, recognizedText: string) {
  if (recognizedText) {
    mainInputStore.setValue(recognizedText)
  }

  resText.value = resultText
  isInsertMenu.value = true
}
</script>

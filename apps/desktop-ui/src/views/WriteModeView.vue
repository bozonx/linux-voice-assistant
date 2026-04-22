<template>
  <div class="write-mode-container">
    <div class="flex flex-row gap-2">
      <WriteModeInput />
      <div class="flex gap-2 flex-col">
        <Button sm square @click="clear" title="Очистить">
          <Icon icon="mdi:clear" height="24" />
        </Button>
      </div>
    </div>
    <p class="text-xs mt-1 text-gray-500">Esc - далее</p>
  </div>
</template>

<script setup lang="ts">
import { useCallAi } from '../composables/useCallAi'
import useToast from '../composables/useToast'
import { useHistoryStore } from '../stores/history'
import { useIpcStore } from '../stores/ipc'
import { MenuModals, useMenuModalsStore } from '../stores/menuModals'
import { useNavPanelStore } from '../stores/navPanel'
import { useWriterInputStore } from '../stores/writerInput'
import { Icon } from '@iconify/vue'

const navPanelStore = useNavPanelStore()
const writerInputStore = useWriterInputStore()
const ipcStore = useIpcStore()
const { correctText } = useCallAi()
const menuModalsStore = useMenuModalsStore()
const historyStore = useHistoryStore()
const { toast } = useToast()
const appConfig = ipcStore.params!.appConfig
const correctedText = ref('')
const correctionIsActual = ref(true)

navPanelStore.resetNavParams({
  escBtnText: 'Далее',
  escBtnAction: doCorrection,
})

watch(
  () => writerInputStore.value,
  () => {
    correctionIsActual.value = false
  }
)

onUnmounted(async () => {
  if (writerInputStore.value) {
    await historyStore.saveEditorHistory(writerInputStore.value)
    writerInputStore.value = ''
  }

  await historyStore.clearMainInputTmp()
})

const clear = () => {
  writerInputStore.clear()
  writerInputStore.focus()
}

async function doCorrection() {
  if (!writerInputStore.value?.trim()) {
    toast('Введите текст для коррекции', 'warn')
    return
  } else if (correctionIsActual.value) {
    toast('Текст уже корректирован', 'warn')
  } else if (writerInputStore.value.length < appConfig.minCorrectionLength) {
    toast('Слишком короткий текст для коррекции', 'warn')

    correctedText.value = writerInputStore.value
    correctionIsActual.value = true
  } else {
    menuModalsStore.setPendingModal({
      correction: true,
    })

    const result = await correctText(writerInputStore.value)

    historyStore.saveTransformHistory(result)

    correctedText.value = result
    correctionIsActual.value = true
  }

  // TODO: текст могут отредактировать в diff ???
  menuModalsStore.nextModal(MenuModals.INSERT, {
    text: correctedText.value,
    oldText: writerInputStore.value,
  })
}
</script>

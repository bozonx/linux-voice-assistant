<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1>{{ t('menu.voiceRecognition') }}</h1>

    <div class="flex-1">
      <TextPreview :text="recognizedText" />
    </div>

    <ShortcutList
      :spaceKey="spaceKey" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { useI18n } from '../../composables/useI18n'
import { useCallAi } from '../../composables/useCallAi';
import { GlobalEvents, useGlobalEvents } from '../../composables/useGlobalEvents';
import { useIpcStore } from '../../stores/ipc';
import { useMenuModalsStore } from '../../stores/menuModals';
import { useHistoryStore } from '../../stores/history';
import useToast from '../../composables/useToast';

const props = defineProps<{
  onCorrected?: (
    resultText: string,
    recognizedText: string,
    correctedText?: string
  ) => void
}>()

const emit = defineEmits<{
  (
    e: 'corrected',
    resultText: string,
    recognizedText: string,
    correctedText?: string
  ): void
}>()

const { startVoiceRecognition, stopVoiceRecognition, voiceCorrection } = useCallAi();
const { globalEvents } = useGlobalEvents();
const recognizedText = ref<string>("");
const lastRecognizedTextMs = ref<number>(0);
const ipcStore = useIpcStore();
const appConfig = computed(() => ipcStore.params.appConfig);
const menuModalsStore = useMenuModalsStore();
const { toast } = useToast();
const historyStore = useHistoryStore();
const { t } = useI18n()
let listenerIndex = -1;

const spaceKey = {
  name: t('menu.finish'),
  action: async () => {
    await finish()
  },
}

const finish = async () => {
  // TODO: пока ждет  не позволять нажимать еще раз закончить
  if (!lastRecognizedTextMs.value) {
    await new Promise((resolve) =>
      setTimeout(resolve, appConfig.value.recognitionWaitTimeSec * 1000)
    )
  } else {
    const elapsedMs = Date.now() - lastRecognizedTextMs.value
    const remainingMs = appConfig.value.recognitionWaitTimeSec * 1000 - elapsedMs

    if (remainingMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, remainingMs))
    }
  }

  if (!recognizedText.value.trim().length) {
    toast(t("toast.nothingRecognized"), "warn");

    props.onCorrected?.('', '', undefined);
    emit('corrected', '', '');

    return;
  }

  // stop voice recognition and make correction
  globalEvents.removeListener(listenerIndex);
  await stopVoiceRecognition();

  let resultText = recognizedText.value;
  let correctedText;

  if (recognizedText.value.trim().length > appConfig.value.minCorrectionLength) {
    menuModalsStore.setPendingModal({
      correction: true,
    });
  
    resultText = await voiceCorrection(recognizedText.value);
    correctedText = resultText;

    await historyStore.saveTransformHistory(resultText);

    menuModalsStore.clearPendingModal();
  }
  else {
    toast(t("toast.textTooShortForCorrection"), "warn");
  }

  props.onCorrected?.(resultText, recognizedText.value, correctedText);
  emit('corrected', resultText, recognizedText.value, correctedText);
};

onMounted(async () => {
  listenerIndex = globalEvents.addListener(GlobalEvents.VOICE_RECOGNITION, (text: string) => {
    recognizedText.value = text;
    lastRecognizedTextMs.value = Date.now();
  });

  await startVoiceRecognition();
});

onUnmounted(() => {
  globalEvents.removeListener(listenerIndex);
  void stopVoiceRecognition();
});
</script>

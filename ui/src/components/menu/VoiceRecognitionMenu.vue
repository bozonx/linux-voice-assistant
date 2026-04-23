<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1>{{ t('menu.voiceRecognition') }}</h1>

    <div class="flex-1">
      <p v-if="statusText" class="text-sm text-muted mb-2">
        {{ statusText }}
      </p>
      <TextPreview :text="recognizedText" />
    </div>

    <ShortcutList
      :spaceKey="spaceKey"
      :stop-listening="isFinishing" />
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

const {
  cancelVoiceRecognition,
  getVoiceRecognitionRuntime,
  startVoiceRecognition,
  stopVoiceRecognition,
  voiceCorrection,
} = useCallAi();
const { globalEvents } = useGlobalEvents();
const recognizedText = ref<string>("");
const lastRecognizedTextMs = ref<number>(0);
const isFinishing = ref(false);
const isStarted = ref(false);
const isTranscribing = ref(false);
const ipcStore = useIpcStore();
const appConfig = computed(() => ipcStore.params.appConfig);
const menuModalsStore = useMenuModalsStore();
const { toast } = useToast();
const historyStore = useHistoryStore();
const { t } = useI18n()
let listenerIndex = -1;

const voiceRuntime = computed(() => getVoiceRecognitionRuntime())
const statusText = computed(() => {
  if (isTranscribing.value) {
    return t('menu.transcribing')
  }

  if (isStarted.value) {
    return t('menu.listening')
  }

  return ''
})

const spaceKey = computed(() => ({
  name: isFinishing.value ? t('common.inProgress') : t('menu.finish'),
  disabled: isFinishing.value,
  action: async () => {
    await finish()
  },
}))

async function waitForStreamingRecognition() {
  if (!voiceRuntime.value.streaming) {
    return
  }

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
}

const finish = async () => {
  if (isFinishing.value) {
    return
  }

  isFinishing.value = true

  await waitForStreamingRecognition()

  isTranscribing.value = !voiceRuntime.value.streaming
  const finalRecognizedText = await stopVoiceRecognition();
  isStarted.value = false
  isTranscribing.value = false

  if (finalRecognizedText) {
    recognizedText.value = finalRecognizedText;
    lastRecognizedTextMs.value = Date.now();
  }

  if (!recognizedText.value.trim().length) {
    toast(t("toast.nothingRecognized"), "warn");

    globalEvents.removeListener(listenerIndex);
    props.onCorrected?.('', '', undefined);
    emit('corrected', '', '');
    isFinishing.value = false

    return;
  }

  // Stop event updates before making correction.
  globalEvents.removeListener(listenerIndex);

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
  isFinishing.value = false
};

onMounted(async () => {
  listenerIndex = globalEvents.addListener(GlobalEvents.VOICE_RECOGNITION, (text: string) => {
    recognizedText.value = text;
    lastRecognizedTextMs.value = Date.now();
  });

  try {
    await startVoiceRecognition();
    isStarted.value = true
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    toast(message || t('toast.voiceRecognitionFailed'), "error");
    globalEvents.removeListener(listenerIndex);
    props.onCorrected?.('', '', undefined);
    emit('corrected', '', '');
  }
});

onUnmounted(() => {
  globalEvents.removeListener(listenerIndex);
  if (!isFinishing.value) {
    void cancelVoiceRecognition();
  }
});
</script>

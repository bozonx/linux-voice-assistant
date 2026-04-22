<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1>Распознавание голоса</h1>

    <div class="flex-1">
      <TextPreview :text="recognizedText" />
    </div>

    <ShortcutList
      :spaceKey="spaceKey" />
  </div>
</template>

<script setup lang="ts">
import { useCallAi } from '../../composables/useCallAi';
import { GlobalEvents, useGlobalEvents } from '../../composables/useGlobalEvents';
import { useIpcStore } from '../../stores/ipc';
import { useMenuModalsStore } from '../../stores/menuModals';
import { useHistoryStore } from '../../stores/history';
import useToast from '../../composables/useToast';

const props = defineProps({
  onCorrected: {
    type: Function,
    default: undefined,
  },
})

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
let listenerIndex = -1;

const spaceKey = {
  name: "Закончить",
  action: () => finish(),
};

const finish = async () => {
  // TODO: пока ждет  не позволять нажимать еще раз закончить
  if (!lastRecognizedTextMs.value || Date.now() - lastRecognizedTextMs.value < appConfig.value.recognitionWaitTimeSec * 1000) {
    const currentText = recognizedText.value;
    
    await new Promise<void>((resolve) => {
      const timeout = setTimeout(() => {
        console.log("Recognition wait time passed, no changes detected");
        resolve();
        unwatch();
      }, appConfig.value.recognitionWaitTimeSec * 1000);

      const unwatch = watch(recognizedText, (newText) => {
        if (newText !== currentText) {
          console.log("Text changed during wait time");
          clearTimeout(timeout);
          unwatch();
          resolve();
        }
      });
    });
  }

  if (!recognizedText.value.trim().length) {
    toast("Ничего не распознано", "warn");

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
    toast("Слишком короткий текст для коррекции", "warn");
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
  stopVoiceRecognition();
});
</script>

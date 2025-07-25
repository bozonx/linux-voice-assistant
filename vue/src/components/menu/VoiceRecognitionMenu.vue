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
import useToast from '../../composables/useToast';
import { useNavPanelStore } from '../../stores/navPanel';
import { useHistoryStore } from '../../stores/history';

const props = defineProps({
  onCorrected: {
    type: Function,
    default: () => {}
  },
  // escToCancel: {
  //   type: Boolean,
  //   default: true
  // }
});

const { startVoiceRecognition, stopVoiceRecognition, voiceCorrection } = useCallAi();
const { globalEvents } = useGlobalEvents();
const recognizedText = ref<string>("");
const lastRecognizedTextMs = ref<number>(0);
const ipcStore = useIpcStore();
const appConfig = ipcStore.params!.appConfig;
const menuModalsStore = useMenuModalsStore();
const { toast } = useToast();
const navPanelStore = useNavPanelStore();
const historyStore = useHistoryStore();
let listenerIndex = -1;

// navPanelStore.upateNavParams({
//   escBtnText: props.escToCancel ? "Отмена" : "Назад11",
//   escBtnAction: () => {
//     if (props.escToCancel) {
//       cancel();
//     }
//   },
// });

const spaceKey = {
  name: "Закончить",
  action: () => finish(),
};

const cancel = async () => {
  globalEvents.removeListener(listenerIndex);
  await stopVoiceRecognition();
  menuModalsStore.back();
};

const finish = async () => {
  // TODO: пока ждет нужно блокировать кнопку назад и не позволять нажимать еще раз закончить
  if (!lastRecognizedTextMs.value || Date.now() - lastRecognizedTextMs.value < appConfig.recognitionWaitTimeSec * 1000) {
    const currentText = recognizedText.value;
    
    await new Promise<void>((resolve) => {
      const timeout = setTimeout(() => {
        console.log("Recognition wait time passed, no changes detected");
        resolve();
        unwatch();
      }, appConfig.recognitionWaitTimeSec * 1000);

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

    props.onCorrected('');

    return;
  }

  // stop voice recognition and make correction
  globalEvents.removeListener(listenerIndex);
  await stopVoiceRecognition();

  let resultText = recognizedText.value;
  let correctedText;

  if (recognizedText.value.trim().length > appConfig.minCorrectionLength) {
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

  props.onCorrected(resultText, recognizedText.value, correctedText);
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

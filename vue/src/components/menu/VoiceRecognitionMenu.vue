<template>
  <div>
    Распознавание...
    <!-- <InProgressMessage :recognition="true" /> -->
  </div>

  <div>
    {{ recognizedText }}
  </div>

  <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
    <div v-if="props.showBackButton">Esc - <button @click="cancel">прервать</button></div>
    <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
    <div>Space - <button @click="finish">закончить распознавание</button></div>
  </div>
</template>

<script setup lang="ts">
import { useCallAi } from '../../composables/useCallAi';
import { useCallApi } from '../../composables/useCallApi';
import { GlobalEvents, useGlobalEvents } from '../../composables/useGlobalEvents';
import { useIpcStore } from '../../stores/ipc';
import miniToastr from "mini-toastr";
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';

const props = defineProps({
  showBackButton: {
    type: Boolean,
    default: true,
  },
  onBack: {
    type: Function,
    default: () => {}
  },
  onCorrected: {
    type: Function,
    default: () => {}
  }
});

const { startVoiceRecognition, stopVoiceRecognition, voiceCorrection } = useCallAi();
const { closeWindow } = useCallApi();
const inFocusButton = ref<HTMLButtonElement | null>(null);
const { globalEvents } = useGlobalEvents();
const recognizedText = ref<string>("");
const lastRecognizedTextMs = ref<number>(0);
const ipcStore = useIpcStore();
const appConfig = ipcStore.params!.appConfig;
const menuModalsStore = useMenuModalsStore();
let listenerIndex = -1;

const handleShortCutKeyUp = async (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    if (!props.showBackButton) return;
    
    await cancel();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    await stopVoiceRecognition();

    setTimeout(async () => {
      await closeWindow();
    }, 500);
  }
  else if (event.code === "Space") {
    await finish();
  }
};

const cancel = async () => {
  globalEvents.removeListener(listenerIndex);
  await stopVoiceRecognition();
  props.onBack();
};

const finish = async () => {
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
    miniToastr.warn("Ничего не распознано");

    return;
  }

  // stop voice recognition and make correction
  globalEvents.removeListener(listenerIndex);
  await stopVoiceRecognition();

  let correctedText = recognizedText.value;

  if (recognizedText.value.trim().length > appConfig.minCorrectionLength) {
    menuModalsStore.setPendingModal({
      correction: true,
    });
  
    correctedText = await voiceCorrection(recognizedText.value);

    menuModalsStore.clearPendingModal();
  }
  else {
    miniToastr.warn("Слишком короткий текст для коррекции");
  }

  props.onCorrected(correctedText);
  
};

onMounted(async () => {
  listenerIndex = globalEvents.addListener(GlobalEvents.VOICE_RECOGNITION, (text: string) => {
    recognizedText.value = text;
    lastRecognizedTextMs.value = Date.now();
  });

  nextTick(() => {
    inFocusButton.value?.focus();
  });

  await startVoiceRecognition();
});

onUnmounted(() => {
  globalEvents.removeListener(listenerIndex);
  stopVoiceRecognition();
});
</script>
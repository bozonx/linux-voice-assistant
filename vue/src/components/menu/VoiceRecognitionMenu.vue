<template>
  <Overlay v-if="overlayMode === OverlayMode.CORRECTING">
    <InProgressMessage :correction="true" />
  </Overlay>

  <div>
    <InProgressMessage :recognition="true" />
  </div>

  <div>
    {{ recognizedText }}
  </div>

  <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
    <div>Esc - <button @click="cancel">прервать</button></div>
    <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
    <div>Space - <button @click="finish">закончить распознавание</button></div>
  </div>
</template>

<script setup lang="ts">
import { useCallAi } from '../../composables/useCallAi';
import { useCallApi } from '../../composables/useCallApi';
import { GlobalEvents, useGlobalEvents } from '../../composables/useGlobalEvents';

enum OverlayMode {
  CORRECTING = "correcting",
  NONE = "none",
}

const overlayMode = ref<OverlayMode>(OverlayMode.NONE);
const { startVoiceRecognition, stopVoiceRecognition, voiceCorrection } = useCallAi();
const { closeWindow } = useCallApi();
const emit = defineEmits(["close", "corrected"]);
const inFocusButton = ref<HTMLButtonElement | null>(null);
const { globalEvents } = useGlobalEvents();
const recognizedText = ref<string>(""); 
let listenerIndex = -1;

const handleShortCutKeyUp = async (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    await cancel();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    await stopVoiceRecognition();

    setTimeout(async () => {
      await closeWindow();
    }, 500);
  }
};

const cancel = async () => {
  globalEvents.removeListener(listenerIndex);
  await stopVoiceRecognition();
  emit("close");
};

const finish = async () => {
  globalEvents.removeListener(listenerIndex);
  await stopVoiceRecognition();
  
  overlayMode.value = OverlayMode.CORRECTING;

  const correctedText = await voiceCorrection(recognizedText.value);
  
  emit("corrected", correctedText);

  overlayMode.value = OverlayMode.NONE;
};

onMounted(async () => {
  listenerIndex = globalEvents.addListener(GlobalEvents.VOICE_RECOGNITION, (text: string) => {
    recognizedText.value = text;
  });

  nextTick(() => {
    inFocusButton.value?.focus();
  });

  await startVoiceRecognition();
});

onUnmounted(() => {
  globalEvents.removeListener(listenerIndex);
});
</script>   
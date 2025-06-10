import { defineStore } from "pinia";
import { ref } from "vue";
import { useIpcStore } from "./ipc";
import { useOverlayStore } from "./overlay";
import { useKeysStore } from "./keys";
import { useMainInputStore } from "./mainInput";

const VOICE_RECOGNITION_STATES = {
  INACTIVE: "INACTIVE",
  RECOGNIZING: "RECOGNIZING",
  REPUNCTUATION: "REPUNCTUATION",
} as const;

export const useVoiceRecognitionStore = defineStore("voiceRecognition", () => {
  // Состояние
  const state = ref<string>(VOICE_RECOGNITION_STATES.INACTIVE);
  const overlayStore = useOverlayStore();
  const ipcStore = useIpcStore();
  const keysStore = useKeysStore();
  const mainInputStore = useMainInputStore();
  // Действия
  const startRecognizing = async () => {
    overlayStore.startVoiceRecognition();
    state.value = VOICE_RECOGNITION_STATES.RECOGNIZING;

    const result = await ipcStore.callFunction("startVoiceRecognition");

    if (!result.success) {
      console.error(result.error);

      state.value = VOICE_RECOGNITION_STATES.INACTIVE;
      overlayStore.hideOverlay();
    }
  };

  const stopRecognizing = async () => {
    const result = await ipcStore.callFunction("stopVoiceRecognition");

    state.value = VOICE_RECOGNITION_STATES.INACTIVE;
    overlayStore.hideOverlay();

    if (!result.success) {
      console.error(result.error);
    }
  };

  const startRepunctuation = async () => {
    overlayStore.startRepunctuation();
    state.value = VOICE_RECOGNITION_STATES.REPUNCTUATION;

    const result = await ipcStore.callFunction("stopVoiceRecognition");

    if (!result.success) {
      console.error(result.error);
    }

    const repuncResult = await ipcStore.callFunction("doRepunctuation", [
      mainInputStore.value,
    ]);

    mainInputStore.value = repuncResult.result;

    overlayStore.hideOverlay();
    state.value = VOICE_RECOGNITION_STATES.INACTIVE;
  };

  watch(
    () => keysStore.keyUp,
    (key) => {
      console.log("key", key);

      if (state.value === VOICE_RECOGNITION_STATES.RECOGNIZING) {
        if (key === "Escape") {
          stopRecognizing();
        } else if (key === "KeyW") {
          startRepunctuation();
        }
      }
    }
  );

  return {
    // Состояние
    state,
    // Действия
    startRecognizing,
    stopRecognizing,
    startRepunctuation,
  };
});

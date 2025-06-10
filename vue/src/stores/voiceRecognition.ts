import { defineStore } from "pinia";
import { ref } from "vue";
import { useIpcStore } from "./ipc";
import { useOverlayStore } from "./overlay";

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
  // Действия
  const start = async () => {
    overlayStore.startVoiceRecognition();
    state.value = VOICE_RECOGNITION_STATES.RECOGNIZING;

    const result = await ipcStore.callFunction("startVoiceRecognition");

    if (!result.success) {
      console.error(result.error);

      state.value = VOICE_RECOGNITION_STATES.INACTIVE;
      overlayStore.hideOverlay();
    }
  };

  const stop = async () => {
    const result = await ipcStore.callFunction("stopVoiceRecognition");

    state.value = VOICE_RECOGNITION_STATES.INACTIVE;
    overlayStore.hideOverlay();

    if (!result.success) {
      console.error(result.error);
    }
  };

  const repunctuation = () => {
    overlayStore.startRepunctuation();
    state.value = VOICE_RECOGNITION_STATES.REPUNCTUATION;
    overlayStore.hideOverlay();
  };

  return {
    // Состояние
    state,
    // Действия
    start,
    stop,
    repunctuation,
  };
});

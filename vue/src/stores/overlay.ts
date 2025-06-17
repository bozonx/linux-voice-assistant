import { defineStore } from "pinia";
import { useHelpers } from "../composables/useHelpers";
import { useMainInputStore } from "./mainInput";

// Константы для статусов overlay
export const OVERLAY_STATUSES = {
  NONE: "NONE",
  VOICE_RECOGNITION: "VOICE_RECOGNITION",
  REPUNCTUATION: "REPUNCTUATION",
  HOTKEYS: "HOTKEYS",
  ASKING_AI: "ASKING_AI",
} as const;

type OverlayStatus = (typeof OVERLAY_STATUSES)[keyof typeof OVERLAY_STATUSES];

export const useOverlayStore = defineStore("overlay", () => {
  const status = ref<OverlayStatus>(OVERLAY_STATUSES.NONE);
  const { globalResetFocus } = useHelpers();
  const mainInputStore = useMainInputStore();

  const startVoiceRecognition = () => {
    status.value = OVERLAY_STATUSES.VOICE_RECOGNITION;
    globalResetFocus();
  };

  const startRepunctuation = () => {
    status.value = OVERLAY_STATUSES.REPUNCTUATION;
  };

  const hideOverlay = () => {
    status.value = OVERLAY_STATUSES.NONE;
    mainInputStore.focus();
  };

  const startAskingAi = () => {
    status.value = OVERLAY_STATUSES.ASKING_AI;
    globalResetFocus();
  };

  const showHotkeys = () => {
    status.value = OVERLAY_STATUSES.HOTKEYS;
    globalResetFocus();
  };

  return {
    status,
    startVoiceRecognition,
    startRepunctuation,
    hideOverlay,
    startAskingAi,
    showHotkeys,
  };
});

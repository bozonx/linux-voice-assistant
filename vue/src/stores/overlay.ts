import { defineStore } from "pinia";
import { ref } from "vue";
import { useHelpers } from "../composables/useHelpers";
import { useMainInputStore } from "./mainInput";

// Константы для статусов overlay
export const OVERLAY_STATUSES = {
  NONE: "NONE",
  TRANSLATING: "TRANSLATING",
  VOICE_RECOGNITION: "VOICE_RECOGNITION",
  REPUNCTUATION: "REPUNCTUATION",
  HOTKEYS: "HOTKEYS",
  EDITING: "EDITING",
  CORRECTING: "CORRECTING",
} as const;

// Тип для возможных значений статуса
type OverlayStatus = (typeof OVERLAY_STATUSES)[keyof typeof OVERLAY_STATUSES];

export const useOverlayStore = defineStore("overlay", () => {
  // Состояние
  const status = ref<OverlayStatus>(OVERLAY_STATUSES.NONE);
  const { globalResetFocus } = useHelpers();
  const mainInputStore = useMainInputStore();

  // Действия
  const startTranslating = () => {
    status.value = OVERLAY_STATUSES.TRANSLATING;
    globalResetFocus();
  };

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

  const startEditing = () => {
    status.value = OVERLAY_STATUSES.EDITING;
    globalResetFocus();
  };

  const startCorrecting = () => {
    status.value = OVERLAY_STATUSES.CORRECTING;
    globalResetFocus();
  };

  const showHotkeys = () => {
    status.value = OVERLAY_STATUSES.HOTKEYS;
    globalResetFocus();
  };

  return {
    status,
    startTranslating,
    startVoiceRecognition,
    startRepunctuation,
    hideOverlay,
    startEditing,
    startCorrecting,
    showHotkeys,
  };
});

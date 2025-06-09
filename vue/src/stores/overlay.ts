import { defineStore } from "pinia";
import { ref } from "vue";

// Константы для статусов overlay
const OVERLAY_STATUSES = {
  NONE: "NONE",
  TRANSLATING: "TRANSLATING",
  VOICE_RECOGNITION: "VOICE_RECOGNITION",
  REPUNCTUATION: "REPUNCTUATION",
} as const;

// Тип для возможных значений статуса
type OverlayStatus = (typeof OVERLAY_STATUSES)[keyof typeof OVERLAY_STATUSES];

export const useOverlayStore = defineStore("overlay", () => {
  // Состояние
  const status = ref<OverlayStatus>(OVERLAY_STATUSES.NONE);

  // Действия
  const startTranslating = () => {
    status.value = OVERLAY_STATUSES.TRANSLATING;
  };

  const startVoiceRecognition = () => {
    status.value = OVERLAY_STATUSES.VOICE_RECOGNITION;
  };

  const startRepunctuation = () => {
    status.value = OVERLAY_STATUSES.REPUNCTUATION;
  };

  const hideOverlay = () => {
    status.value = OVERLAY_STATUSES.NONE;
  };

  return {
    status,
    startTranslating,
    startVoiceRecognition,
    startRepunctuation,
    hideOverlay,
  };
});

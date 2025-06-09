import { defineStore } from "pinia";

// Константы для статусов overlay
const OVERLAY_STATUSES = {
  NONE: "NONE",
  TRANSLATING: "TRANSLATING",
  VOICE_RECOGNITION: "VOICE_RECOGNITION",
  REPUNCTUATION: "REPUNCTUATION",
} as const;

// Тип для возможных значений статуса
type OverlayStatus = (typeof OVERLAY_STATUSES)[keyof typeof OVERLAY_STATUSES];

export const useOverlayStore = defineStore("overlay", {
  state: () => ({
    status: OVERLAY_STATUSES.NONE as OverlayStatus,
  }),

  actions: {
    startTranslating() {
      this.status = OVERLAY_STATUSES.TRANSLATING;
    },

    startVoiceRecognition() {
      this.status = OVERLAY_STATUSES.VOICE_RECOGNITION;
    },

    startRepunctuation() {
      this.status = OVERLAY_STATUSES.REPUNCTUATION;
    },

    endOverlay() {
      this.status = OVERLAY_STATUSES.NONE;
    },
  },
});

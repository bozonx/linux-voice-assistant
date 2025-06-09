import { ref } from "vue";

const OVERLAY_STATUSES = {
  NONE: "NONE",
  TRANSLATING: "TRANSLATING",
  VOICE_RECOGNITION: "VOICE_RECOGNITION",
  REPUNCTUATION: "REPUNCTUATION",
};

const overlayStatus = ref(OVERLAY_STATUSES.NONE);

const startTranslating = () => {
  overlayStatus.value = OVERLAY_STATUSES.TRANSLATING;
};

const startVoiceRecognition = () => {
  overlayStatus.value = OVERLAY_STATUSES.VOICE_RECOGNITION;
};

const startRepunctuation = () => {
  overlayStatus.value = OVERLAY_STATUSES.REPUNCTUATION;
};

const endOverlay = () => {
  overlayStatus.value = OVERLAY_STATUSES.NONE;
};

export {
  overlayStatus,
  startTranslating,
  startVoiceRecognition,
  startRepunctuation,
  endOverlay,
};

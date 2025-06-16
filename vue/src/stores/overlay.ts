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
  AI_RESULT: "AI_RESULT",
} as const;

// Тип для возможных значений статуса
type OverlayStatus = (typeof OVERLAY_STATUSES)[keyof typeof OVERLAY_STATUSES];

export const useOverlayStore = defineStore("overlay", () => {
  // Состояние
  const status = ref<OverlayStatus>(OVERLAY_STATUSES.NONE);
  const message = ref<string>("");
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

  const showAiResult = (message: string) => {
    status.value = OVERLAY_STATUSES.AI_RESULT;
    setMessage(message);
    globalResetFocus();
  };

  const setMessage = (newMessage: string) => {
    message.value = newMessage;
  };

  return {
    status,
    message,
    startVoiceRecognition,
    startRepunctuation,
    hideOverlay,
    startAskingAi,
    showHotkeys,
    showAiResult,
    setMessage,
  };
});

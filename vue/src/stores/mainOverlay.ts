import { defineStore } from "pinia";
import { useMainInputStore } from "./mainInput";

export enum OverlayMode {
  DIFF = "diff",
  MENU = "menu",
  EDIT_PRESETS = "edit-presets",
  CORRECTION = "correction",
  VOICE_RECOGNITION = "voice-recognition",
  TRANSLATE = "translate",
  NONE = "none",
}

export const useOverlayStore = defineStore("mainOverlay", () => {
  const overlayMode = ref<OverlayMode>(OverlayMode.NONE);
  const mainInputStore = useMainInputStore();
  const diffText = ref<string>("");
  // const translateResult = ref<string>("");
  // const startVoiceRecognition = () => {
  //   status.value = OVERLAY_STATUSES.VOICE_RECOGNITION;
  //   globalResetFocus();
  // };

  // const startRepunctuation = () => {
  //   status.value = OVERLAY_STATUSES.REPUNCTUATION;
  // };

  const hideOverlay = () => {
    overlayMode.value = OverlayMode.NONE;
    nextTick(() => {
      mainInputStore.focus();
    });
  };

  // const showAskingAi = () => {
  //   overlayMode.value = OverlayMode.ASKING_AI;
  // };

  const showCorrection = () => {
    overlayMode.value = OverlayMode.CORRECTION;
  };

  const showEditPresets = () => {
    overlayMode.value = OverlayMode.EDIT_PRESETS;
  };

  const showDiff = (newText: string) => {
    overlayMode.value = OverlayMode.DIFF;
    diffText.value = newText;
  };

  // const showTranslatePreview = (newText: string) => {
  //   overlayMode.value = OverlayMode.TRANSLATE_PREVIEW;
  //   translateResult.value = newText;
  // };

  const showMenu = () => {
    overlayMode.value = OverlayMode.MENU;
  };

  const showVoiceRecognition = () => {
    overlayMode.value = OverlayMode.VOICE_RECOGNITION;
  };

  const showTranslate = () => {
    overlayMode.value = OverlayMode.TRANSLATE;
  };

  return {
    overlayMode,
    hideOverlay,
    showCorrection,
    showEditPresets,
    showMenu,
    showDiff,
    diffText,
    showVoiceRecognition,
    showTranslate,
  };
});

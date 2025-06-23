import { defineStore } from "pinia";
import { useMainInputStore } from "./mainInput";

export enum OverlayMode {
  DIFF = "diff",
  TRANSLATE_PREVIEW = "translate-preview",
  MENU = "menu",
  EDIT_PRESETS = "edit-presets",
  ASKING_AI = "asking-ai",
  NONE = "none",
}

export const useOverlayStore = defineStore("mainOverlay", () => {
  const overlayMode = ref<OverlayMode>(OverlayMode.NONE);
  const mainInputStore = useMainInputStore();
  const diffText = ref<string>("");
  const translateResult = ref<string>("");
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

  const showAskingAi = () => {
    overlayMode.value = OverlayMode.ASKING_AI;
  };

  const showEditPresets = () => {
    overlayMode.value = OverlayMode.EDIT_PRESETS;
  };

  const showDiff = (newText: string) => {
    overlayMode.value = OverlayMode.DIFF;
    diffText.value = newText;
  };

  const showTranslatePreview = (newText: string) => {
    overlayMode.value = OverlayMode.TRANSLATE_PREVIEW;
    translateResult.value = newText;
  };

  const showMenu = () => {
    overlayMode.value = OverlayMode.MENU;
  };

  return {
    overlayMode,
    // startVoiceRecognition,
    // startRepunctuation,
    hideOverlay,
    showAskingAi,
    showEditPresets,
    showMenu,
    showDiff,
    diffText,
    translateResult,
    showTranslatePreview,
  };
});

import { defineStore } from "pinia";
import { useMainInputStore } from "./mainInput";

export enum OverlayMode {
  MENU = "menu",
  EDIT_PRESETS = "edit-presets",
  ASKING_AI = "asking-ai",
  NONE = "none",
}

export const useOverlayStore = defineStore("mainOverlay", () => {
  const overlayMode = ref<OverlayMode>(OverlayMode.NONE);
  const mainInputStore = useMainInputStore();

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
  };
});

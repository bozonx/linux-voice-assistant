import { defineStore } from "pinia";
import { useHelpers } from "../composables/useHelpers";
import { useMainInputStore } from "./mainInput";

export enum OverlayMode {
  TEXT_DO_SHORTCUTS = "text-do-shortcuts",
  EDIT_PRESETS = "edit-presets",
  ASKING_AI = "asking-ai",
  NONE = "none",
}

// // Константы для статусов overlay
// export const OVERLAY_STATUSES = {
//   NONE: "NONE",
//   VOICE_RECOGNITION: "VOICE_RECOGNITION",
//   REPUNCTUATION: "REPUNCTUATION",
//   HOTKEYS: "HOTKEYS",
//   ASKING_AI: "ASKING_AI",
// } as const;

// type OverlayStatus = (typeof OVERLAY_STATUSES)[keyof typeof OVERLAY_STATUSES];

export const useOverlayStore = defineStore("mainOverlay", () => {
  const overlayMode = ref<OverlayMode>(OverlayMode.NONE);
  const { globalResetFocus } = useHelpers();
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
    // mainInputStore.focus();
  };

  const startAskingAi = () => {
    overlayMode.value = OverlayMode.ASKING_AI;
    // globalResetFocus();
  };

  const showEditPresets = () => {
    overlayMode.value = OverlayMode.EDIT_PRESETS;
    // globalResetFocus();
  };

  const showTextDoShortcuts = () => {
    overlayMode.value = OverlayMode.TEXT_DO_SHORTCUTS;
    // globalResetFocus();
  };

  // const showHotkeys = () => {
  //   status.value = OVERLAY_STATUSES.HOTKEYS;
  //   globalResetFocus();
  // };

  return {
    overlayMode,
    // startVoiceRecognition,
    // startRepunctuation,
    hideOverlay,
    startAskingAi,
    showEditPresets,
    showTextDoShortcuts,
    // showHotkeys,
  };
});

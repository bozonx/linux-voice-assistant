import { defineStore } from "pinia";
import { ref } from "vue";
import { useIpcStore } from "./ipc";
import { useOverlayStore } from "./overlay";
import { useKeysStore } from "./keys";
import { useMainInputStore } from "./mainInput";
import { useCallFunction } from "../composables/useCallFunction";

const VOICE_RECOGNITION_STATES = {
  INACTIVE: "INACTIVE",
  RECOGNIZING: "RECOGNIZING",
  REPUNCTUATION: "REPUNCTUATION",
} as const;

type AfterRepunctionTask = "insert" | "ru>en" | "ru>es" | "calendar" | "note";

export const useVoiceRecognitionStore = defineStore("voiceRecognition", () => {
  // Состояние
  const state = ref<string>(VOICE_RECOGNITION_STATES.INACTIVE);
  const overlayStore = useOverlayStore();
  const ipcStore = useIpcStore();
  const keysStore = useKeysStore();
  const mainInputStore = useMainInputStore();
  const { insertIntoWindow, translateTextAndInsert, dealToCalendar, fastNote } =
    useCallFunction();
  // Действия
  const startRecognizing = async () => {
    overlayStore.startVoiceRecognition();
    state.value = VOICE_RECOGNITION_STATES.RECOGNIZING;

    const result = await ipcStore.callFunction("startVoiceRecognition");

    if (!result.success) {
      console.error(result.error);

      state.value = VOICE_RECOGNITION_STATES.INACTIVE;
      overlayStore.hideOverlay();
    }
  };

  const stopRecognizing = async () => {
    const result = await ipcStore.callFunction("stopVoiceRecognition");

    state.value = VOICE_RECOGNITION_STATES.INACTIVE;
    overlayStore.hideOverlay();

    if (!result.success) {
      console.error(result.error);
    }
  };

  const startRepunctuation = async (
    afterRepunctionTask?: AfterRepunctionTask
  ) => {
    overlayStore.startRepunctuation();
    state.value = VOICE_RECOGNITION_STATES.REPUNCTUATION;

    const result = await ipcStore.callFunction("stopVoiceRecognition");

    if (!result.success) {
      console.error(result.error);
    }

    const repuncResult = await ipcStore.callFunction("doRepunctuation", [
      mainInputStore.value,
    ]);

    mainInputStore.value = repuncResult.result;

    overlayStore.hideOverlay();
    state.value = VOICE_RECOGNITION_STATES.INACTIVE;

    doAfterRepunction(afterRepunctionTask);
  };

  const doAfterRepunction = async (
    afterRepunctionTask?: AfterRepunctionTask
  ) => {
    console.log("afterRepunctionTask", afterRepunctionTask);
    if (afterRepunctionTask === "insert") {
      insertIntoWindow();
    } else if (afterRepunctionTask === "ru>en") {
      translateTextAndInsert("ru", "en");
    } else if (afterRepunctionTask === "ru>es") {
      translateTextAndInsert("ru", "es");
    } else if (afterRepunctionTask === "calendar") {
      dealToCalendar();
    } else if (afterRepunctionTask === "note") {
      fastNote();
    }
  };

  watch(
    () => keysStore.keyUp,
    (key) => {
      // console.log("1111key", key);

      if (state.value === VOICE_RECOGNITION_STATES.RECOGNIZING) {
        if (key === "Escape") {
          stopRecognizing();
        } else if (key === "KeyQ") {
          ipcStore.callFunction("closeMainWindow");
        } else if (key === "KeyW") {
          startRepunctuation("insert");
        } else if (key === "KeyE") {
          // it will just close overlay
          startRepunctuation();
        } else if (key === "KeyA") {
          startRepunctuation("ru>en");
        } else if (key === "KeyS") {
          startRepunctuation("ru>es");
        } else if (key === "KeyD") {
          startRepunctuation("calendar");
        } else if (key === "KeyF") {
          startRepunctuation("note");
        }
      }
    }
  );

  return {
    // Состояние
    state,
    // Действия
    startRecognizing,
    stopRecognizing,
    startRepunctuation,
  };
});

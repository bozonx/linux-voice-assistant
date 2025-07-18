import { defineStore } from "pinia";
import { ref } from "vue";
import { useIpcStore } from "../vue/src/stores/ipc";
import { useOverlayStore } from "../vue/src/stores/mainOverlay";
import { useKeysStore } from "../vue/src/stores/keys";
import { useMainInputStore } from "../vue/src/stores/mainInput";
import { useCallApi } from "../vue/src/composables/useCallApi";

const VOICE_RECOGNITION_STATES = {
  INACTIVE: "INACTIVE",
  RECOGNIZING: "RECOGNIZING",
  REPUNCTUATION: "REPUNCTUATION",
} as const;

export const useVoiceRecognitionStore = defineStore("voiceRecognition", () => {
  // Состояние
  const state = ref<string>(VOICE_RECOGNITION_STATES.INACTIVE);
  const overlayStore = useOverlayStore();
  const ipcStore = useIpcStore();
  const keysStore = useKeysStore();
  const mainInputStore = useMainInputStore();
  const { insertIntoWindow, fastNote, searchInInternet, addToKnowledgeBase } =
    useCallApi();
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

  const startRepunctuation = async (cb?: () => void) => {
    if (!mainInputStore.value.trim()) {
      state.value = VOICE_RECOGNITION_STATES.INACTIVE;
      overlayStore.hideOverlay();

      return;
    }

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

    if (cb) {
      cb();
    }
  };

  watch(
    () => keysStore.keyUp,
    (key) => {
      // console.log("1111key", key);

      if (state.value === VOICE_RECOGNITION_STATES.RECOGNIZING) {
        if (key === "Escape") {
          // stopRecognizing();
          // TODO: провверить были ли изменения в инпуте
          // it will just close overlay
          startRepunctuation();
        } else if (key === "KeyQ") {
          ipcStore.callFunction("closeMainWindow");
          // } else if (key === "KeyW") {
          //   startRepunctuation(() => {
          //     translateAndInsert("ru", "en");
          //   });
          // } else if (key === "KeyE") {
          //   startRepunctuation(() => {
          //     translateAndInsert("ru", "es");
          //   });
          // } else if (key === "KeyR") {
          //   startRepunctuation(() => {
          //     translateAndInsert("es", "ru");
          //   });
        } else if (key === "KeyA") {
          startRepunctuation(insertIntoWindow);
        } else if (key === "KeyS") {
          // edit preset 1
        } else if (key === "KeyF") {
          startRepunctuation(fastNote);
        } else if (key === "KeyG") {
          startRepunctuation(searchInInternet);
        } else if (key === "KeyZ") {
          startRepunctuation(addToKnowledgeBase);
        } else if (key === "KeyX") {
          // edit preset 2
          // } else if (key === "KeyC") {
          //   startRepunctuation(dealToCalendar);
          // } else if (key === "KeyV") {
          //   startRepunctuation(askAIShort);
        }
      }
    }
  );

  return {
    state,
    startRecognizing,
    stopRecognizing,
    startRepunctuation,
  };
});

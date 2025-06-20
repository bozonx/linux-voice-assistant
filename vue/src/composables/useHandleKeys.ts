import { useIpcStore } from "../stores/ipc";
import { OVERLAY_STATUSES, useOverlayStore } from "../stores/mainOverlay";
import { useCallApi } from "./useCallApi";
import { useCallAi } from "./useCallAi";

export const useHandleKeys = () => {
  const overlayStore = useOverlayStore();
  const ipcStore = useIpcStore();
  const { insertIntoWindow, fastNote, searchInInternet, addToKnowledgeBase } =
    useCallApi();

  const {
    translateAndInsert,
    correctAndInsert,
    editAndInsert,
    correctAndEdit,
    editAndEdit,
    dealToCalendar,
    askAIShort,
  } = useCallAi();

  const globalHandleKeyUp = async (event: KeyboardEvent) => {
    if (overlayStore.status === OVERLAY_STATUSES.NONE) {
      if (event.code === "Escape") {
        overlayStore.showHotkeys();
      }
    } else if (overlayStore.status === OVERLAY_STATUSES.HOTKEYS) {
      if (event.code === "Escape") {
        overlayStore.hideOverlay();
      } else if (event.code === "KeyQ") {
        ipcStore.callFunction("closeMainWindow");
        // } else if (event.code === "KeyW") {
        //   translateAndInsert("ru", "en");
        // } else if (event.code === "KeyE") {
        //   translateAndInsert("ru", "es");
        // } else if (event.code === "KeyR") {
        //   translateAndInsert("es", "ru");
        // } else if (event.code === "KeyA") {
        //   insertIntoWindow();
        // } else if (event.code === "KeyS") {
        //   // edit preset 1
        //   editAndInsert();
      } else if (event.code === "KeyD") {
        correctAndInsert();
      } else if (event.code === "KeyF") {
        fastNote();
      } else if (event.code === "KeyG") {
        searchInInternet();
      } else if (event.code === "KeyZ") {
        addToKnowledgeBase();
        // } else if (event.code === "KeyX") {
        //   // edit preset 2
        //   editAndEdit();
      } else if (event.code === "KeyC") {
        await dealToCalendar();
      } else if (event.code === "KeyV") {
        askAIShort();
      }
    }
  };

  return {
    globalHandleKeyUp,
  };
};

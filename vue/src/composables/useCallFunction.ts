import { useOverlayStore } from "src/stores/overlay";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";

export const useCallFunction = () => {
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();
  const overlayStore = useOverlayStore();

  const insertIntoWindow = async () => {
    await ipcStore.callFunction("typeIntoWindowAndClose", [
      mainInputStore.value,
      ipcStore.windowId,
    ]);
  };

  const translateTextAndInsert = async (from: string, to: string) => {
    overlayStore.startTranslating();
    const result = await ipcStore.callFunction("translateTextAndInsert", [
      mainInputStore.value,
      from,
      to,
      ipcStore.windowId,
    ]);
    if (!result.success) {
      console.error(result.error);
    }
    overlayStore.hideOverlay();
  };

  const dealToCalendar = async () => {
    console.log("dealToCalendar");
  };

  const fastNote = async () => {
    console.log("fastNoteInObsidian");
  };

  return {
    insertIntoWindow,
    translateTextAndInsert,
    dealToCalendar,
    fastNote,
  };
};

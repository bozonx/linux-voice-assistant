import { useOverlayStore } from "../stores/overlay";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useCodeFormatter } from "./useCodeFormatter";

export const useCallFunction = () => {
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();
  const overlayStore = useOverlayStore();
  const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();

  const insertIntoWindow = async () => {
    if (!mainInputStore.value.trim()) return;

    await ipcStore.callFunction("typeIntoWindowAndClose", [
      mainInputStore.value,
      ipcStore.windowId,
    ]);
  };

  const translateAndInsert = async (from: string, to: string) => {
    if (!mainInputStore.value.trim()) return;

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

  const translateAndEdit = async (from: string, to: string) => {
    if (!mainInputStore.value.trim()) return;

    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    overlayStore.startTranslating();

    const result = await ipcStore.callFunction("translateText", [
      text,
      from,
      to,
    ]);

    if (result.success) {
      if (mainInputStore.selectedText) {
        mainInputStore.replaceSelection(result.result as string);
      } else {
        mainInputStore.setValue(result.result as string);
      }
    } else {
      console.error(result.error);
    }

    overlayStore.hideOverlay();
  };

  const dealToCalendar = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("dealToCalendar");
  };

  const fastNote = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("fastNoteInObsidian");
  };

  const formatMdAndInsert = async () => {
    if (!mainInputStore.value.trim()) return;

    const value = await formatMdAndStyle(mainInputStore.value);
    const result = await ipcStore.callFunction("typeIntoWindowAndClose", [
      value,
      ipcStore.windowId,
    ]);

    if (!result.success) {
      console.error(result.error);
    }
  };

  const formatMdAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    if (mainInputStore.selectedText) {
      mainInputStore.replaceSelection(
        await formatMdAndStyle(mainInputStore.selectedText)
      );
    } else {
      mainInputStore.setValue(await formatMdAndStyle(mainInputStore.value));
    }
  };

  const formatCodeAndInsert = async () => {
    if (!mainInputStore.value.trim()) return;

    const value = await formatSomeCode(mainInputStore.value);
    const result = await ipcStore.callFunction("typeIntoWindowAndClose", [
      value,
      ipcStore.windowId,
    ]);

    if (!result.success) {
      console.error(result.error);
    }
  };

  const formatCodeAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    if (mainInputStore.selectedText) {
      mainInputStore.replaceSelection(
        await formatSomeCode(mainInputStore.selectedText)
      );
    } else {
      mainInputStore.setValue(await formatSomeCode(mainInputStore.value));
    }
  };

  const correctAndInsert = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("correctAndInsert");
  };

  const correctAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("correctTextAndEdit");
  };

  const editAndInsert = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("edit");
  };

  const editAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("editAndEdit");
  };

  return {
    insertIntoWindow,
    translateAndInsert,
    translateAndEdit,
    dealToCalendar,
    fastNote,
    correctAndInsert,
    correctAndEdit,
    editAndInsert,
    editAndEdit,
    formatMdAndInsert,
    formatMdAndEdit,
    formatCodeAndInsert,
    formatCodeAndEdit,
  };
};

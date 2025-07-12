import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import useToast from "./useToast";

export const useCallApi = () => {
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();
  const { toast } = useToast();

  // async function closeWindow() {
  //   await ipcStore.callFunction("closeMainWindow", []);
  // }

  async function typeIntoWindowAndClose(text: string) {
    if (!text?.trim()) return;

    await ipcStore.callFunction("typeIntoWindowAndClose", [
      text,
      // ipcStore.params?.windowId,
    ]);
  }

  function resolveText(text?: string): string {
    let value = "";

    if (text) {
      value = text;
    } else if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
    } else {
      value = mainInputStore.value;
    }

    return value || "";
  }

  return {
    resolveText,
    typeIntoWindowAndClose,
  };
};

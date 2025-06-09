import { defineStore } from "pinia";
import { ref } from "vue";
import type { IpcResult, START_MODES } from "../types";

export const useIpcStore = defineStore("ipc", () => {
  // Состояние
  const windowId = ref<string | null>(null);
  const selectedText = ref<string | null>(null);
  const mode = ref<START_MODES | null>(null);

  // Действия
  const callFunction = async (
    functionName: string,
    args: any[] = []
  ): Promise<IpcResult> => {
    try {
      const result = await window.electron.ipcRenderer.invoke(
        "call-function",
        functionName,
        args
      );
      return result;
    } catch (error) {
      console.error("Error calling function:", error);
      return { success: false, error: String(error) };
    }
  };

  const setWindowId = (id: string | null) => {
    windowId.value = id;
  };

  const setSelectedText = (text: string | null) => {
    selectedText.value = text;
  };

  const setMode = (newMode: START_MODES | null) => {
    mode.value = newMode;
  };

  return {
    // Состояние
    windowId,
    selectedText,
    mode,
    // Действия
    callFunction,
    setWindowId,
    setSelectedText,
    setMode,
  };
});

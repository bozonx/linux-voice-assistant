import { defineStore } from "pinia";
import { ref } from "vue";
import type { IpcResult, START_MODES } from "../types";
import type { InitialData } from "../../../electron/types/types";

export const useIpcStore = defineStore("ipc", () => {
  const data = ref<InitialData>();

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

  const setInitialData = (incomingData: InitialData) => {
    data.value = incomingData;
  };

  return {
    // Состояние
    data,
    // Действия
    callFunction,
    setInitialData,
  };
});

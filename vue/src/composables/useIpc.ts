import { ref } from "vue";
import type { IpcResult, InitParams, Modes } from "../types";

export function useIpc() {
  const windowId = ref<string | null>(null);
  const selectedText = ref<string | null>(null);
  const mode = ref<Modes | null>(null);

  const callFunction = async (
    functionName: string,
    args: any[]
  ): Promise<IpcResult> => {
    try {
      // @ts-ignore - electron types
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

  const executeInWindow = async (functionCode: string): Promise<any> => {
    try {
      if (!windowId.value) {
        throw new Error("Window ID is not set");
      }

      // @ts-ignore - electron types
      const result = await window.electron.ipcRenderer.invoke(
        "execute-in-window",
        {
          windowId: windowId.value,
          functionCode,
        }
      );

      if (!result.success) {
        throw new Error(result.error);
      }

      return result.result;
    } catch (error) {
      console.error("Error executing function in window:", error);
      throw error;
    }
  };

  const initParams = (params: InitParams) => {
    windowId.value = params.windowId;
    selectedText.value = params.selectedText;
    mode.value = params.mode;
  };

  return {
    windowId,
    selectedText,
    mode,
    callFunction,
    executeInWindow,
    initParams,
  };
}

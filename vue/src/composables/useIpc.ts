import { ref } from "vue";
import type { IpcResult, Modes } from "../types";

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

  return {
    windowId,
    selectedText,
    mode,
    callFunction,
  };
}

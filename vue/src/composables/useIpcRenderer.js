import { ipcRenderer } from "electron";

export function useIpcRenderer() {
  const callFunction = async (functionName, args = []) => {
    try {
      const result = await ipcRenderer.invoke(
        "call-function",
        functionName,
        args
      );
      if (!result.success) {
        throw new Error(result.error);
      }
      return result;
    } catch (error) {
      console.error(`Error calling function ${functionName}:`, error);
      throw error;
    }
  };

  return {
    ipcRenderer,
    callFunction,
  };
}

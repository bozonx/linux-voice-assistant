import { defineStore } from "pinia";
import type { IpcResult, START_MODES } from "../types";

export const useIpcStore = defineStore("ipc", {
  state: () => ({
    windowId: null as string | null,
    selectedText: null as string | null,
    mode: null as START_MODES | null,
  }),

  actions: {
    async callFunction(
      functionName: string,
      args: any[] = []
    ): Promise<IpcResult> {
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
    },

    setWindowId(id: string | null) {
      this.windowId = id;
    },

    setSelectedText(text: string | null) {
      this.selectedText = text;
    },

    setMode(mode: START_MODES | null) {
      this.mode = mode;
    },
  },
});

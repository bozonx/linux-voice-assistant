import { defineStore } from "pinia";
import { ref } from "vue";
import { useIpcStore } from "./ipc";

export const useMainInputHistoryStore = defineStore("mainInputHistory", () => {
  const history = ref<string[]>([]);
  const ipcStore = useIpcStore();

  const loadHistory = async (): Promise<void> => {
    const loadedHistory = await ipcStore.callFunction(
      "getMainInputHistory",
      []
    );

    console.log("loadedHistory", loadedHistory.result);

    history.value = loadedHistory.result as string[];
  };

  const clearHistory = async (): Promise<void> => {
    await ipcStore.callFunction("clearMainInputHistory", []);
    history.value = [];
  };

  const removeFromHistory = async (value: string): Promise<void> => {
    await ipcStore.callFunction("removeFromMainInputHistory", [value]);
    history.value = history.value.filter((item) => item !== value);
  };

  const saveMainInput = async (value: string) => {
    await ipcStore.callFunction("saveMainInput", [value]);
  };

  return {
    history,
    loadHistory,
    clearHistory,
    removeFromHistory,
    saveMainInput,
  };
});

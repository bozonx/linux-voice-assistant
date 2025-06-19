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
    history.value = loadedHistory.result as string[];
  };

  const clearHistory = async (): Promise<void> => {
    await ipcStore.callFunction("clearMainInputHistory", []);
  };

  const removeFromHistory = async (value: string): Promise<void> => {
    await ipcStore.callFunction("removeFromMainInputHistory", [value]);
  };

  // Получение истории с фильтрацией по поисковому запросу
  const getFilteredHistory = (searchQuery: string): string[] => {
    if (!searchQuery.trim()) {
      return history.value;
    }

    const query = searchQuery.toLowerCase();
    return history.value.filter((item) => item.toLowerCase().includes(query));
  };

  const saveMainInput = async (value: string) => {
    await ipcStore.callFunction("saveMainInput", [value]);
  };

  return {
    history,
    loadHistory,
    clearHistory,
    removeFromHistory,
    getFilteredHistory,
    saveMainInput,
  };
});

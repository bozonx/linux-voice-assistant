import { defineStore } from "pinia";
import { ref } from "vue";
import { useIpcStore } from "./ipc";

export const useHistoryStore = defineStore("history", () => {
  const inputHistory = ref<string[]>([]);
  const transformHistory = ref<string[]>([]);
  const ipcStore = useIpcStore();

  const loadInputHistory = async (): Promise<void> => {
    const loadedHistory = await ipcStore.callFunction("getInputHistory", []);

    inputHistory.value = loadedHistory.result as string[];
  };

  const loadTransformHistory = async (): Promise<void> => {
    const loadedHistory = await ipcStore.callFunction(
      "getTransformHistory",
      []
    );
    transformHistory.value = loadedHistory.result as string[];
  };

  const clearInputHistory = async (): Promise<void> => {
    await ipcStore.callFunction("clearInputHistory", []);
    inputHistory.value = [];
  };

  const removeFromInputHistory = async (value: string): Promise<void> => {
    await ipcStore.callFunction("removeFromInputHistory", [value]);
    inputHistory.value = inputHistory.value.filter((item) => item !== value);
  };

  const clearTransformHistory = async (): Promise<void> => {
    await ipcStore.callFunction("clearTransformHistory", []);
    transformHistory.value = [];
  };

  const removeFromTransformHistory = async (value: string): Promise<void> => {
    await ipcStore.callFunction("removeFromTransformHistory", [value]);
    transformHistory.value = transformHistory.value.filter(
      (item) => item !== value
    );
  };

  const saveMainInput = async (value: string) => {
    await ipcStore.callFunction("saveMainInput", [value]);
  };

  const saveTransformHistory = async (value: string) => {
    await ipcStore.callFunction("saveTransformHistory", [value]);
  };

  return {
    inputHistory,
    transformHistory,
    loadInputHistory,
    loadTransformHistory,
    clearInputHistory,
    removeFromInputHistory,
    clearTransformHistory,
    removeFromTransformHistory,
    saveMainInput,
    saveTransformHistory,
  };
});

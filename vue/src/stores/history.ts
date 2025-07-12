import { defineStore } from "pinia";
import { ref } from "vue";
import { useIpcStore } from "./ipc";
import { ChatHistoryItem } from "../../../electron/types/types";

export const useHistoryStore = defineStore("history", () => {
  const inputHistory = ref<string[]>([]);
  const transformHistory = ref<string[]>([]);
  const chatHistory = ref<ChatHistoryItem[]>([]);
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

  const loadChatHistory = async (): Promise<void> => {
    const loadedHistory = await ipcStore.callFunction("getChatHistory", []);
    chatHistory.value = loadedHistory.result as ChatHistoryItem[];
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

  const clearChatHistory = async (): Promise<void> => {
    await ipcStore.callFunction("clearChatHistory", []);
    chatHistory.value = [];
  };

  const removeFromTransformHistory = async (value: string): Promise<void> => {
    await ipcStore.callFunction("removeFromTransformHistory", [value]);
    transformHistory.value = transformHistory.value.filter(
      (item) => item !== value
    );
  };

  const removeFromChatHistory = async (
    item: ChatHistoryItem
  ): Promise<void> => {
    await ipcStore.callFunction("removeFromChatHistory", [item]);
    chatHistory.value = chatHistory.value.filter((item) => item.id !== item.id);
  };

  const saveMainInput = async (value: string) => {
    await ipcStore.callFunction("saveMainInputTmp", [value]);
  };

  const saveTransformHistory = async (value: string) => {
    await ipcStore.callFunction("saveTransformHistory", [value]);
  };

  const saveChatHistory = async (chatHistoryItem: ChatHistoryItem) => {
    await ipcStore.callFunction("saveChatHistory", [chatHistoryItem]);
  };

  return {
    inputHistory,
    transformHistory,
    chatHistory,
    loadInputHistory,
    loadTransformHistory,
    loadChatHistory,
    clearInputHistory,
    removeFromInputHistory,
    clearTransformHistory,
    removeFromTransformHistory,
    saveMainInput,
    saveTransformHistory,
    saveChatHistory,
    clearChatHistory,
    removeFromChatHistory,
  };
});

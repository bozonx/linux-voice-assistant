import Store from "electron-store";
import { APP_CONFIG } from "./appConfig";

export const mainInputStore = new Store({
  name: "main-input",
  defaults: {
    value: "",
    lastSaved: null,
  },
}) as any;

export const inputHistoryStore = new Store({
  name: "input-history",
  defaults: {
    history: [],
  },
}) as any;

export const transformHistoryStore = new Store({
  name: "transform-history",
  defaults: {
    history: [],
  },
}) as any;

export const chatHistoryStore = new Store({
  name: "chat-history",
  defaults: {
    history: [],
  },
}) as any;

export async function moveInputToHistory() {
  try {
    const prevInputvalue = mainInputStore.get("value", "") as string;
    // remove previous input value
    mainInputStore.set("value", "");

    if (!prevInputvalue) return;

    const history = inputHistoryStore.get("history", []) as string[];
    // Удаляем дубликаты
    const filteredHistory = history.filter((item) => item !== prevInputvalue);
    // Ограничиваем количество элементов
    if (filteredHistory.length > APP_CONFIG.mainInputHistoryMaxItems) {
      filteredHistory.splice(APP_CONFIG.mainInputHistoryMaxItems);
    }
    // Добавляем новое значение в начало
    filteredHistory.unshift(prevInputvalue);

    inputHistoryStore.set("history", filteredHistory);
  } catch (error) {
    console.error("Error making history:", error);
    throw error;
  }
}

import Store from "electron-store";
import { APP_CONFIG } from "./appConfig";

export const mainInputStore = new Store({
  name: "main-input",
  defaults: {
    value: "",
    lastSaved: null,
  },
}) as any;

export const mainInputHistoryStore = new Store({
  name: "main-input-history",
  defaults: {
    history: [],
    // maxItems: APP_CONFIG.mainInputHistoryMaxItems,
  },
}) as any;

export async function makeInputHistoryOnStart() {
  try {
    const prevInputvalue = mainInputStore.get("value", "") as string;
    // remove previous input value
    mainInputStore.set("value", "");

    if (!prevInputvalue) return;

    const history = mainInputHistoryStore.get("history", []) as string[];
    // Удаляем дубликаты
    const filteredHistory = history.filter((item) => item !== prevInputvalue);
    // Ограничиваем количество элементов
    if (filteredHistory.length > APP_CONFIG.mainInputHistoryMaxItems) {
      filteredHistory.splice(APP_CONFIG.mainInputHistoryMaxItems);
    }
    // Добавляем новое значение в начало
    filteredHistory.unshift(prevInputvalue);

    mainInputHistoryStore.set("history", filteredHistory);
  } catch (error) {
    console.error("Error making history on start:", error);
    throw error;
  }
}

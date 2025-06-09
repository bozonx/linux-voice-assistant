import { defineStore } from "pinia";
import { ref } from "vue";

// Интерфейс для store'а
interface MainInputState {
  mainInputText: string;
}

export const useMainInputStore = defineStore("mainInput", () => {
  // Состояние
  const mainInputText = ref<string>("");

  // Действия
  const setMainInputText = (newText: string): void => {
    mainInputText.value = newText;
  };

  return {
    mainInputText,
    setMainInputText,
  };
});

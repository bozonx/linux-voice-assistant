import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainInputStore = defineStore("mainInput", () => {
  // Состояние
  const mainInputText = ref("");

  // Действия
  const setMainInputText = (newText: string) => {
    mainInputText.value = newText;
  };

  const getMainInputText = () => {
    return mainInputText.value;
  };

  return {
    mainInputText,
    setMainInputText,
    getMainInputText,
  };
});

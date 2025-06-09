import { defineStore } from "pinia";
import { ref } from "vue";

// Интерфейс для store'а
interface MainInputState {
  value: string;
}

export const useMainInputStore = defineStore("mainInput", () => {
  // Состояние
  const value = ref<string>("");
  const focusCount = ref<number>(0);
  const selectAllCount = ref<number>(0);

  // Действия
  const setValue = (newText: string): void => {
    value.value = newText;
  };

  const focus = (): void => {
    focusCount.value++;
  };

  const selectAll = (): void => {
    selectAllCount.value++;
  };

  return {
    value,
    focusCount,
    selectAllCount,
    setValue,
    focus,
    selectAll,
  };
});

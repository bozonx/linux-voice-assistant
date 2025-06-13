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
  const selectedText = ref<string>("");
  const selectionStart = ref<number>(0);
  const selectionEnd = ref<number>(0);

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

  const setSelection = (text: string, start: number, end: number): void => {
    selectedText.value = text;
    selectionStart.value = start;
    selectionEnd.value = end;
  };

  const replaceSelection = (newText: string): void => {
    // Получаем текст до и после выделения
    const beforeSelection = value.value.substring(0, selectionStart.value);
    const afterSelection = value.value.substring(selectionEnd.value);

    // Формируем новый текст
    const newValue = beforeSelection + newText + afterSelection;

    // Обновляем значение
    value.value = newValue;

    // Обновляем позиции выделения
    const newEnd = selectionStart.value + newText.length;
    setSelection(newText, selectionStart.value, newEnd);
  };

  return {
    value,
    focusCount,
    selectAllCount,
    selectedText,
    selectionStart,
    selectionEnd,
    setValue,
    focus,
    selectAll,
    setSelection,
    replaceSelection,
  };
});

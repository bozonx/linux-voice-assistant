import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainInputStore = defineStore("mainInput", () => {
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

  const setValueAtCursor = (newText: string): void => {
    value.value =
      value.value.substring(0, selectionStart.value) +
      newText +
      value.value.substring(selectionEnd.value);
  };

  const focus = (): void => {
    focusCount.value++;
  };

  const selectAll = (): void => {
    selectAllCount.value++;
  };

  const clear = (): void => {
    value.value = "";
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
    setValueAtCursor,
    focus,
    selectAll,
    setSelection,
    replaceSelection,
    clear,
  };
});

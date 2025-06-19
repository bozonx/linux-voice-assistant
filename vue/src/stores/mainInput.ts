import { defineStore } from "pinia";
import { ref } from "vue";
import { useIpcStore } from "./ipc";

export const useMainInputStore = defineStore("mainInput", () => {
  const value = ref<string>("");
  const focusCount = ref<number>(0);
  // const selectAllCount = ref<number>(0);
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

  // const selectAll = (): void => {
  //   selectAllCount.value++;
  // };

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

  // Загрузка сохраненного значения из electron-store
  const loadSavedValue = async (): Promise<void> => {
    try {
      const ipcStore = useIpcStore();
      const savedValue = await ipcStore.getMainInput();
      if (savedValue && savedValue.trim() !== "") {
        value.value = savedValue;
        console.log("Loaded saved main input value:", savedValue);
      }
    } catch (error) {
      console.error("Error loading saved main input:", error);
    }
  };

  return {
    value,
    focusCount,
    // selectAllCount,
    selectedText,
    selectionStart,
    selectionEnd,
    setValue,
    focus,
    // selectAll,
    setSelection,
    replaceSelection,
    loadSavedValue,
  };
});

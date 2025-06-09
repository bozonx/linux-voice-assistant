import { ref } from "vue";

// Создаем реактивную переменную для хранения текста
const mainInputText = ref("");

// Функция для установки текста
const setMainInputText = (newText: string) => {
  mainInputText.value = newText;
};

// Функция для получения текущего текста
const getMainInputText = () => {
  return mainInputText.value;
};

// Экспортируем composable
export function useMainInput() {
  return {
    mainInputText,
    setMainInputText,
    getMainInputText,
  };
}

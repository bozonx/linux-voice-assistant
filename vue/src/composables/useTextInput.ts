import { ref } from "vue";

// Создаем реактивную переменную для хранения текста
const text = ref("");

// Функция для установки текста
const setText = (newText: string) => {
  text.value = newText;
};

// Функция для получения текущего текста
const getText = () => {
  return text.value;
};

// Экспортируем composable
export function useTextInput() {
  return {
    text,
    setText,
    getText,
  };
}

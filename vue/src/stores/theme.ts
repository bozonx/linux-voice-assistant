import { defineStore } from "pinia";
import { ref } from "vue";

// Функция для получения системной темы из настроек браузера
const getSystemTheme = (): string => {
  // Проверяем поддержку prefers-color-scheme
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return "light";
  }
  // По умолчанию возвращаем светлую тему
  return "light";
};

export const useThemeStore = defineStore("theme", () => {
  let initialTheme = localStorage.getItem("theme");

  if (!initialTheme) {
    initialTheme = getSystemTheme();
  }

  const theme = ref(initialTheme);

  // Применяем тему к документу при инициализации
  document.documentElement.setAttribute("data-theme", theme.value);

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme.value);
    localStorage.setItem("theme", theme.value);
  };

  // Функция для сброса к системной теме
  const resetToSystemTheme = () => {
    const systemTheme = getSystemTheme();
    theme.value = systemTheme;
    document.documentElement.setAttribute("data-theme", systemTheme);
    localStorage.removeItem("theme"); // Удаляем сохраненную тему, чтобы использовать системную
  };

  return {
    theme,
    toggleTheme,
    resetToSystemTheme,
  };
});

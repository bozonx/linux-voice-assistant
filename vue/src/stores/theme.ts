import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const initialTheme = localStorage.getItem("theme");

  if (!initialTheme) {
    initialTheme = ;
  }

  const theme = ref(initialTheme);

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme.value);
    localStorage.setItem("theme", theme.value);
  };

  return {
    theme,
    toggleTheme,
  };
});

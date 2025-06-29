import { defineStore } from "pinia";
import { ref } from "vue";

export interface MenuItem {
  name: string;
  icon?: string;
  action: (text: string) => Promise<void>;
}

export const DEFAULT_ACTIONS: MenuItem[] = [
  {
    name: "Коррекция",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "Редактировать",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "Перевод",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "В буфер обмена",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "Вставить в окно",
    action: (text: string) => Promise.resolve(),
  },
];

export const DEFAULT_EDIT_ITEMS: MenuItem[] = [
  {
    name: "Beautyfy MD",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "Формат JS/JSON/CSS/HTML/XML",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "Capitalize",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "UPPERCASE",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "lowercase",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "camelCase",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "PascalCase",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "kebab-case",
    action: (text: string) => Promise.resolve(),
  },
  {
    name: "snake_case",
    action: (text: string) => Promise.resolve(),
  },
];

export const useMenuStore = defineStore("menu", () => {
  const actionsMenu = ref<MenuItem[]>([]);
  const editMenu = ref<MenuItem[]>([]);

  const addActionsItems = (actions: MenuItem[]) => {
    actionsMenu.value.push(...actions);
  };

  const addEditItems = (edit: MenuItem[]) => {
    editMenu.value.push(...edit);
  };

  return {
    actionsMenu,
    editMenu,
    addActionsItems,
    addEditItems,
  };
});

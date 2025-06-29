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
  const registeredActionsMenu = ref<MenuItem[]>([]);
  const registeredEditMenu = ref<MenuItem[]>([]);

  const getActionsMenu = () => {
    return [...DEFAULT_ACTIONS, ...registeredActionsMenu.value];
  };

  const getEditMenu = () => {
    return [...DEFAULT_EDIT_ITEMS, ...registeredEditMenu.value];
  };

  const registerActionsItems = (actions: MenuItem[]) => {
    registeredActionsMenu.value.push(...actions);
  };

  const registerEditItems = (edit: MenuItem[]) => {
    registeredEditMenu.value.push(...edit);
  };

  return {
    getActionsMenu,
    getEditMenu,
    registerActionsItems,
    registerEditItems,
  };
});

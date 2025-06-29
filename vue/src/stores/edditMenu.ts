import { defineStore } from "pinia";
import { ref } from "vue";
import { useTextTransform } from "../composables/useTextTransform";
import { useCodeFormatter } from "../composables/useCodeFormatter";

export interface EditItem {
  name: string;
  icon?: string;
  action: (text: string) => Promise<string>;
}

export const useEditMenuStore = defineStore("editMenu", () => {
  const { doCaseTransform } = useTextTransform();
  const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();

  const registeredEditMenu = ref<EditItem[]>([]);

  const DEFAULT_EDIT_ITEMS: EditItem[] = [
    {
      name: "Beautyfy MD",
      action: async (text: string) => formatMdAndStyle(text),
    },
    {
      name: "Формат JS/JSON/CSS/HTML/XML",
      action: async (text: string) => formatSomeCode(text),
    },
    {
      name: "Capitalize",
      action: async (text: string) => doCaseTransform(text, "capitalize"),
    },
    {
      name: "UPPERCASE",
      action: async (text: string) => doCaseTransform(text, "uppercase"),
    },
    {
      name: "lowercase",
      action: async (text: string) => doCaseTransform(text, "lowercase"),
    },
    {
      name: "camelCase",
      action: async (text: string) => doCaseTransform(text, "camelCase"),
    },
    {
      name: "PascalCase",
      action: async (text: string) => doCaseTransform(text, "pascalCase"),
    },
    {
      name: "snake_case",
      action: async (text: string) => doCaseTransform(text, "snakeCase"),
    },
    {
      name: "kebab-case",
      action: async (text: string) => doCaseTransform(text, "kebabCase"),
    },
  ];

  const getEditMenu = () => {
    return [...DEFAULT_EDIT_ITEMS, ...registeredEditMenu.value];
  };

  const registerEditItems = (edit: EditItem[]) => {
    registeredEditMenu.value.push(...edit);
  };

  return {
    getEditMenu,
    registerEditItems,
  };
});

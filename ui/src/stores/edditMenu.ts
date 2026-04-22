import { defineStore } from "pinia";
import { ref } from "vue";
import { useI18n } from "../composables/useI18n";
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
  const { t } = useI18n()

  const registeredEditMenu = ref<EditItem[]>([]);

  const getEditMenu = () => {
    const defaultEditItems: EditItem[] = [
      {
        name: t("edit.beautifyMd"),
        action: async (text: string) => formatMdAndStyle(text),
      },
      {
        name: t("edit.formatCode"),
        action: async (text: string) => formatSomeCode(text),
      },
      {
        name: t("edit.normalize"),
        action: async (text: string) => doCaseTransform(text, "normalize"),
      },
      {
        name: t("edit.uppercase"),
        action: async (text: string) => doCaseTransform(text, "uppercase"),
      },
      {
        name: t("edit.lowercase"),
        action: async (text: string) => doCaseTransform(text, "lowercase"),
      },
      {
        name: t("edit.camelCase"),
        action: async (text: string) => doCaseTransform(text, "camelCase"),
      },
      {
        name: t("edit.pascalCase"),
        action: async (text: string) => doCaseTransform(text, "pascalCase"),
      },
      {
        name: t("edit.snakeCase"),
        action: async (text: string) => doCaseTransform(text, "snakeCase"),
      },
      {
        name: t("edit.kebabCase"),
        action: async (text: string) => doCaseTransform(text, "kebabCase"),
      },
    ];

    return [...defaultEditItems, ...registeredEditMenu.value];
  };

  const registerEditItems = (edit: EditItem[]) => {
    registeredEditMenu.value.push(...edit);
  };

  return {
    getEditMenu,
    registerEditItems,
  };
});

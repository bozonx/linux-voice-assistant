import { defineStore } from "pinia";
import { ref } from "vue";
import { useCallApi } from "../composables/useCallApi";
import { useOverlayStore } from "./mainOverlay";
import { useTextTransform } from "../composables/useTextTransform";
import { useCodeFormatter } from "../composables/useCodeFormatter";
import { useIpcStore } from "./ipc";

export interface ActionItem {
  name: string;
  icon?: string;
  action: (text: string) => Promise<void>;
}

export interface EditItem {
  name: string;
  icon?: string;
  action: (text: string) => Promise<string>;
}

export const useMenuStore = defineStore("menu", () => {
  const { typeIntoWindowAndClose } = useCallApi();
  const ipcStore = useIpcStore();
  const { doCaseTransform } = useTextTransform();
  const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();
  const overlayStore = useOverlayStore();

  const DEFAULT_ACTIONS: ActionItem[] = [
    {
      name: "Коррекция",
      action: async (text: string) => {
        // if (!text?.trim()) return;
        // if (text.length < appConfig.minCorrectionLength) {
        //   miniToastr.warn("Слишком короткий текст для коррекции");
        //   return;
        // }
        // overlayStore.showCorrection();
        // const newText = await correctText(mainInputStore.value);
        // overlayStore.showDiff(newText);
      },
    },
    {
      name: "Редактировать",
      action: async (text: string) => overlayStore.showEditPresets(),
    },
    {
      name: "Перевод",
      action: async (text: string) => overlayStore.showTranslate(),
    },
    {
      name: "В буфер обмена",
      action: async (text: string) => {
        await ipcStore.callFunction("putIntoClipboardAndClose", [text]);
      },
    },
    {
      name: "Вставить в окно",
      action: async (text: string) => typeIntoWindowAndClose(text),
    },
  ];

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

  const registeredActionsMenu = ref<ActionItem[]>([]);
  const registeredEditMenu = ref<EditItem[]>([]);

  const getActionsMenu = () => {
    return [...DEFAULT_ACTIONS, ...registeredActionsMenu.value];
  };

  const getEditMenu = () => {
    return [...DEFAULT_EDIT_ITEMS, ...registeredEditMenu.value];
  };

  const registerActionsItems = (actions: ActionItem[]) => {
    registeredActionsMenu.value.push(...actions);
  };

  const registerEditItems = (edit: EditItem[]) => {
    registeredEditMenu.value.push(...edit);
  };

  return {
    getActionsMenu,
    getEditMenu,
    registerActionsItems,
    registerEditItems,
  };
});

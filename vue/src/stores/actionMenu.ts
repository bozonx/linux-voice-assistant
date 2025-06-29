import { defineStore } from "pinia";
import { ref } from "vue";
import { useCallApi } from "../composables/useCallApi";
import { useOverlayStore } from "./mainOverlay";
import { useIpcStore } from "./ipc";

export interface ActionItem {
  name: string;
  icon?: string;
  action: (text: string) => Promise<void>;
}

export const useActionMenuStore = defineStore("actionMenu", () => {
  const { typeIntoWindowAndClose } = useCallApi();
  const ipcStore = useIpcStore();
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

  const registeredActionsMenu = ref<ActionItem[]>([]);

  const getActionsMenu = () => {
    return [...DEFAULT_ACTIONS, ...registeredActionsMenu.value];
  };

  const registerActionsItems = (actions: ActionItem[]) => {
    registeredActionsMenu.value.push(...actions);
  };

  return {
    getActionsMenu,
    registerActionsItems,
  };
});

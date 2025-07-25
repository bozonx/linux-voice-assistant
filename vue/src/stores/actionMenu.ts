import { defineStore } from "pinia";
import { ref } from "vue";
import { useCallApi } from "../composables/useCallApi";
import { useIpcStore } from "./ipc";
import { MenuModals, useMenuModalsStore } from "./menuModals";
import { useCallAi } from "../composables/useCallAi";
import useToast from "../composables/useToast";
import { useHistoryStore } from "./history";
import { useChatStore } from "./chat";

// TODO: почему тут?
export interface ActionItem {
  name: string;
  icon?: string;
  disabled?: boolean;
  action: (text: string) => Promise<void>;
}

export const useActionMenuStore = defineStore("actionMenu", () => {
  const { typeIntoWindowAndClose } = useCallApi();
  const ipcStore = useIpcStore();
  const menuModalsStore = useMenuModalsStore();
  const historyStore = useHistoryStore();
  const appConfig = ipcStore.params!.appConfig;
  const { correctText } = useCallAi();
  const { toast } = useToast();
  const registeredActionsMenu = ref<ActionItem[]>([]);
  const chatStore = useChatStore();

  const DEFAULT_ACTIONS: ActionItem[] = [
    {
      name: "Вставить в окно",
      action: async (text: string) => {
        if (!text?.trim()) {
          toast("Текст не выбран", "error");
          return;
        }

        typeIntoWindowAndClose(text);
      },
    },
    {
      name: "В буфер обмена",
      action: async (text: string) => {
        if (!text?.trim()) {
          toast("Текст не выбран", "error");
          return;
        }

        await ipcStore.callFunction("putIntoClipboardAndClose", [text]);
      },
    },
    {
      name: "Задание для AI",
      action: async (text: string) => {
        if (!text?.trim()) {
          toast("Текст не выбран", "error");
          return;
        }

        menuModalsStore.nextModal(MenuModals.AI_TASK, {
          text,
        });
      },
    },
    {
      name: "Коррекция",
      action: async (text: string) => {
        if (!text?.trim()) {
          toast("Текст не выбран", "error");
          return;
        }

        if (text.length < appConfig.minCorrectionLength) {
          toast("Слишком короткий текст для коррекции", "warn");
          return;
        }

        menuModalsStore.setPendingModal({ correction: true });

        const newText = await correctText(text);

        await historyStore.saveTransformHistory(newText);

        menuModalsStore.clearPendingModal();

        menuModalsStore.nextModal(MenuModals.CORRECTION, {
          oldText: text,
          newText,
        });
      },
    },
    {
      name: "Перевод",
      action: async (text: string) => {
        if (!text?.trim()) {
          toast("Текст не выбран", "error");
          return;
        }

        menuModalsStore.nextModal(MenuModals.TRANSLATE, {
          text,
        });
      },
    },
    {
      name: "Спросить у AI",
      action: async (text: string) => {
        chatStore.startChat({
          initialMessage: text,
        });
      },
    },
    {
      name: "Спросить по тексту у AI",
      action: async (text: string) => {
        if (!text?.trim()) {
          toast("Текст не выбран", "error");
          return;
        }

        chatStore.startChat({
          attachments: [text],
        });
      },
    },
  ];

  const getActionsMenu = () => {
    return [...DEFAULT_ACTIONS, ...registeredActionsMenu.value];
  };

  const registerActionsItems = (actions: ActionItem[]) => {
    registeredActionsMenu.value.push(...actions);
  };

  return {
    DEFAULT_ACTIONS,
    getActionsMenu,
    registerActionsItems,
  };
});

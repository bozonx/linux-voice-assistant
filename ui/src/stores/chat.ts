import { defineStore } from "pinia";

import { useI18n } from "../composables/useI18n";
import { useCallAi } from "../composables/useCallAi";
import useToast from "../composables/useToast";
import { appNavigation } from "../lib/navigation/navigation";
import { useHistoryStore } from "./history";
import { makeUniqId } from "@/lib/squidlet-lib-local";
import { createChatStoreModel } from "../lib/chat/chat-store";

export const useChatStore = defineStore("chat", () => {
  const { toast } = useToast();
  const { sendChatMessage } = useCallAi();
  const historyStore = useHistoryStore();
  const { t } = useI18n();

  return createChatStoreModel({
    sendChatMessage,
    saveChatHistory: (item) => {
      void historyStore.saveChatHistory(item);
    },
    navigateTo: (path) => appNavigation.push(path),
    notifyError: (message) => {
      toast(message, "error");
    },
    emptyMessageError: t("toast.textNotSelected"),
    createId: () => makeUniqId(8),
    nowIso: () => new Date().toISOString(),
  });
});

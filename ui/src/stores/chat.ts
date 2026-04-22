import { defineStore } from "pinia";

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

  return createChatStoreModel({
    sendChatMessage,
    saveChatHistory: (item) => {
      void historyStore.saveChatHistory(item);
    },
    navigateTo: (path) => appNavigation.push(path),
    notifyError: (message) => {
      toast(message, "error");
    },
    createId: () => makeUniqId(8),
    nowIso: () => new Date().toISOString(),
  });
});

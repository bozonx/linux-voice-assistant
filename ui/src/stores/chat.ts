import { APP_CONFIG, type ChatMessage, type ChatParams } from "@shared";
import { defineStore } from "pinia";
import { ref } from "vue";

import { useCallAi } from "../composables/useCallAi";
import { useRouter } from "vue-router";
import useToast from "../composables/useToast";
import { AI_TASKS } from "../types";
import { useHistoryStore } from "./history";
import { makeUniqId } from "@/lib/squidlet-lib-local";
import {
  createAssistantMessage,
  createChatHistoryEntry,
  prepareChatRequest,
} from "../lib/chat/chat-helpers";

export const useChatStore = defineStore("chat", () => {
  const { toast } = useToast();
  const { sendChatMessage } = useCallAi();
  const router = useRouter();
  const historyStore = useHistoryStore();

  const messages = ref<ChatMessage[]>([
    // { role: "assistant", content: "Hello, how are you?" },
  ]);
  const newChatParams = ref<ChatParams>({});

  const sendMessage = async (
    message: string,
    attachments?: string[],
    role?: string
  ) => {
    if (!message?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }

    let devInstructions;
    const prevMessages = messages.value;

    if (prevMessages.length > 0) {
      devInstructions = APP_CONFIG.aiInstructions[AI_TASKS.CHAT];
    }

    const { preparedMessage, userMessage } = prepareChatRequest(
      message,
      attachments,
      role
    );

    messages.value.push(userMessage);

    const result = await sendChatMessage(
      preparedMessage,
      prevMessages,
      devInstructions
    );

    const assistantMessage: ChatMessage = createAssistantMessage(result);
    messages.value.push(assistantMessage);

    newChatParams.value.attachments = [];

    historyStore.saveChatHistory(
      createChatHistoryEntry({
        id: newChatParams.value.id!,
        description: newChatParams.value.initialMessage!,
        lastMsgDate: new Date().toISOString(),
        userMessage,
        assistantMessage,
      })
    );

    return result;
  };

  // const clearMessages = () => {
  //   messages.value = [];
  // };

  const startChat = (chatParams: ChatParams) => {
    newChatParams.value = { ...chatParams, id: makeUniqId(8) };

    router.push("/chat");
  };

  return {
    messages,
    newChatParams,
    sendMessage,
    startChat,
  };
});

import { ChatMessage, ChatParams } from "../../../electron/types/types";
import { defineStore } from "pinia";
import { useCallAi } from "../composables/useCallAi";
import { useRouter } from "vue-router";
import useToast from "../composables/useToast";
import { APP_CONFIG } from "../../../electron/appConfig";
import { AI_TASKS } from "../types";
import { useHistoryStore } from "./history";
import { makeUniqId } from "squidlet-lib";

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

    const attachString = (attachments || [])
      .map((a) => `=== ATTACHMENT START ===\n${a}\n=== ATTACHMENT END ===`)
      .join("\n\n");

    const roleString = role
      ? `=== ROLE/RULES START ===\n${role}\n=== ROLE/RULES END ===`
      : "";
    const preparedMessage = [attachString, roleString, message]
      .filter(Boolean)
      .join("\n\n");

    // save to previous messages
    const newMessage: ChatMessage = {
      role: "user",
      content: [attachString, message].filter(Boolean).join("\n\n"),
    };
    messages.value.push(newMessage);

    const result = await sendChatMessage(
      preparedMessage,
      prevMessages,
      devInstructions
    );

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: result,
    };
    messages.value.push(assistantMessage);

    newChatParams.value.attachments = [];

    historyStore.saveChatHistory({
      id: newChatParams.value.id!,
      // TODO: description
      description: newChatParams.value.initialMessage!,
      lastMsgDate: new Date().toISOString(),
      messages: [newMessage, assistantMessage],
    });

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

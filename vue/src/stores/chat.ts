import { ChatMessage, ChatParams } from "../../../electron/types/types";
import { defineStore } from "pinia";
import { useCallAi } from "../composables/useCallAi";
import { useRouter } from "vue-router";

export const useChatStore = defineStore("chat", () => {
  const { sendChatMessage } = useCallAi();
  const router = useRouter();

  const messages = ref<ChatMessage[]>([
    // { role: "assistant", content: "Hello, how are you?" },
  ]);
  const params = ref<ChatParams>({});

  const sendMessage = async (
    message: string,
    attachments?: string[],
    role?: string
  ) => {
    const prevMessages = messages.value;
    const attachString = (attachments || [])
      .map((a) => `=== ATTACHMENT START ===\n${a}\n=== ATTACHMENT END ===`)
      .join("\n\n");

    const roleString = role
      ? `=== ROLE/RULES START ===\n${role}\n=== ROLE/RULES END ===`
      : "";
    const preparedMessage = [attachString, roleString, message]
      .filter(Boolean)
      .join("\n\n");

    // TODO: save to history
    // save to previous messages
    messages.value.push({
      role: "user",
      content: [attachString, message].filter(Boolean).join("\n\n"),
    });

    const result = await sendChatMessage(preparedMessage, prevMessages);

    messages.value.push({ role: "assistant", content: result });

    params.value.attachments = [];

    return result;
  };

  // const clearMessages = () => {
  //   messages.value = [];
  // };

  const startChat = (chatParams: ChatParams) => {
    params.value = chatParams;

    router.push("/chat");
  };

  return {
    messages,
    params,
    sendMessage,
    startChat,
  };
});

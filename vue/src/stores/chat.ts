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

  const sendMessage = async (message: string) => {
    const prevMessages = messages.value;

    messages.value.push({ role: "user", content: message });

    const result = await sendChatMessage(message, prevMessages);

    messages.value.push({ role: "assistant", content: result });

    return result;
  };

  const clearMessages = () => {
    messages.value = [];
  };

  const startChat = (chatParams: ChatParams) => {
    params.value = chatParams;

    router.push("/chat");
  };

  return {
    messages,
    params,
    sendMessage,
    clearMessages,
    startChat,
  };
});

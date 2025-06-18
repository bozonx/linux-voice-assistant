import { ChatMessage } from "../../../electron/types/types";
import { defineStore } from "pinia";
import { useCallAi } from "../composables/useCallAi";

export const useChatStore = defineStore("chat", () => {
  const { sendChatMessage } = useCallAi();

  const messages = ref<ChatMessage[]>([
    // { role: "assistant", content: "Hello, how are you?" },
  ]);

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

  return {
    messages,
    sendMessage,
    clearMessages,
  };
});

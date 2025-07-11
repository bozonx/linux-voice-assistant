import { useIpcStore } from "../stores/ipc";
import { useAiRequest } from "../../../common/useAiRequest";
import { ChatMessage } from "../../../electron/types/types";
import { AI_TASKS } from "../types";
import useToast from "./useToast";

export const useCallAi = () => {
  const { chatCompletion, prepareAiMessages } = useAiRequest();
  const ipcStore = useIpcStore();
  const { toast } = useToast();

  async function aiRequest(taskName: string, messages: string | ChatMessage[]) {
    const userConfig = ipcStore.params!.userConfig;
    const modelId = (userConfig.aiModelUsage as any)[taskName];
    const model = userConfig.llmModels.find((model) => model.id === modelId);

    if (!model) {
      throw new Error("Model not found");
    }

    const result = await chatCompletion(model, messages);

    if (result.error) {
      toast(result.error, "error", 10000);
      console.error(result.status + " " + result.statusText, result.error);

      return "";
    }

    return result.content;
  }

  const startVoiceRecognition = async () => {
    await ipcStore.callFunction("startVoiceRecognition");
  };

  const stopVoiceRecognition = async () => {
    await ipcStore.callFunction("stopVoiceRecognition");
  };

  const voiceCorrection = async (text: string) => {
    return await aiRequest(
      AI_TASKS.VOICE_CORRECTION,
      prepareAiMessages(
        ipcStore.params!.userConfig,
        AI_TASKS.VOICE_CORRECTION,
        text
      )
    );
  };

  const sendChatMessage = async (
    message: string,
    prevMessages: ChatMessage[]
  ) => {
    const result = await aiRequest(
      AI_TASKS.CHAT,
      prepareAiMessages(ipcStore.params!.userConfig, AI_TASKS.CHAT, [
        ...prevMessages,
        { role: "user", content: message },
      ])
    );

    return result;
  };

  const correctText = async (text: string) => {
    if (!text?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }

    return await aiRequest(
      AI_TASKS.CORRECTION,
      prepareAiMessages(ipcStore.params!.userConfig, AI_TASKS.CORRECTION, text)
    );
  };

  const translateText = async (toLangNum: number, text?: string) => {
    if (!text?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }
    return await aiRequest(
      AI_TASKS.TRANSLATE,
      prepareAiMessages(
        ipcStore.params!.userConfig,
        AI_TASKS.TRANSLATE,
        text,
        undefined,
        {
          TRANSLATION_LANG:
            ipcStore.params!.userConfig.toTranslateLanguages[toLangNum],
        }
      )
    );
  };

  const aiTasks = async (presetNum: number, text?: string) => {
    if (!text?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }

    return await aiRequest(
      AI_TASKS.AI_TASKS,
      prepareAiMessages(
        ipcStore.params!.userConfig,
        AI_TASKS.AI_TASKS,
        text,
        ipcStore.params!.userConfig.aiTasks[presetNum].rule
      )
    );
  };

  return {
    aiRequest,
    startVoiceRecognition,
    stopVoiceRecognition,
    voiceCorrection,
    sendChatMessage,
    correctText,
    translateText,
    aiTasks,
  };
};

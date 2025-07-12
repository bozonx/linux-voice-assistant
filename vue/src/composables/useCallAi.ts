import { useIpcStore } from "../stores/ipc";
import { useAiRequest } from "../../../common/useAiRequest";
import { ChatMessage } from "../../../electron/types/types";
import { AI_TASKS } from "../types";
import useToast from "./useToast";
import { APP_CONFIG } from "../../../electron/appConfig";

export const useCallAi = () => {
  const { chatCompletion, prepareAiMessages, prepareDevInstructions } =
    useAiRequest();
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
      toast(result.error, "error");
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
    const userConfig = ipcStore.params!.userConfig;
    const rule = userConfig.aiRules[AI_TASKS.VOICE_CORRECTION];
    const devInstructions = prepareDevInstructions(
      APP_CONFIG.aiInstructions[AI_TASKS.VOICE_CORRECTION]
    );

    return await aiRequest(
      AI_TASKS.VOICE_CORRECTION,
      prepareAiMessages(text, rule, devInstructions)
    );
  };

  const sendChatMessage = async (
    message: string,
    prevMessages: ChatMessage[],
    devInstructions?: string
  ) => {
    const result = await aiRequest(
      AI_TASKS.CHAT,
      prepareAiMessages(
        [...prevMessages, { role: "user", content: message }],
        undefined,
        devInstructions
      )
    );

    return result;
  };

  const correctText = async (text: string) => {
    if (!text?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }

    const userConfig = ipcStore.params!.userConfig;
    const rule = userConfig.aiRules[AI_TASKS.CORRECTION];
    const devInstructions = prepareDevInstructions(
      APP_CONFIG.aiInstructions[AI_TASKS.CORRECTION]
    );

    return await aiRequest(
      AI_TASKS.CORRECTION,
      prepareAiMessages(text, rule, devInstructions)
    );
  };

  const translateText = async (toLangNum: number, text?: string) => {
    if (!text?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }

    const userConfig = ipcStore.params!.userConfig;
    const rule = userConfig.aiRules[AI_TASKS.TRANSLATE];
    const devInstructions = prepareDevInstructions(
      APP_CONFIG.aiInstructions[AI_TASKS.TRANSLATE],
      {
        TRANSLATION_LANG:
          ipcStore.params!.userConfig.toTranslateLanguages[toLangNum],
      }
    );

    return await aiRequest(
      AI_TASKS.TRANSLATE,
      prepareAiMessages(text, rule, devInstructions)
    );
  };

  const aiTasks = async (presetNum: number, text?: string) => {
    if (!text?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }

    const userConfig = ipcStore.params!.userConfig;
    const rule = userConfig.aiTasks[presetNum].rule;
    const devInstructions = prepareDevInstructions(
      APP_CONFIG.aiInstructions[AI_TASKS.AI_TASKS]
    );

    return await aiRequest(
      AI_TASKS.AI_TASKS,
      prepareAiMessages(text, rule, devInstructions)
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

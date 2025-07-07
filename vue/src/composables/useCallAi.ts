import { useIpcStore } from "../stores/ipc";
import { useCallApi } from "./useCallApi";
import { useAiRequest } from "../../../common/useAiRequest";
import { ChatMessage } from "../../../electron/types/types";
import { AI_TASKS } from "../types";
import useToast from "./useToast";

export const useCallAi = () => {
  const { chatCompletion, prepareAiMessages } = useAiRequest();
  const ipcStore = useIpcStore();
  const { resolveText } = useCallApi();
  const { toast } = useToast();

  async function aiRequest(taskName: string, messages: string | ChatMessage[]) {
    const result = await chatCompletion(
      ipcStore.params!.userConfig,
      taskName,
      messages
    );

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

  const dealToCalendar = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }

    console.log("dealToCalendar");

    // TODO: do it
  };

  const sendChatMessage = async (
    message: string,
    prevMessages: ChatMessage[]
  ) => {
    if (!message?.trim()) {
      toast("Текст не выбран", "error");
      return;
    }

    const result = await aiRequest(
      AI_TASKS.ASK_AI,
      prepareAiMessages(ipcStore.params!.userConfig, AI_TASKS.ASK_AI, [
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
        ipcStore.params!.userConfig.aiTasks[presetNum].context
      )
    );
  };

  return {
    aiRequest,
    startVoiceRecognition,
    stopVoiceRecognition,
    voiceCorrection,
    dealToCalendar,
    sendChatMessage,
    correctText,
    translateText,
    aiTasks,
  };
};

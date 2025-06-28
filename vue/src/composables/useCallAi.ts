// @ts-ignore
import miniToastr from "mini-toastr";
import { useIpcStore } from "../stores/ipc";
import { useCallApi } from "./useCallApi";
import { useAiRequest } from "../../../common/useAiRequest";
import { ChatMessage } from "../../../electron/types/types";
import { AI_TASKS } from "../types";

export const useCallAi = () => {
  const { chatCompletion, prepareAiMessages } = useAiRequest();
  const ipcStore = useIpcStore();
  const { resolveText } = useCallApi();

  async function aiRequest(taskName: string, messages: string | ChatMessage[]) {
    const result = await chatCompletion(
      ipcStore.params!.userConfig,
      taskName,
      messages
    );

    if (result.error) {
      miniToastr.error(result.error, "Api call error " + result.status);
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
      miniToastr.error("Текст не выбран");
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
      miniToastr.error("Текст не выбран");
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
      miniToastr.error("Текст не выбран");
      return;
    }

    return await aiRequest(
      AI_TASKS.CORRECTION,
      prepareAiMessages(ipcStore.params!.userConfig, AI_TASKS.CORRECTION, text)
    );
  };

  const translateText = async (toLangNum: number, text?: string) => {
    if (!text?.trim()) {
      miniToastr.error("Текст не выбран");
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

  const deepEdit = async (presetNum: number, text?: string) => {
    if (!text?.trim()) {
      miniToastr.error("Текст не выбран");
      return;
    }

    return await aiRequest(
      AI_TASKS.DEEP_EDIT,
      prepareAiMessages(
        ipcStore.params!.userConfig,
        AI_TASKS.DEEP_EDIT,
        text,
        ipcStore.params!.userConfig.aiRules[AI_TASKS.DEEP_EDIT][presetNum].context
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
    deepEdit,
  };
};

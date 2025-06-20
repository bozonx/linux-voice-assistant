// @ts-ignore
import miniToastr from "mini-toastr";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useOverlayStore } from "../stores/overlay";
import { useVoiceRecognitionStore } from "../stores/voiceRecognition";
import { useCallApi } from "./useCallApi";
import { useAiRequest } from "../../../common/useAiRequest";
import { ChatMessage } from "../../../electron/types/types";

export const useCallAi = () => {
  const { chatCompletion } = useAiRequest();
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();
  const overlayStore = useOverlayStore();
  const voiceRecognitionStore = useVoiceRecognitionStore();
  const { typeIntoWindowAndClose } = useCallApi();

  async function aiRequest(
    modelUsage: string,
    developerInstructions: string,
    task: string,
    userInput: string | ChatMessage[]
  ) {
    const result = await chatCompletion(
      ipcStore.data!.userConfig,
      modelUsage,
      developerInstructions,
      task,
      userInput
    );

    if (result.error) {
      miniToastr.error(result.error, "Api call error " + result.status);
      console.error(result.status + " " + result.statusText, result.error);

      return "";
    }

    return result.content;
  }

  const voiceRecognition = () => {
    // TODO: remake
    voiceRecognitionStore.startRecognizing();
  };

  const editMode = async (transformCb: (value: string) => Promise<string>) => {
    let value = mainInputStore.value;

    if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
    }

    if (!value.trim()) return;

    overlayStore.startAskingAi();

    value = await transformCb(value);

    mainInputStore.selectedText
      ? mainInputStore.replaceSelection(value)
      : mainInputStore.setValue(value);

    overlayStore.hideOverlay();
  };

  const insertMode = async (
    transformCb: (value: string) => Promise<string>,
    text?: string
  ) => {
    let value;

    if (text) {
      value = text;
    } else if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
    } else {
      value = mainInputStore.value;
    }

    if (!value.trim()) return;

    overlayStore.startAskingAi();

    await typeIntoWindowAndClose(await transformCb(value));

    overlayStore.hideOverlay();
  };

  const dealToCalendar = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("dealToCalendar");

    // TODO: do it
  };

  const sendChatMessage = async (
    message: string,
    prevMessages: ChatMessage[]
  ) => {
    if (!message.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "askAI",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiTasks.askAiShort,
      [...prevMessages, { role: "user", content: message }]
    );

    overlayStore.hideOverlay();

    return result;
  };

  return {
    voiceRecognition,
    dealToCalendar,
    sendChatMessage,

    correctAndInsert: (text?: string) =>
      insertMode(
        (value) =>
          aiRequest(
            "correction",
            ipcStore.data!.appConfig.aiInstructions.clearResult,
            ipcStore.data!.userConfig.aiTasks.correction,
            value
          ),
        text
      ),

    correctAndEdit: () =>
      editMode((value) =>
        aiRequest(
          "correction",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiTasks.correction,
          value
        )
      ),

    editAndInsert: (presetNum: number, text?: string) =>
      insertMode(
        (value) =>
          aiRequest(
            "deepEdit",
            ipcStore.data!.appConfig.aiInstructions.clearResult,
            ipcStore.data!.userConfig.aiTasks.deepEdit[presetNum].context,
            value
          ),
        text
      ),

    editAndEdit: (presetNum: number) =>
      editMode((value) =>
        aiRequest(
          "deepEdit",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiTasks.deepEdit[presetNum].context,
          value
        )
      ),

    translateAndInsert: (toLangNum: number, text?: string) =>
      insertMode(
        (value) =>
          aiRequest(
            "translate",
            ipcStore.data!.appConfig.aiInstructions.clearResult,
            ipcStore.data!.userConfig.aiTasks.translate +
              " " +
              ipcStore.data!.userConfig.toTranslateLanguages[toLangNum],
            value
          ),
        text
      ),

    translateAndEdit: (to: string) =>
      editMode((value) =>
        aiRequest(
          "translate",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiTasks.translate + " " + to,
          value
        )
      ),
  };
};

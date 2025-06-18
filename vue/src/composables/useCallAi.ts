// @ts-ignore
import miniToastr from "mini-toastr";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useOverlayStore } from "../stores/overlay";
import { useVoiceRecognitionStore } from "../stores/voiceRecognition";
import { useCallApi } from "./useCallApi";
import { useAiRequest } from "../../../common/useAiRequest";

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
    userInput: string | string[]
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
    transformCb: (value: string) => Promise<string>
  ) => {
    let value = mainInputStore.value;

    if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
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

  const sendChatMessage = async (message: string) => {
    if (!message.trim()) return;

    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    if (!text.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "askAI",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiTasks.askAiShort,
      text
    );

    console.log("askAIShort result", result);

    // overlayStore.showAiResult(result);
    // TODO: do it
  };

  return {
    voiceRecognition,
    dealToCalendar,
    sendChatMessage,

    correctAndInsert: () =>
      insertMode((value) =>
        aiRequest(
          "correction",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiTasks.correction,
          value
        )
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

    editAndInsert: (presetNum: number) =>
      insertMode((value) =>
        aiRequest(
          "deepEdit",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiTasks.deepEdit[presetNum].context,
          value
        )
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

    translateAndInsert: (to: string) =>
      insertMode((value) =>
        aiRequest(
          "translate",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiTasks.translate + " " + to,
          value
        )
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

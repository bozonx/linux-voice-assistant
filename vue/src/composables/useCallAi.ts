// @ts-ignore
import miniToastr from "mini-toastr";
import { useIpcStore } from "src/stores/ipc";
import { useMainInputStore } from "src/stores/mainInput";
import { useOverlayStore } from "src/stores/overlay";
import { useVoiceRecognitionStore } from "src/stores/voiceRecognition";
import { useCallApi } from "./useCallApi";
import { useAiRequest } from "./useAiRequest";

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

    value = await transformCb(value);

    await typeIntoWindowAndClose(value);

    overlayStore.hideOverlay();
  };



  const askAIShort = async () => {
    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    if (!text.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "askAI",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiContexts.askAiShort,
      text
    );

    console.log("askAIShort result", result);

    overlayStore.showAiResult(result);
  };

  const askAItext = async () => {
    if (!mainInputStore.value.trim()) return;

    // TODO: do it
  };

  const dealToCalendar = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("dealToCalendar");

    // TODO: do it
  };

  return {
    voiceRecognition,
    askAIShort,
    askAItext,
    dealToCalendar,

    correctAndInsert: () =>
      insertMode(async (value) => {
        return await aiRequest(
          "correction",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiContexts.correction,
          value
        );
      }),

    correctAndEdit: () =>
      editMode(async (value) => {
        return await aiRequest(
          "correction",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiContexts.correction,
          value
        );
      }),

    editAndInsert: (presetNum: number) =>
      insertMode(async (value) => {
        return await aiRequest(
          "deepEdit",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiContexts.deepEdit[presetNum].context,
          value
        );
      }),

    editAndEdit: (presetNum: number) =>
      editMode(async (value) => {
        return await aiRequest(
          "deepEdit",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiContexts.deepEdit[presetNum].context,
          value
        );
      }),

    translateAndInsert: (to: string) =>
      insertMode(async (value) => {
        return await aiRequest(
          "fastTranslate",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiContexts.fastTranslate + " " + to,
          value
        );
      }),

    translateAndEdit: (to: string) =>
      editMode(async (value) => {
        return await aiRequest(
          "fastTranslate",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiContexts.fastTranslate + " " + to,
          value
        );
      }),
  };
};

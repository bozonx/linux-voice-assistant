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
    }

    return result.content;
  }

  const voiceRecognition = () => {
    // TODO: remake
    voiceRecognitionStore.startRecognizing();
  };

  const correctAndInsert = async () => {
    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    if (!text.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "correction",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiContexts.correction,
      text
    );

    await typeIntoWindowAndClose(result);
  };

  const correctAndEdit = async () => {
    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    if (!text.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "correction",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiContexts.correction,
      text
    );

    if (result) {
      if (mainInputStore.selectedText) {
        mainInputStore.replaceSelection(result);
      } else {
        mainInputStore.setValue(result);
      }
    }

    overlayStore.hideOverlay();
  };

  const editAndInsert = async (presetNum: number) => {
    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    if (!text.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "deepEdit",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiContexts.deepEdit[presetNum].context,
      text
    );

    await typeIntoWindowAndClose(result);
  };

  const editAndEdit = async (presetNum: number) => {
    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    if (!text.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "deepEdit",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiContexts.deepEdit[presetNum].context,
      text
    );

    if (result) {
      if (mainInputStore.selectedText) {
        mainInputStore.replaceSelection(result);
      } else {
        mainInputStore.setValue(result);
      }
    }

    overlayStore.hideOverlay();
  };

  const translateAndInsert = async (to: string) => {
    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    if (!text.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "fastTranslate",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiContexts.fastTranslate + " " + to,
      text
    );

    await typeIntoWindowAndClose(result);
  };

  const translateAndEdit = async (to: string) => {
    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    if (!text.trim()) return;

    overlayStore.startAskingAi();

    const result = await aiRequest(
      "fastTranslate",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiContexts.fastTranslate + " " + to,
      text
    );

    if (result) {
      if (mainInputStore.selectedText) {
        mainInputStore.replaceSelection(result);
      } else {
        mainInputStore.setValue(result);
      }
    }

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
    correctAndInsert,
    correctAndEdit,
    editAndInsert,
    editAndEdit,
    translateAndInsert,
    translateAndEdit,
    askAIShort,
    askAItext,
    dealToCalendar,
  };
};

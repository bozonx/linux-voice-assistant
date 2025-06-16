// @ts-ignore
import miniToastr from "mini-toastr";
import { useOverlayStore } from "../stores/overlay";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useCodeFormatter } from "./useCodeFormatter";
import { useTextTransform } from "./useTextTransform";
import { useVoiceRecognitionStore } from "../stores/voiceRecognition";
import { useAiRequest } from "./useAiRequest";

export const useCallApi = () => {
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();
  const overlayStore = useOverlayStore();
  const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();
  const voiceRecognitionStore = useVoiceRecognitionStore();
  const {
    capitalizeFirstLetter,
    toUppercase,
    toLowercase,
    toCamelCase,
    toPascalCase,
    toSnakeCase,
    toKebabCase,
    makeRusStress,
  } = useTextTransform();
  const { chatCompletion } = useAiRequest();

  async function doApiRequest(funcName: string, args: any[]) {
    const result = await ipcStore.callFunction(funcName, args);

    if (!result.success) {
      miniToastr.error(result.error, "Api call error");
      console.error(result.error);
    }

    return result;
  }

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

    if (typeof result === "object" && result.error) {
      miniToastr.error(result.error, "Api call error " + result.status);
      console.error(result.status + " " + result.statusText, result.error);
    }

    return result;
  }

  async function justInsertIntoWindow(text: string) {
    if (!text.trim()) return;

    await doApiRequest("typeIntoWindowAndClose", [
      text,
      ipcStore.data?.windowId,
    ]);
  }

  const insertIntoWindow = async () => {
    if (!mainInputStore.value.trim()) return;

    await justInsertIntoWindow(mainInputStore.value);
  };

  const fastNote = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("fastNoteInObsidian");
  };

  const addToKnowledgeBase = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("addToKnowledgeBase");
  };

  const formatMdAndInsert = async () => {
    if (!mainInputStore.value.trim()) return;

    const value = await formatMdAndStyle(mainInputStore.value);
    const result = await ipcStore.callFunction("typeIntoWindowAndClose", [
      value,
      ipcStore.data?.windowId,
    ]);

    if (!result.success) {
      console.error(result.error);
    }
  };

  const formatMdAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    if (mainInputStore.selectedText) {
      mainInputStore.replaceSelection(
        await formatMdAndStyle(mainInputStore.selectedText)
      );
    } else {
      mainInputStore.setValue(await formatMdAndStyle(mainInputStore.value));
    }
  };

  const formatCodeAndInsert = async () => {
    if (!mainInputStore.value.trim()) return;

    const value = await formatSomeCode(mainInputStore.value);
    const result = await ipcStore.callFunction("typeIntoWindowAndClose", [
      value,
      ipcStore.data?.windowId,
    ]);

    if (!result.success) {
      console.error(result.error);
    }
  };

  const formatCodeAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    if (mainInputStore.selectedText) {
      mainInputStore.replaceSelection(
        await formatSomeCode(mainInputStore.selectedText)
      );
    } else {
      mainInputStore.setValue(await formatSomeCode(mainInputStore.value));
    }
  };

  const rusStressAndInsert = async () => {
    if (!mainInputStore.value.trim()) return;

    const value = makeRusStress(mainInputStore.value);
    const result = await ipcStore.callFunction("typeIntoWindowAndClose", [
      value,
      ipcStore.data?.windowId,
    ]);

    if (!result.success) {
      console.error(result.error);
    }
  };

  const rusStressAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    if (mainInputStore.selectedText) {
      mainInputStore.replaceSelection(
        makeRusStress(mainInputStore.selectedText)
      );
    } else {
      mainInputStore.setValue(makeRusStress(mainInputStore.value));
    }
  };

  const transformTextAndInsert = async (type: string) => {
    if (!mainInputStore.value.trim()) return;

    let transformedText = mainInputStore.value;

    switch (type) {
      case "capitalize":
        transformedText = capitalizeFirstLetter(mainInputStore.value);
        break;
      case "uppercase":
        transformedText = toUppercase(mainInputStore.value);
        break;
      case "lowercase":
        transformedText = toLowercase(mainInputStore.value);
        break;
      case "camelCase":
        transformedText = toCamelCase(mainInputStore.value);
        break;
      case "pascalCase":
        transformedText = toPascalCase(mainInputStore.value);
        break;
      case "snakeCase":
        transformedText = toSnakeCase(mainInputStore.value);
        break;
      case "kebabCase":
        transformedText = toKebabCase(mainInputStore.value);
        break;
    }

    const result = await ipcStore.callFunction("typeIntoWindowAndClose", [
      transformedText,
      ipcStore.data?.windowId,
    ]);

    if (!result.success) {
      console.error(result.error);
    }
  };

  const transformTextAndEdit = async (type: string) => {
    if (!mainInputStore.value.trim()) return;

    let text = mainInputStore.value;
    let result = "";

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    switch (type) {
      case "capitalize":
        result = capitalizeFirstLetter(text);
        break;
      case "uppercase":
        result = toUppercase(text);
        break;
      case "lowercase":
        result = toLowercase(text);
        break;
      case "camelCase":
        result = toCamelCase(text);
        break;
      case "pascalCase":
        result = toPascalCase(text);
        break;
      case "snakeCase":
        result = toSnakeCase(text);
        break;
      case "kebabCase":
        result = toKebabCase(text);
        break;
    }

    if (mainInputStore.selectedText) {
      mainInputStore.replaceSelection(result);
    } else {
      mainInputStore.setValue(result);
    }
  };

  const searchInInternet = async () => {
    if (!mainInputStore.value.trim()) return;

    await doApiRequest("openInBrowserAndClose", [mainInputStore.value]);
  };

  const intoClipboardAndClose = async () => {
    if (!mainInputStore.value.trim()) return;
  };

  const askAIlong = async () => {
    if (!mainInputStore.value.trim()) return;

    // TODO: open in browser
  };

  ////////////////////////////////////////
  /////////////// AI TASKS ///////////////

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

    await justInsertIntoWindow(result);
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

    await justInsertIntoWindow(result);
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

    await justInsertIntoWindow(result);
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
    insertIntoWindow,
    fastNote,
    rusStressAndInsert,
    rusStressAndEdit,
    formatMdAndInsert,
    formatMdAndEdit,
    transformTextAndInsert,
    transformTextAndEdit,
    formatCodeAndInsert,
    formatCodeAndEdit,
    searchInInternet,
    addToKnowledgeBase,
    intoClipboardAndClose,
    askAIlong,

    // AI TASKS
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

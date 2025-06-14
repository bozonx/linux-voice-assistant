import { useOverlayStore } from "../stores/overlay";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useCodeFormatter } from "./useCodeFormatter";
import { useTextTransform } from "./useTextTransform";
import { useVoiceRecognitionStore } from "../stores/voiceRecognition";
import miniToastr from "mini-toastr";

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

  async function handleRequest(funcName: string, args: any[]) {
    const result = await ipcStore.callFunction(funcName, args);

    if (!result.success) {
      miniToastr.error(result.error, "Api call error");
      console.error(result.error);
    }

    return result;
  }

  const insertIntoWindow = async () => {
    if (!mainInputStore.value.trim()) return;

    await handleRequest("typeIntoWindowAndClose", [
      mainInputStore.value,
      ipcStore.windowId,
    ]);
  };

  const translateAndInsert = async (from: string, to: string) => {
    if (!mainInputStore.value.trim()) return;

    overlayStore.startTranslating();
    const result = await ipcStore.callFunction("translateTextAndInsert", [
      mainInputStore.value,
      from,
      to,
      ipcStore.windowId,
    ]);
    if (!result.success) {
      console.error(result.error);
    }
    overlayStore.hideOverlay();
  };

  const translateAndEdit = async (from: string, to: string) => {
    if (!mainInputStore.value.trim()) return;

    let text = mainInputStore.value;

    if (mainInputStore.selectedText) {
      text = mainInputStore.selectedText;
    }

    overlayStore.startTranslating();

    const result = await ipcStore.callFunction("translateText", [
      text,
      from,
      to,
    ]);

    if (result.success) {
      if (mainInputStore.selectedText) {
        mainInputStore.replaceSelection(result.result as string);
      } else {
        mainInputStore.setValue(result.result as string);
      }
    } else {
      console.error(result.error);
    }

    overlayStore.hideOverlay();
  };

  const dealToCalendar = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("dealToCalendar");
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
      ipcStore.windowId,
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
      ipcStore.windowId,
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
      ipcStore.windowId,
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
      ipcStore.windowId,
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

    await handleRequest("openInBrowserAndClose", [mainInputStore.value]);
  };

  const askAIShort = async () => {
    if (!mainInputStore.value.trim()) return;
  };

  const askAIlong = async () => {
    if (!mainInputStore.value.trim()) return;
  };

  const askAItext = async () => {
    if (!mainInputStore.value.trim()) return;
  };

  const voiceRecognition = () => {
    voiceRecognitionStore.startRecognizing();
  };

  const correctAndInsert = async () => {
    // if (!mainInputStore.value.trim()) return;
    // overlayStore.startCorrecting();
    // const result = await handleRequest("responseCreate", [
    //   "deepseek/deepseek-chat-v3-0324:free",
    //   "Correct the text",
    //   mainInputStore.value,
    // ]);
    // if (result.success) {
    //   mainInputStore.setValue(result.result as string);
    //   console.log(111, result.result);
    // }
    // overlayStore.hideOverlay();
  };

  const correctAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    overlayStore.startCorrecting();

    const result = await handleRequest("chatCompletion", [
      "deepseek/deepseek-chat-v3-0324:free",
      "Correct the text and restore punctuation",
      mainInputStore.value,
    ]);

    if (result.success) {
      mainInputStore.setValue(result.result.choices[0].message.content);
      console.log(111, result.result);
    }

    overlayStore.hideOverlay();
  };

  const editAndInsert = async () => {
    if (!mainInputStore.value.trim()) return;

    overlayStore.startEditing();
  };

  const editAndEdit = async () => {
    if (!mainInputStore.value.trim()) return;

    overlayStore.startEditing();
  };

  const intoClipboardAndClose = async () => {
    if (!mainInputStore.value.trim()) return;
  };

  return {
    insertIntoWindow,
    translateAndInsert,
    translateAndEdit,
    dealToCalendar,
    fastNote,
    correctAndInsert,
    correctAndEdit,
    editAndInsert,
    editAndEdit,
    rusStressAndInsert,
    rusStressAndEdit,
    formatMdAndInsert,
    formatMdAndEdit,
    transformTextAndInsert,
    transformTextAndEdit,
    formatCodeAndInsert,
    formatCodeAndEdit,
    voiceRecognition,
    searchInInternet,
    askAIShort,
    askAIlong,
    addToKnowledgeBase,
    intoClipboardAndClose,
    askAItext,
  };
};

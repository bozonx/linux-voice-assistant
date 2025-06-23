import { useRouteParams } from "../stores/routeParams";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useRouter } from "vue-router";
import miniToastr from "mini-toastr";

export const useCallApi = () => {
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();

  const router = useRouter();
  const routeParamsStore = useRouteParams();

  async function closeWindow() {
    await ipcStore.callFunction("closeMainWindow", []);
  }

  async function typeIntoWindowAndClose(text: string) {
    if (!text?.trim()) return;

    await ipcStore.callFunction("typeIntoWindowAndClose", [
      text,
      ipcStore.data?.windowId,
    ]);
  }

  function resolveText(text?: string): string {
    let value;

    if (text) {
      value = text;
    } else if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
    } else {
      value = mainInputStore.value;
    }

    return value || "";
  }

  const fastNote = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) {
      miniToastr.error("Текст не выбран");
      return;
    }

    console.log("fastNoteInObsidian");

    // TODO: do it
  };

  const addToKnowledgeBase = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) {
      miniToastr.error("Текст не выбран");
      return;
    }

    console.log("addToKnowledgeBase");

    // TODO: do it
  };

  const searchInInternet = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) {
      miniToastr.error("Текст не выбран");
      return;
    }

    await ipcStore.callFunction("openInBrowserAndClose", [value]);
  };

  const intoClipboardAndClose = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) {
      miniToastr.error("Текст не выбран");
      return;
    }

    await ipcStore.callFunction("putIntoClipboardAndClose", [value]);
  };

  const insertIntoWindow = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) {
      miniToastr.error("Текст не выбран");
      return;
    }

    await typeIntoWindowAndClose(value);
  };

  const askAIlong = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) {
      miniToastr.error("Текст не выбран");
      return;
    }

    // TODO: open in browser
  };

  const askAIShort = async (text?: string) => {
    let value = resolveText(text);

    if (value?.trim()) {
      routeParamsStore.setParams({ message: value });
    }

    router.push("/chat");
  };

  const askAItext = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) {
      miniToastr.error("Текст не выбран");
      return;
    }

    routeParamsStore.setParams({ context: value });
    router.push("/chat");
  };

  return {
    resolveText,
    closeWindow,
    typeIntoWindowAndClose,
    fastNote,
    searchInInternet,
    addToKnowledgeBase,
    intoClipboardAndClose,
    insertIntoWindow,
    askAIlong,
    askAIShort,
    askAItext,
  };
};

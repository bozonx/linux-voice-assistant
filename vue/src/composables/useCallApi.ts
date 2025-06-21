import { useRouteParams } from "src/stores/routeParams";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useRouter } from "vue-router";

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

  function resolveText(text?: string) {
    if (text) {
      return text;
    } else if (mainInputStore.selectedText) {
      return mainInputStore.selectedText;
    } else {
      return mainInputStore.value;
    }
  }

  // const insertIntoWindow = async (text: string) => {
  //   if (!text.trim()) return;

  //   await typeIntoWindowAndClose(text);
  // };

  const fastNote = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) return;

    console.log("fastNoteInObsidian");

    // TODO: do it
  };

  const addToKnowledgeBase = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) return;

    console.log("addToKnowledgeBase");

    // TODO: do it
  };

  const dealToCalendar = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) return;

    console.log("dealToCalendar");

    // TODO: do it
  };

  const searchInInternet = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) return;

    await ipcStore.callFunction("openInBrowserAndClose", [value]);
  };

  const intoClipboardAndClose = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) return;

    // TODO: do it
  };

  const askAIlong = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) return;

    // TODO: open in browser
  };

  const askAIShort = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) return;

    routeParamsStore.setParams({ message: value });
    router.push("/chat");
  };

  const askAItext = async (text?: string) => {
    let value = resolveText(text);

    if (!value?.trim()) return;

    routeParamsStore.setParams({ context: value });
    router.push("/chat");
  };

  return {
    closeWindow,
    typeIntoWindowAndClose,
    fastNote,
    searchInInternet,
    addToKnowledgeBase,
    intoClipboardAndClose,
    askAIlong,
    askAIShort,
    askAItext,
    dealToCalendar,
  };
};

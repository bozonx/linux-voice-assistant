import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useCodeFormatter } from "./useCodeFormatter";
import { useTextTransform } from "./useTextTransform";
import { useRouter } from "vue-router";

export const useCallApi = () => {
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();
  const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();
  const { makeRusStress, doCaseTransform } = useTextTransform();
  const router = useRouter();

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

  async function insertMode(transformCb: (value: string) => Promise<string>) {
    let value = mainInputStore.value;

    if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
    }

    if (!value.trim()) return;

    await typeIntoWindowAndClose(await transformCb(value));
  }

  // const insertIntoWindow = async (text: string) => {
  //   if (!text.trim()) return;

  //   await typeIntoWindowAndClose(text);
  // };

  const fastNote = async (text?: string) => {
    if (!text?.trim()) return;

    console.log("fastNoteInObsidian");

    // TODO: do it
  };

  const addToKnowledgeBase = async (text?: string) => {
    if (!text?.trim()) return;

    console.log("addToKnowledgeBase");

    // TODO: do it
  };

  const dealToCalendar = async (text?: string) => {
    if (!text?.trim()) return;

    console.log("dealToCalendar");

    // TODO: do it
  };

  const searchInInternet = async (text?: string) => {
    let value = text;

    if (!value) {
      if (mainInputStore.selectedText) {
        value = mainInputStore.selectedText;
      } else {
        value = mainInputStore.value;
      }

      if (!value.trim()) return;
    }

    await ipcStore.callFunction("openInBrowserAndClose", [value]);
  };

  const intoClipboardAndClose = async (text?: string) => {
    if (!text?.trim()) return;

    // TODO: do it
  };

  const askAIlong = async (text?: string) => {
    if (!text?.trim()) return;

    // TODO: open in browser
  };

  const askAIShort = async (text: string) => {
    if (!text.trim()) return;

    router.push({
      path: "/chat",
      query: { text: text },
    });
  };

  const askAItext = async (text?: string) => {
    if (!text?.trim()) return;

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
    formatMdAndInsert: () => insertMode((value) => formatMdAndStyle(value)),
    formatCodeAndInsert: () => insertMode((value) => formatSomeCode(value)),
    rusStressAndInsert: () =>
      insertMode((value) => Promise.resolve(makeRusStress(value))),
    transformTextAndInsert: (type: string) =>
      insertMode((value) => Promise.resolve(doCaseTransform(value, type))),
  };
};

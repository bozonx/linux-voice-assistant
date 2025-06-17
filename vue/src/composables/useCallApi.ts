import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useCodeFormatter } from "./useCodeFormatter";
import { useTextTransform } from "./useTextTransform";

export const useCallApi = () => {
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();
  const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();
  const { makeRusStress, doCaseTransform } = useTextTransform();

  async function typeIntoWindowAndClose(text: string) {
    if (!text.trim()) return;

    await ipcStore.callFunction("typeIntoWindowAndClose", [
      text,
      ipcStore.data?.windowId,
    ]);
  }

  async function editMode(transformCb: (value: string) => Promise<string>) {
    if (!mainInputStore.value.trim()) return;

    let value = mainInputStore.value;

    if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
    }

    value = await transformCb(value);

    mainInputStore.selectedText
      ? mainInputStore.replaceSelection(value)
      : mainInputStore.setValue(value);
  }

  async function insertMode(transformCb: (value: string) => Promise<string>) {
    if (!mainInputStore.value.trim()) return;

    let value = mainInputStore.value;

    if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
    }

    value = await transformCb(value);

    await typeIntoWindowAndClose(value);
  }

  const insertIntoWindow = async () => {
    if (!mainInputStore.value.trim()) return;

    await typeIntoWindowAndClose(mainInputStore.value);
  };

  const fastNote = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("fastNoteInObsidian");

    // TODO: do it
  };

  const addToKnowledgeBase = async () => {
    if (!mainInputStore.value.trim()) return;

    console.log("addToKnowledgeBase");

    // TODO: do it
  };

  const searchInInternet = async () => {
    if (!mainInputStore.value.trim()) return;

    await ipcStore.callFunction("openInBrowserAndClose", [
      mainInputStore.value,
    ]);
  };

  const intoClipboardAndClose = async () => {
    if (!mainInputStore.value.trim()) return;

    // TODO: do it
  };

  const askAIlong = async () => {
    if (!mainInputStore.value.trim()) return;

    // TODO: open in browser
  };

  return {
    typeIntoWindowAndClose,
    insertIntoWindow,
    fastNote,
    searchInInternet,
    addToKnowledgeBase,
    intoClipboardAndClose,
    askAIlong,

    formatMdAndInsert: () => insertMode((value) => formatMdAndStyle(value)),
    formatMdAndEdit: () => editMode((value) => formatMdAndStyle(value)),
    formatCodeAndInsert: () => insertMode((value) => formatSomeCode(value)),
    formatCodeAndEdit: () => editMode((value) => formatSomeCode(value)),
    rusStressAndInsert: () =>
      insertMode((value) => Promise.resolve(makeRusStress(value))),
    rusStressAndEdit: () =>
      editMode((value) => Promise.resolve(makeRusStress(value))),
    transformTextAndInsert: (type: string) =>
      insertMode((value) => Promise.resolve(doCaseTransform(value, type))),
    transformTextAndEdit: (type: string) =>
      editMode((value) => Promise.resolve(doCaseTransform(value, type))),
  };
};

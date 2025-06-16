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

  const formatMdAndInsert = async () => {
    await insertMode((value) => formatMdAndStyle(value));
  };

  const formatMdAndEdit = async () => {
    await editMode((value) => formatMdAndStyle(value));
  };

  const formatCodeAndInsert = async () => {
    await insertMode((value) => formatSomeCode(value));
  };

  const formatCodeAndEdit = async () => {
    await editMode((value) => formatSomeCode(value));
  };

  const rusStressAndInsert = async () => {
    await insertMode((value) => Promise.resolve(makeRusStress(value)));
  };

  const rusStressAndEdit = async () => {
    await editMode((value) => Promise.resolve(makeRusStress(value)));
  };

  const transformTextAndInsert = async (type: string) => {
    await insertMode((value) => Promise.resolve(doCaseTransform(value, type)));
  };

  const transformTextAndEdit = async (type: string) => {
    await editMode((value) => Promise.resolve(doCaseTransform(value, type)));
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
  };
};

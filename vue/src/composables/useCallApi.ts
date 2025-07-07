import { useRouteParams } from "../stores/routeParams";
import { useIpcStore } from "../stores/ipc";
import { useMainInputStore } from "../stores/mainInput";
import { useRouter } from "vue-router";
import useToast from "./useToast";

export const useCallApi = () => {
  const ipcStore = useIpcStore();
  const mainInputStore = useMainInputStore();
  const { toast } = useToast();
  const router = useRouter();
  const routeParamsStore = useRouteParams();

  async function closeWindow() {
    await ipcStore.callFunction("closeMainWindow", []);
  }

  async function typeIntoWindowAndClose(text: string) {
    if (!text?.trim()) return;

    await ipcStore.callFunction("typeIntoWindowAndClose", [text]);
  }

  function resolveText(text?: string): string {
    let value = "";

    if (text) {
      value = text;
    } else if (mainInputStore.selectedText) {
      value = mainInputStore.selectedText;
    } else {
      value = mainInputStore.value;
    }

    return value || "";
  }

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
      toast("Текст не выбран", "error");
      return;
    }

    routeParamsStore.setParams({ context: value });
    router.push("/chat");
  };

  return {
    resolveText,
    closeWindow,
    typeIntoWindowAndClose,
    askAIShort,
    askAItext,
  };
};

// @ts-ignore
import miniToastr from "mini-toastr";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { IpcResult } from "../types";
import type { InitParams } from "../types";
import { UserConfig } from "../../../electron/types/UserConfig";

export const useIpcStore = defineStore("ipc", () => {
  const data = ref<InitParams>();

  const callFunction = async (
    functionName: string,
    args: any[] = []
  ): Promise<IpcResult> => {
    try {
      const result = await window.electron.ipcRenderer.invoke(
        "call-function",
        functionName,
        args
      );
      return result;
    } catch (error) {
      miniToastr.error(String(error), "Api call error");
      console.error("Error calling function:", error);

      return { success: false, error: String(error) };
    }
  };

  const setInitialData = (incomingData: InitParams) => {
    data.value = incomingData;
  };

  const saveUserConfig = (userConfig: UserConfig) => {
    data.value!.userConfig = userConfig;
  };

  return {
    data,
    callFunction,
    setInitialData,
    saveUserConfig,
  };
});

// @ts-ignore
import miniToastr from "mini-toastr";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { IpcResult } from "../types";
import type { InitParams } from "../types";
import { UserConfig } from "../../../electron/types/UserConfig";

export const useIpcStore = defineStore("ipc", () => {
  const params = ref<InitParams>();

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

  const setParams = (incomingData: InitParams) => {
    params.value = { ...params.value, ...incomingData };
  };

  const saveUserConfig = async (userConfig: UserConfig) => {
    await callFunction("saveUserConfig", [JSON.stringify(userConfig)]);
    params.value!.userConfig = userConfig;
  };

  return {
    params,
    callFunction,
    setParams,
    saveUserConfig,
  };
});

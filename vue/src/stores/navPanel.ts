import { defineStore } from "pinia";

export const DEFAULT_PARAMS = {
  escBtnVisible: true,
  escBtnText: "Назад",
  escBtnAction: undefined as (() => void) | undefined,
  rightPanelVisible: true,
  toEditorBtnDisabled: false,
  historyBtnDisabled: false,
  settingsBtnDisabled: false,
};

export const useNavPanelStore = defineStore("navPanel", () => {
  const params = ref(DEFAULT_PARAMS);

  function upateNavParams(newParams: Partial<typeof DEFAULT_PARAMS>) {
    params.value = { ...params.value, ...newParams };
  }

  function resetNavParams(newParams: Partial<typeof DEFAULT_PARAMS> = {}) {
    params.value = { ...DEFAULT_PARAMS, ...newParams };
  }

  return {
    params,
    upateNavParams,
    resetNavParams,
  };
});

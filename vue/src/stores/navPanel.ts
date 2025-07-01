import { defineStore } from "pinia";

export const useNavPanelStore = defineStore("navPanel", () => {
  const DEFAULT_PARAMS = {
    showEscBtn: false,
    escBtnText: "назад (Esc)",
    escBtnAction: () => {},
  };
  const params = ref(DEFAULT_PARAMS);

  function setParams(newParams: Partial<typeof DEFAULT_PARAMS>) {
    params.value = { ...params.value, ...newParams };
  }

  function resetParams() {
    params.value = DEFAULT_PARAMS;
  }

  return {
    params,
    setParams,
    resetParams,
  };
});

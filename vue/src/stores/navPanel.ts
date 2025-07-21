import { defineStore } from "pinia";
import { useMenuModalsStore } from "./menuModals";

export const DEFAULT_PARAMS = {
  escBtnText: "Меню",
  escBtnAction: undefined as (() => void) | undefined,
  rightPanelVisible: true,
};

export const useNavPanelStore = defineStore("navPanel", () => {
  const params = ref(DEFAULT_PARAMS);
  const menuModalsStore = useMenuModalsStore();

  function upateNavParams(newParams: Partial<typeof DEFAULT_PARAMS>) {
    params.value = { ...params.value, ...newParams };
  }

  function resetNavParams(newParams: Partial<typeof DEFAULT_PARAMS> = {}) {
    params.value = { ...DEFAULT_PARAMS, ...newParams };
  }

  function handleKeyUp(event: KeyboardEvent) {
    if (event.code !== "Escape") return;

    if (menuModalsStore.anyModalOpen) {
      menuModalsStore.back();
    } else {
      params.value.escBtnAction?.();
    }
  }

  return {
    params,
    upateNavParams,
    resetNavParams,
    handleKeyUp,
  };
});

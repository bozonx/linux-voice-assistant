import { defineStore } from "pinia";
import { MenuModals, useMenuModalsStore } from "./menuModals";

export const DEFAULT_PARAMS = {
  escBtnText: "",
  escBtnAction: undefined as (() => void) | undefined,
};

export const useNavPanelStore = defineStore("navPanel", () => {
  const menuModalsStore = useMenuModalsStore();
  const params = ref(DEFAULT_PARAMS);

  function setParams(newParams: Partial<typeof DEFAULT_PARAMS>) {
    params.value = { ...params.value, ...newParams };
  }

  function resetParams() {
    params.value = DEFAULT_PARAMS;
  }

  // watch(
  //   () => menuModalsStore.currentModal,
  //   (newModal) => {
  //     if (newModal !== MenuModals.NONE) {
  //       resetParams();
  //     }
  //   }
  // );

  const escBtnVisible = computed(() => {
    return menuModalsStore.anyModalOpen || params.value.escBtnText;
  });

  const escBtnText = computed(() => {
    if (menuModalsStore.currentModal !== MenuModals.NONE) {
      return "Назад";
    }

    return params.value.escBtnText;
  });

  const escBtnAction = computed(() => {
    if (menuModalsStore.anyModalOpen) {
      return menuModalsStore.back;
    }

    return params.value.escBtnAction;
  });

  return {
    params,
    escBtnVisible,
    escBtnText,
    escBtnAction,
    setParams,
    resetParams,
  };
});

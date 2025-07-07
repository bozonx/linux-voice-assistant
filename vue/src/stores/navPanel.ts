import { defineStore } from "pinia";

export const DEFAULT_PARAMS = {
  escBtnVisible: true,
  escBtnText: "Назад",
  escBtnAction: undefined as (() => void) | undefined,
  toEditorBtnVisible: true,
  toEditorText: "",
};

export const useNavPanelStore = defineStore("navPanel", () => {
  const params = ref(DEFAULT_PARAMS);

  function upateNavParams(newParams: Partial<typeof DEFAULT_PARAMS>) {
    params.value = { ...params.value, ...newParams };
  }

  function resetNavParams(newParams: Partial<typeof DEFAULT_PARAMS> = {}) {
    params.value = { ...DEFAULT_PARAMS, ...newParams };
  }

  // const escBtnVisible = computed(() => {
  //   return menuModalsStore.anyModalOpen || params.value.escBtnVisible;
  // });

  // const escBtnText = computed(() => {
  //   if (menuModalsStore.currentModal !== MenuModals.NONE) {
  //     return DEFAULT_PARAMS.escBtnText;
  //   }

  //   return params.value.escBtnText;
  // });

  // const escBtnAction = computed(() => {
  //   if (menuModalsStore.anyModalOpen) {
  //     return menuModalsStore.back;
  //   }

  //   return params.value.escBtnAction;
  // });

  return {
    params,
    upateNavParams,
    resetNavParams,
  };
});

import { defineStore } from "pinia";
import { ref } from "vue";

export enum MenuModals {
  INSERT = "insert",
  EDIT_PRESETS = "edit-presets",
  PENDING = "pending",
  DIFF = "diff",
  VOICE_RECOGNITION = "voice-recognition",
  TRANSLATE = "translate",
  NONE = "none",
}

export const useMenuModalsStore = defineStore("menuModals", () => {
  const currentModal = ref(MenuModals.NONE);
  const currentModalParams = ref<Record<string, any>>({});

  const showModal = (modal: MenuModals, params: Record<string, any>) => {
    currentModal.value = modal;
    currentModalParams.value = params;
  };

  const hideModal = () => {
    currentModal.value = MenuModals.NONE;
    currentModalParams.value = {};
  };

  return {
    currentModal,
    currentModalParams,
    showModal,
    hideModal,
  };
});

import { defineStore } from "pinia";
import { ref } from "vue";

export enum MenuModals {
  INSERT = "insert",
  EDIT_PRESETS = "edit-presets",
  CORRECTION = "correction",
  PENDING = "pending",
  DIFF = "diff",
  VOICE_RECOGNITION = "voice-recognition",
  TRANSLATE = "translate",
  NONE = "none",
}

export const useMenuModalsStore = defineStore("menuModals", () => {
  const currentModal = ref(MenuModals.NONE);
  const currentModalParams = ref<Record<string, any>>({});
  const currentBreadcrumbs = ref<string[]>([]);

  const nextModal = (modal: MenuModals, params: Record<string, any>) => {
    currentBreadcrumbs.value.push(modal);

    currentModal.value = modal;
    currentModalParams.value = params;
  };

  const back = () => {
    currentBreadcrumbs.value.pop();

    if (currentBreadcrumbs.value.length > 0) {
      currentModal.value = currentBreadcrumbs.value[
        currentBreadcrumbs.value.length - 1
      ] as MenuModals;
    } else {
      closeAll();
    }
  };

  const closeAll = () => {
    currentModal.value = MenuModals.NONE;
    currentModalParams.value = {};
    currentBreadcrumbs.value = [];
  };

  return {
    currentModal,
    currentModalParams,
    currentBreadcrumbs,
    nextModal,
    back,
    closeAll,
  };
});

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
  const currentBreadcrumbs = ref<string[]>([]);

  const showModal = (modal: MenuModals, params: Record<string, any>) => {
    pushBreadcrumb(currentModal.value);

    currentModal.value = modal;
    currentModalParams.value = params;
  };

  const hideModal = () => {
    popBreadcrumb();

    currentModal.value = MenuModals.NONE;
    currentModalParams.value = {};
  };

  const pushBreadcrumb = (breadcrumb: string) => {
    currentBreadcrumbs.value.push(breadcrumb);
  };

  const popBreadcrumb = () => {
    currentBreadcrumbs.value.pop();
  };

  const clearBreadcrumbs = () => {
    currentBreadcrumbs.value = [];
  };

  return {
    currentModal,
    currentModalParams,
    currentBreadcrumbs,
    showModal,
    hideModal,
    pushBreadcrumb,
    popBreadcrumb,
    clearBreadcrumbs,
  };
});

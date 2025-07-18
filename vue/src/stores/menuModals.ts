import { defineStore } from "pinia";
import { ref } from "vue";
import { useHelpers } from "../composables/useHelpers";

export enum MenuModals {
  INSERT = "insert",
  AI_TASK = "ai-task",
  CORRECTION = "correction",
  DIFF = "diff",
  VOICE_RECOGNITION = "voice-recognition",
  TRANSLATE = "translate",
  PREVIEW = "preview",
  NONE = "none",
}

export const useMenuModalsStore = defineStore("menuModals", () => {
  const pendingModal = ref<Record<string, any> | null>(null);
  const currentModal = ref(MenuModals.NONE);
  const currentModalParams = ref<Record<string, any>>({});
  const currentBreadcrumbs = ref<string[]>([]);
  const { resetGlobalFocus } = useHelpers();

  const nextModal = (modal: MenuModals, params: Record<string, any>) => {
    resetGlobalFocus();
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

  const setPendingModal = (params: Record<string, any>) => {
    pendingModal.value = params;
  };

  const clearPendingModal = () => {
    pendingModal.value = null;
  };

  const anyModalOpen = computed(() => {
    return currentModal.value !== MenuModals.NONE;
  });

  return {
    pendingModal,
    currentModal,
    currentModalParams,
    currentBreadcrumbs,
    nextModal,
    back,
    closeAll,
    setPendingModal,
    clearPendingModal,
    anyModalOpen,
  };
});

import { useActionMenuStore } from "../stores/actionMenu";
import { useEditMenuStore } from "../stores/edditMenu";
import { useMainInputStore } from "../stores/mainInput";
import { useMenuModalsStore } from "../stores/menuModals";
import { useNavPanelStore } from "../stores/navPanel";
import { useRouteParams } from "../stores/routeParams";
import { PluginIndex } from "../types";
import { PluginContext } from "../types/PluginContext";

export default function usePluginContext() {
  const actionMenuStore = useActionMenuStore();
  const editMenuStore = useEditMenuStore();
  const mainInputStore = useMainInputStore();
  const menuModalsStore = useMenuModalsStore();
  const navPanelStore = useNavPanelStore();
  const routeParamsStore = useRouteParams();

  const ctx: PluginContext = {
    registerActionsItems: (actions) => {
      actionMenuStore.registerActionsItems(actions);
    },
    registerEditItems: (edit) => {
      editMenuStore.registerEditItems(edit);
    },
    setMainInputValue: (value) => {
      mainInputStore.setValue(value);
    },
    setMainInputValueAtCursor: (value) => {
      mainInputStore.setValueAtCursor(value);
    },
    setMainInputFocus: () => {
      mainInputStore.focus();
    },
    nextModal: (modal, params) => {
      menuModalsStore.nextModal(modal, params);
    },
    backModal: () => {
      menuModalsStore.back();
    },
    closeAllModals: () => {
      menuModalsStore.closeAll();
    },
    setPendingModal: (params) => {
      menuModalsStore.setPendingModal(params);
    },
    clearPendingModal: () => {
      menuModalsStore.clearPendingModal();
    },
    navPanelSetParams: (params) => {
      navPanelStore.setParams(params);
    },
    toEditor: (text) => {
      routeParamsStore.toEditor(text);
    },
  };

  function use(plugin: PluginIndex) {
    return plugin(ctx);
  }

  return {
    ctx,
    use,
  };
}

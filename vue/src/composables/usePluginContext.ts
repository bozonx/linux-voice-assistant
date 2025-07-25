import { useActionMenuStore } from "../stores/actionMenu";
import { useEditMenuStore } from "../stores/edditMenu";
import { useMainInputStore } from "../stores/mainInput";
import { useMenuModalsStore } from "../stores/menuModals";
import { useNavPanelStore } from "../stores/navPanel";
import { useRouteParams } from "../stores/routeParams";
import { PluginIndex } from "../types";
import { PluginConfig, PluginContext } from "../types/PluginContext";
import { useIpcStore } from "../stores/ipc";
import { usePluginsStore } from "../stores/plugins";
import useToast from "./useToast";

export default function usePluginContext() {
  const actionMenuStore = useActionMenuStore();
  const editMenuStore = useEditMenuStore();
  const mainInputStore = useMainInputStore();
  const menuModalsStore = useMenuModalsStore();
  const navPanelStore = useNavPanelStore();
  const routeParamsStore = useRouteParams();
  const ipcStore = useIpcStore();
  const pluginsStore = usePluginsStore();
  const { toast } = useToast();

  const ctx: PluginContext = {
    registerActionsItems: (actions) => {
      actionMenuStore.registerActionsItems(actions);
    },
    registerEditItems: (edit) => {
      editMenuStore.registerEditItems(edit);
    },
    getMainInputValue: () => {
      return mainInputStore.value;
    },
    getMainInputSelectedText: () => {
      return mainInputStore.selectedText;
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
    resetNavParams: (params) => {
      navPanelStore.resetNavParams(params);
    },
    updateNavParams: (params) => {
      navPanelStore.upateNavParams(params);
    },
    toEditor: (text) => {
      routeParamsStore.toEditor(text);
    },
    toast: (message, type = "info", timeout = 10000) => {
      toast(message, type, timeout);
    },
    callApiFunction: (method, params) => {
      return ipcStore.callFunction(method, params);
    },
    registerPluginConfig: (config: PluginConfig) => {
      pluginsStore.registerPluginConfig(config);
    },
    getUserConfig: () => {
      return ipcStore.params!.userConfig;
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

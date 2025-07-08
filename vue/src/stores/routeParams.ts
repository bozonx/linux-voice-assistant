import { defineStore } from "pinia";
import router from "../router";
import { useMenuModalsStore } from "./menuModals";

export const useRouteParams = defineStore("routeParams", () => {
  const params = ref<Record<string, any>>({});
  const menuModalsStore = useMenuModalsStore();

  function setParams(value: Record<string, any>) {
    params.value = value;
  }

  function toEditor(text?: string) {
    if (typeof text !== "undefined") params.value = { text };
    menuModalsStore.closeAll();
    router.push("/editor");
  }

  function isEditorPage() {
    return router.currentRoute.value.path === "/editor";
  }

  return {
    params,
    setParams,
    toEditor,
    isEditorPage,
  };
});

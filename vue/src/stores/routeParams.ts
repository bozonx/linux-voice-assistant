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
    params.value = { text };
    menuModalsStore.closeAll();
    router.push("/editor");
  }

  return {
    params,
    setParams,
    toEditor,
  };
});

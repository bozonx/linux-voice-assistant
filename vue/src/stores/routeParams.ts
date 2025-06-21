import { defineStore } from "pinia";

export const useRouteParams = defineStore("routeParams", () => {
  const params = ref<Record<string, string>>({});

  function setParams(value: Record<string, any>) {
    params.value = value;
  }

  return {
    params,
    setParams,
  };
});

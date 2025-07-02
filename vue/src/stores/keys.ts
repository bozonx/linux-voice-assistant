import { defineStore } from "pinia";

export const useKeysStore = defineStore("keys", () => {
  const keyupCode = ref<string | null>(null);

  const setKeyup = (event: KeyboardEvent) => {
    keyupCode.value = event.code;
  };

  return {
    keyupCode,
    setKeyup,
  };
});

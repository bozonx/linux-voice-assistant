import { defineStore } from "pinia";
import { ref } from "vue";

export const useKeysStore = defineStore("keys", () => {
  const keyDown = ref<string>("");
  const keyPress = ref<string>("");
  const keyUp = ref<string>("");

  const setKeyDown = (key: string) => {
    keyDown.value = key;
  };

  const setKeyPress = (key: string) => {
    keyPress.value = key;
  };

  const setKeyUp = (key: string) => {
    keyUp.value = key;
  };

  return {
    keyDown,
    setKeyDown,
    keyPress,
    setKeyPress,
    keyUp,
    setKeyUp,
  };
});

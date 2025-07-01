<template>
  <div>
    <h1>Translate Menu</h1>

    <div>
      <TextPreview :text="props.text" />
    </div>

    <div class="shortcuts-list" @keyup="handleShortCutKeyUp">
      <div v-for="(lang, index) in ipcStore.params?.userConfig.toTranslateLanguages" :key="lang">
        {{ PRESETS_KEYS[index] }} - <button @click="translate(index)">➡️ {{ lang }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { useCallAi } from '../../composables/useCallAi';
import miniToastr from "mini-toastr";
import { PRESETS_KEYS } from '../../types';
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';

const ipcStore = useIpcStore();
const appConfig = ipcStore.params!.appConfig;
const { translateText } = useCallAi();
const inFocusButton = ref<HTMLButtonElement>();
const translateResult = ref<string>("");
const menuModalsStore = useMenuModalsStore();

const props = defineProps<{
  text: string;
  showBackButton: boolean;
  onBack: () => void;
}>();

onMounted(() => {
  nextTick(() => {
    inFocusButton.value?.focus();
  });
});

const translate = async (toLangNum: number) => {
  const trimmedText = props.text.trim();
  
  if (!trimmedText) {
    miniToastr.warn('Нет текста для перевода');

    return;
  }

  if (trimmedText.length < appConfig.minCorrectionLength) {
    miniToastr.warn('Слишком короткий текст для перевода');

    return;
  }

  menuModalsStore.setPendingModal({
    ai: true,
  });
  
  const newText = await translateText(toLangNum, trimmedText);

  translateResult.value = newText;

  menuModalsStore.clearPendingModal();

  menuModalsStore.nextModal(MenuModals.PREVIEW, {
    text: newText,
    onBack: () => {
      menuModalsStore.back();
    },
  });
};


const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "KeyQ") {
    translate(0);
  }
  else if (event.code === "KeyW") {
    translate(1);
  }
  else if (event.code === "KeyE") {
    translate(2);
  }
  else if (event.code === "KeyR") {
    translate(3);
  }
  else if (event.code === "KeyT") {
    translate(4);
  }
  else if (event.code === "KeyA") {
    translate(5);
  }
  else if (event.code === "KeyS") {
    translate(6);
  }
  else if (event.code === "KeyD") {
    translate(7);
  }
  else if (event.code === "KeyF") {
    translate(8);
  }
  else if (event.code === "KeyG") {
    translate(9);
  }
  else if (event.code === "KeyZ") {
    translate(10);
  }
  else if (event.code === "KeyX") {
    translate(11);
  }
  else if (event.code === "KeyC") {
    translate(12);
  }
  else if (event.code === "KeyV") {
    translate(13);
  }
  else if (event.code === "KeyB") {
    translate(14);
  }
}
</script>
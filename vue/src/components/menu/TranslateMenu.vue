<template>
  <Overlay v-if="overlayMode === OverlayMode.IN_PROGRESS">
    <InProgressMessage :ai="true" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.TRANSLATE_PREVIEW">
    <PreviewMenu :text="translateResult" @close="overlayStore.hideOverlay" />
  </Overlay>

  <div>
    <h1>Translate Menu</h1>

    <div>
      <TextPreview :text="props.text" />
    </div>

    <div class="shortcuts-list" @keyup="handleShortCutKeyUp">
      <div>Esc - <button @click="back">назад</button></div>
      <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
      <div v-for="(lang, index) in ipcStore.params?.userConfig.toTranslateLanguages" :key="lang">
        {{ PRESETS_KEYS[index] }} - <button @click="translate(index)">➡️ {{ lang }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { useMainInputStore } from '../../stores/mainInput';
import { useOverlayStore } from '../../stores/mainOverlay';
import { useCallAi } from '../../composables/useCallAi';
import { useCallApi } from '../../composables/useCallApi';
import miniToastr from "mini-toastr";
import { PRESETS_KEYS } from '../../types';

enum OverlayMode {
  IN_PROGRESS = "in-progress",
  TRANSLATE_PREVIEW = "translate-preview",
  NONE = "none",
}

const ipcStore = useIpcStore();
const overlayMode = ref(OverlayMode.NONE);
const overlayStore = useOverlayStore();
const appConfig = ipcStore.params!.appConfig;
const { translateText } = useCallAi();
const { closeWindow } = useCallApi();
const inFocusButton = ref<HTMLButtonElement>();
const translateResult = ref<string>("");

const props = defineProps<{
  text: string;
}>();

const emit = defineEmits<{
  (e: 'back'): void;
}>();

const back = () => {
  emit('back');
};

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

  overlayMode.value = OverlayMode.IN_PROGRESS;
  
  const newText = await translateText(toLangNum, trimmedText);

  translateResult.value = newText;
  overlayMode.value = OverlayMode.TRANSLATE_PREVIEW;
};


const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    back();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "KeyQ") {
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
<template>
  <!-- <Overlay v-if="overlayMode === OverlayMode.IN_PROGRESS">
    <InProgressMessage :ai="true" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.CORRECTION">
    <InProgressMessage :correction="true" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.EDIT_PRESETS">
    <EditPresetsMenu @close="toInsertMenu" :text="text" />
  </Overlay>
  
  <Overlay v-if="overlayMode === OverlayMode.TRANSLATE">
    <TranslateMenu :text="props.text" @back="toInsertMenu" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.TRANSLATE_PREVIEW">
    <PreviewMenu :text="resultText" @close="toInsertMenu" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.DIFF">
    <DiffMenu :oldText="props.text" :newText="resultText" @close="toInsertMenu" />
  </Overlay> -->

  <div>
    <DiffInput v-if="props.oldText" :oldText="props.oldText" :newText="props.text" @update:newText="handleNewText" />
    <TextPreview v-else :text="props.text" />
  </div>

  <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
    <div v-if="props.showBackButton">Esc - <button @click="props.onBack()">назад</button></div>
    <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
    <div v-if="props.showToEditor">Tab - <button @click="goToEditor">в редактор</button></div>
    <div v-if="ipcStore.params?.windowId && props.showInsertButton">Space - <button @click="typeIntoWindowAndClose(props.text ?? '')">вставить</button></div>

    <template>
      <div>q - <button @click="intoClipboardAndClose(props.text)">в буфер обмена и закрыть окно</button></div>
      <div>w - <button @click="correct()">коррекция</button></div>
      <div>e - <button @click="toEditPresets">выбор пресета редактирования</button></div>
      <div>r - </div>
      <div>t - <button @click="translate()">перевод</button></div>
      
      <div>a - </div>
      <div>s - </div>
      <div>d - </div>
      <div>f - </div>
      <div>g - </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCallApi } from '../../composables/useCallApi';
import { useIpcStore } from '../../stores/ipc';
import { useRouteParams } from '../../stores/routeParams';
import { useCallAi } from '../../composables/useCallAi';
import miniToastr from "mini-toastr";

enum OverlayMode {
  IN_PROGRESS = "in-progress",
  EDIT_PRESETS = "edit-presets",
  TRANSLATE_PREVIEW = "translate-preview",
  CORRECTION = "correction",
  DIFF = "diff",
  TRANSLATE = "translate",
  NONE = "none",
}

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  // if set then diff will be shown
  oldText: {
    type: String,
    default: "",
  },
  showBackButton: {
    type: Boolean,
    default: true
  },
  showToEditor: {
    type: Boolean,
    default: true
  },
  showInsertButton: {
    type: Boolean,
    default: true
  },
  onBack: {
    type: Function,
    default: () => {}
  }
});

const emit = defineEmits<{
  (e: 'update:newText', value: string): void;
}>();

const overlayMode = ref(OverlayMode.NONE);
const resultText = ref<string>("");
const inFocusButton = ref<HTMLButtonElement>();
const { dealToCalendar, correctText } = useCallAi();

onMounted(() => {
  nextTick(() => {
    if (inFocusButton.value) {
      inFocusButton.value.focus();
    }
  })
})  

const router = useRouter();
const { closeWindow,
  typeIntoWindowAndClose, searchInInternet, intoClipboardAndClose, askAIShort, insertIntoWindow
} = useCallApi();
const ipcStore = useIpcStore();
const routeParamsStore = useRouteParams();
const appConfig = ipcStore.params!.appConfig;

function handleNewText(newText: string) {
  emit('update:newText', newText);
}

function toEditPresets() {
  overlayMode.value = OverlayMode.EDIT_PRESETS;
}

function toInsertMenu() {
  overlayMode.value = OverlayMode.NONE;
  nextTick(() => {
    if (inFocusButton.value) {
      inFocusButton.value.focus();
    }
  })
}

async function translate() {
  overlayMode.value = OverlayMode.TRANSLATE;
  
  // if (!ipcStore.params?.windowId || !props.text) return;
  // let value = resolveText(props.text);
  // if (!value.trim()) return;
  // overlayMode.value = OverlayMode.IN_PROGRESS;
  // resultText.value = await translateText(toLangNum, props.text);  
  // overlayMode.value = OverlayMode.TRANSLATE_PREVIEW;
}

function goToEditor() {
  if (!props.showToEditor) return;
  
  if (props.text?.trim()) {
    routeParamsStore.setParams({ text: props.text });
  }
  
  router.push("/");
}

async function correct() {
  if (!props.text.trim()) return;

  if (props.text.length < appConfig.minCorrectionLength) {
    miniToastr.warn('Слишком короткий текст для коррекции');

    return;
  }

  overlayMode.value = OverlayMode.IN_PROGRESS;

  const newText = await correctText(props.text); 

  resultText.value = newText;
  overlayMode.value = OverlayMode.DIFF;
}

const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    props.onBack?.();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "Space") {
    if (!ipcStore.params?.windowId || !props.text || !props.showInsertButton) return;

    insertIntoWindow(props.text ?? '');
  }
  else if (event.code === "KeyQ") {
    goToEditor();
  }
  else if (event.code === "KeyW") {
    if (!props.text) return;
    intoClipboardAndClose(props.text ?? '');
  }
  else if (event.code === "KeyE") {
    translate();
  }
  else if (event.code === "KeyR") {
    if (!props.text) return;
  }
  else if (event.code === "KeyT") {
    if (!props.text) return;
  }
  else if (event.code === "KeyA") {
    correct();
  }
  else if (event.code === "KeyS") {
    if (!props.text) return;
  }
  else if (event.code === "KeyD") {
    if (!props.text) return;
  }
  else if (event.code === "KeyF") {
    toEditPresets();
  }
  else if (event.code === "KeyG") {
    if (!props.text) return;
  }
  // else if (event.code === "KeyZ") {
  //   translate(0);
  // }
  // else if (event.code === "KeyX") {
  //   translate(1);
  // }
  // else if (event.code === "KeyC") {
  //   translate(2);
  // }
  // else if (event.code === "KeyV") {
  //   translate(3);
  // }
  // else if (event.code === "KeyB") {
  //   translate(4);
  // }
}
</script>
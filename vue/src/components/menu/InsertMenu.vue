<template>
  <Overlay v-if="overlayMode === OverlayMode.IN_PROGRESS">
    <InProgressMessage :ai="true" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.CORRECTION">
    <InProgressMessage :correction="true" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.TRANSLATE_PREVIEW">
    <PreviewMenu :text="resultText" @close="toInsertMenu" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.DIFF">
    <DiffMenu :oldText="props.text" :newText="resultText" @close="toInsertMenu" />
  </Overlay>

  <div>
    <TextPreview :text="props.text" />
  </div>

  <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
    <div v-if="props.showBackButton">Esc - <button @click="emit('back')">назад</button></div>
    <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
    <div v-if="props.showToEditor">q - <button @click="goToEditor">в редактор</button></div>
    <template v-if="props.text">
      <div v-if="ipcStore.data?.windowId && props.showInsertButton">Space - <button @click="typeIntoWindowAndClose(props.text ?? '')">вставить</button></div>
      <div>w - <button @click="intoClipboardAndClose(props.text)">в буфер обмена и закрыть окно</button></div>
      <!-- <div>e - </div> -->
      <div>r - <button @click="askAIShort(props.text)">быстрый вопрос к AI</button></div>
      <div>t - <button @click="dealToCalendar(props.text)">добавить дело в календарь</button></div>
      
      <div>a - <button @click="correct()">коррекция</button></div>
      <div>s - <button @click="fastNote(props.text)">быстрая заметка в Obsidian</button></div>
      <div>d - <button @click="addToKnowledgeBase(props.text)">вставить в базу знаний</button></div>
      <div>f - <button @click="toEditPresets">выбор пресета редактирования</button></div>
      <div>g - <button @click="searchInInternet(props.text)">поиск в интернете</button></div>

      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[0]">z - ➡️ <button @click="translate(0)">{{ipcStore.data?.userConfig.toTranslateLanguages[0]}}</button></div>
      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[1]">x - ➡️ <button @click="translate(1)">{{ipcStore.data?.userConfig.toTranslateLanguages[1]}}</button></div>
      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[2]">c - ➡️ <button @click="translate(2)">{{ipcStore.data?.userConfig.toTranslateLanguages[2]}}</button></div>
      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[3]">v - ➡️ <button @click="translate(3)">{{ipcStore.data?.userConfig.toTranslateLanguages[3]}}</button></div>
      <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[4]">b - ➡️ <button @click="translate(4)">{{ipcStore.data?.userConfig.toTranslateLanguages[4]}}</button></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCallApi } from '../../composables/useCallApi';
import { useIpcStore } from '../../stores/ipc';
import { useRouteParams } from '../../stores/routeParams';
import { useCallAi } from '../../composables/useCallAi';

enum OverlayMode {
  IN_PROGRESS = "in-progress",
  TRANSLATE_PREVIEW = "translate-preview",
  CORRECTION = "correction",
  DIFF = "diff",
  NONE = "none",
}

const props = defineProps({
  text: {
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
  }
});

const emit = defineEmits<{
  (e: 'back'): void;
  (e: 'editPresets'): void;
}>();

const overlayMode = ref(OverlayMode.NONE);
const resultText = ref<string>("");
const inFocusButton = ref<HTMLButtonElement>();
const { translateText, dealToCalendar, correctText } = useCallAi();
const { resolveText } = useCallApi();

onMounted(() => {
  nextTick(() => {
    if (inFocusButton.value) {
      inFocusButton.value.focus();
    }
  })
})  

const router = useRouter();
const { closeWindow,
  typeIntoWindowAndClose, searchInInternet, fastNote, 
  addToKnowledgeBase, intoClipboardAndClose, askAIShort, insertIntoWindow
} = useCallApi();
const ipcStore = useIpcStore();
const routeParamsStore = useRouteParams();

function toEditPresets() {
  if (!ipcStore.data?.windowId || !props.text) return;
  emit('editPresets');
}

function toInsertMenu() {
  overlayMode.value = OverlayMode.NONE;
  nextTick(() => {
    if (inFocusButton.value) {
      inFocusButton.value.focus();
    }
  })
}

async function translate(toLangNum: number) {
  if (!ipcStore.data?.windowId || !props.text) return;

  let value = resolveText(props.text);

  if (!value.trim()) return;

  overlayMode.value = OverlayMode.IN_PROGRESS;

  resultText.value = await translateText(toLangNum, props.text);  

  overlayMode.value = OverlayMode.TRANSLATE_PREVIEW;
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

  overlayMode.value = OverlayMode.IN_PROGRESS;

  const newText = await correctText(props.text); 

  resultText.value = newText;
  overlayMode.value = OverlayMode.DIFF;
}

const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    emit('back');
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "Space") {
    if (!ipcStore.data?.windowId || !props.text || !props.showInsertButton) return;

    insertIntoWindow(props.text ?? '');
  }
  else if (event.code === "KeyQ") {
    goToEditor();
  }
  else if (event.code === "KeyW") {
    if (!props.text) return;
    intoClipboardAndClose(props.text ?? '');
  }
  // else if (event.code === "KeyE") {
  //   if (!props.text) return;
  //   console.log("e");
  // }
  else if (event.code === "KeyR") {
    if (!props.text) return;
    askAIShort(props.text);
  }
  else if (event.code === "KeyT") {
    if (!props.text) return;
    dealToCalendar(props.text);
  }
  else if (event.code === "KeyA") {
    correct();
  }
  else if (event.code === "KeyS") {
    if (!props.text) return;
    fastNote(props.text);
  }
  else if (event.code === "KeyD") {
    if (!props.text) return;
    addToKnowledgeBase(props.text);
  }
  else if (event.code === "KeyF") {
    toEditPresets();
  }
  else if (event.code === "KeyG") {
    if (!props.text) return;
    searchInInternet(props.text);
  }
  else if (event.code === "KeyZ") {
    translate(0);
  }
  else if (event.code === "KeyX") {
    translate(1);
  }
  else if (event.code === "KeyC") {
    translate(2);
  }
  else if (event.code === "KeyV") {
    translate(3);
  }
  else if (event.code === "KeyB") {
    translate(4);
  }
}
</script>
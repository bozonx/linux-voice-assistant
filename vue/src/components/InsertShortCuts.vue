<template>
  <TextPreview :text="props.text" />
  <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
    <slot name="backButton"></slot>
    <div v-if="props.showBackButton">Esc - <button @click="emit('back')">назад</button></div>
    <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
    <div v-if="props.showToEditor">q - <button @click="goToEditor">в редактор</button></div>
    <template v-if="props.text">
      <div v-if="ipcStore.data?.windowId">Space - <button @click="typeIntoWindowAndClose(props.text ?? '')">вставить</button></div>
      <!-- <div>w - </div> -->
      <!-- <div>e - </div> -->
      <div>r - <button @click="askAIShort(props.text)">быстрый вопрос к AI</button></div>
      <div>t - <button @click="dealToCalendar(props.text)">добавить дело в календарь</button></div>
      
      <div>a - <button @click="intoClipboardAndClose(props.text)">в буфер обмена и закрыть окно</button></div>
      <div>s - <button @click="fastNote(props.text)">быстрая заметка в Obsidian</button></div>
      <div>d - <button @click="addToKnowledgeBase(props.text)">вставить в базу знаний</button></div>
      <div v-if="ipcStore.data?.windowId">f - <button @click="toEditPresets">выбор пресета редактирования</button></div>
      <div>g - <button @click="searchInInternet(props.text)">поиск в интернете</button></div>

      <template v-if="ipcStore.data?.windowId">
        <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[0]">z - ➡️ <button @click="translate(0)">{{ipcStore.data?.userConfig.toTranslateLanguages[0]}}</button></div>
        <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[1]">x - ➡️ <button @click="translate(1)">{{ipcStore.data?.userConfig.toTranslateLanguages[1]}}</button></div>
        <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[2]">c - ➡️ <button @click="translate(2)">{{ipcStore.data?.userConfig.toTranslateLanguages[2]}}</button></div>
        <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[3]">v - ➡️ <button @click="translate(3)">{{ipcStore.data?.userConfig.toTranslateLanguages[3]}}</button></div>
        <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[4]">b - ➡️ <button @click="translate(4)">{{ipcStore.data?.userConfig.toTranslateLanguages[4]}}</button></div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCallApi } from '../composables/useCallApi';
import { useIpcStore } from '../stores/ipc';
import { useRouteParams } from '../stores/routeParams';
import { useCallAi } from '../composables/useCallAi';

const props = defineProps({
  text: {
    type: String,
  },
  showBackButton: {
    type: Boolean,
    default: true
  },
  showToEditor: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  (e: 'back'): void;
  (e: 'editPresets'): void;
}>();

const inFocusButton = ref<HTMLButtonElement>();
const { translateText, dealToCalendar, aIinsertMode } = useCallAi();

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

function translate(toLangNum: number) {
  if (!ipcStore.data?.windowId || !props.text) return;
  
  aIinsertMode((value) => translateText(toLangNum, value), props.text);  
}

function goToEditor() {
  if (!props.showToEditor) return;
  
  if (props.text?.trim()) {
    routeParamsStore.setParams({ text: props.text });
  }
  
  router.push("/");
}


const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    emit('back');
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "Space") {
    if (!ipcStore.data?.windowId || !props.text) return;

    insertIntoWindow(props.text ?? '');
  }
  else if (event.code === "KeyQ") {
    goToEditor();
  }
  else if (event.code === "KeyW") {
    if (!props.text) return;
    console.log("w");
  }
  else if (event.code === "KeyE") {
    if (!props.text) return;
    console.log("e");
  }
  else if (event.code === "KeyR") {
    if (!props.text) return;
    askAIShort(props.text);
  }
  else if (event.code === "KeyT") {
    if (!props.text) return;
    dealToCalendar(props.text);
  }
  else if (event.code === "KeyA") {
    if (!props.text) return;
    intoClipboardAndClose(props.text ?? '');
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
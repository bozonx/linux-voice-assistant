<template>
  <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
    <slot name="backButton"></slot>
    <div>Esc - <button ref="backButton" @click="emit('back')">назад</button></div>
    <div>Space - <button @click="typeIntoWindowAndClose(props.text ?? '')">вставить</button></div>
    <div>Ctrl + q - <button @click="closeWindow">закрыть программу</button></div>
    <div v-if="props.toEditor">q - <button @click="toEditor">в редактор</button></div>
    <div>w - </div>
    <div>e - </div>
    <div>r - <button @click="askAIShort(props.text)">быстрый вопрос к AI</button></div>
    <div>t - <button @click="dealToCalendar(props.text)">добавить дело в календарь</button></div>
    
    <div>a - <button @click="intoClipboardAndClose(props.text)">в буфер обмена и закрыть окно</button></div>
    <div>s - <button @click="fastNote(props.text)">быстрая заметка в Obsidian</button></div>
    <div>d - <button @click="addToKnowledgeBase(props.text)">вставить в базу знаний</button></div>
    <div>f - <button @click="toEditPresets">выбор пресета редактирования</button></div>
    <div>g - <button @click="searchInInternet(props.text)">поиск в интернете</button></div>

    <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[0]">z - ➡️ <button @click="translate(0)">{{ipcStore.data?.userConfig.toTranslateLanguages[0]}}</button></div>
    <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[1]">x - ➡️ <button @click="translate(1)">{{ipcStore.data?.userConfig.toTranslateLanguages[1]}}</button></div>
    <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[2]">c - ➡️ <button @click="translate(2)">{{ipcStore.data?.userConfig.toTranslateLanguages[2]}}</button></div>
    <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[3]">v - ➡️ <button @click="translate(3)">{{ipcStore.data?.userConfig.toTranslateLanguages[3]}}</button></div>
    <div v-if="ipcStore.data?.userConfig.toTranslateLanguages[4]">b - ➡️ <button @click="translate(4)">{{ipcStore.data?.userConfig.toTranslateLanguages[4]}}</button></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCallApi } from '../composables/useCallApi';
import { useIpcStore } from '../stores/ipc';
import { useCallAi } from '../composables/useCallAi';
import { useRouteParams } from '../stores/routeParams';

const props = defineProps({
  text: {
    type: String,
  },
  toEditor: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  (e: 'back'): void;
  (e: 'editPresets'): void;
}>();

const backButton = ref<HTMLButtonElement>();

onMounted(() => {
  nextTick(() => {
    if (backButton.value) {
      backButton.value.focus();
    }
  })
})  

const router = useRouter();
const { closeWindow,
  typeIntoWindowAndClose, searchInInternet, fastNote, dealToCalendar,
  addToKnowledgeBase, intoClipboardAndClose, askAIShort
} = useCallApi();
const { translateAndInsert } = useCallAi();
const ipcStore = useIpcStore();
const routeParamsStore = useRouteParams();

function toEditPresets() {
  emit('editPresets');
}

function translate(toLangNum: number) {
  translateAndInsert(toLangNum, props.text);
}

function toEditor() {
  if (!props.text?.trim()) {
    router.push("/");
    return;
  }
  
  routeParamsStore.setParams({ text: props.text });
  router.push("/");
}


const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    emit('back');
  }
  else if (event.code === "Space") {
    typeIntoWindowAndClose(props.text ?? '')
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "KeyQ") {
    if (props.toEditor) toEditor();
  }
  else if (event.code === "KeyW") {
    console.log("w");
  }
  else if (event.code === "KeyE") {
    console.log("e");
  }
  else if (event.code === "KeyR") {
    askAIShort(props.text);
  }
  else if (event.code === "KeyT") {
    dealToCalendar(props.text);
  }
  else if (event.code === "KeyA") {
    intoClipboardAndClose(props.text ?? '');
  }
  else if (event.code === "KeyS") {
    fastNote(props.text);
  }
  else if (event.code === "KeyD") {
    addToKnowledgeBase(props.text);
  }
  else if (event.code === "KeyF") {
    toEditPresets();
  }
  else if (event.code === "KeyG") {
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
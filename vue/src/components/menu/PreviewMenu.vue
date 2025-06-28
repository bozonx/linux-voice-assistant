<template>
  <div class="diff-view">
    <TextPreview :text="props.text" />
  </div>

  <div>
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div>Esc - <button @click="close">отмена</button></div>
      <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
      <div v-if="props.showToEditor">q - <button @click="goToEditor">вставить в редактор</button></div>
      <div v-if="ipcStore.data?.windowId && props.showInsertButton">Space - <button @click="typeIntoWindowAndClose(props.text)">вставить</button></div>
      <div>a - <button @click="intoClipboardAndClose(props.text)">в буфер обмена и закрыть окно</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../../composables/useCallApi';
import { useIpcStore } from '../../stores/ipc';
import { useRouteParams } from '../../stores/routeParams';
import { useOverlayStore } from '../../stores/mainOverlay';
import { useMainInputStore } from '../../stores/mainInput';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  showInsertButton: {
    type: Boolean,
    default: true,
  },
  showToEditor: {
    type: Boolean,
    default: true,
  },
});
const { closeWindow, typeIntoWindowAndClose, intoClipboardAndClose } = useCallApi();
const inFocusButton = ref<HTMLButtonElement | null>(null);
const ipcStore = useIpcStore();
const routeParamsStore = useRouteParams();
const router = useRouter();
const overlayStore = useOverlayStore();
const mainInputStore = useMainInputStore();

const emit = defineEmits<{
  (e: 'close'): void
}>();

onMounted(() => {
  nextTick(() => {
    if (inFocusButton.value) {
      inFocusButton.value.focus();
    }
  })
})  

function close() {
  emit('close');
}

function goToEditor() {
  if (!props.showToEditor) return;
  
  if (props.text?.trim()) {
    routeParamsStore.setParams({ text: props.text });
    mainInputStore.setValue(props.text);
  }

  overlayStore.hideOverlay();
  router.push("/");
}

async function insertIntoWindow(text: string) {
  await typeIntoWindowAndClose(text);
}

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Escape") {
    close();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  else if (event.code === "Space") {
    if (!ipcStore.params?.windowId || !props.showInsertButton) return;

    insertIntoWindow(props.text);
  }
  else if (event.code === "KeyQ") {
    goToEditor();
  }
  else if (event.code === "KeyA") {
    intoClipboardAndClose(props.text ?? '');
  }
}
</script>
<template>
  <div class="diff-view">
    <TextPreview :text="props.text" />
  </div>

  <div>
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div>Esc - <button @click="close">назад</button></div>
      <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
      <div v-if="ipcStore.data?.windowId && props.showInsertButton">Space - <button @click="typeIntoWindowAndClose(props.text)">вставить</button></div>
      <div>a - <button @click="intoClipboardAndClose(props.text)">в буфер обмена и закрыть окно</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../../composables/useCallApi';
import { useIpcStore } from '../../stores/ipc';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  showInsertButton: {
    type: Boolean,
    default: true,
  },
});
const { closeWindow, typeIntoWindowAndClose, intoClipboardAndClose } = useCallApi();
const inFocusButton = ref<HTMLButtonElement | null>(null);
const ipcStore = useIpcStore();

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
    if (!ipcStore.data?.windowId || !props.showInsertButton) return;

    insertIntoWindow(props.text);
  }
  else if (event.code === "KeyA") {
    intoClipboardAndClose(props.text ?? '');
  }
}
</script>
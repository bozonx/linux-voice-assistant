<template>
  <div class="diff-view">
    <DiffInput :oldText="props.oldText" :newText="props.newText" @update:newText="updateNewText" />
  </div>

  <div>
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div>Esc - <button @click="close">назад</button></div>
      <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
      <div v-if="ipcStore.data?.windowId && props.showInsertButton">Space - <button @click="typeIntoWindowAndClose(editedNewText)">вставить</button></div>
      <div>a - <button @click="intoClipboardAndClose(editedNewText)">в буфер обмена и закрыть окно</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../../composables/useCallApi';
import { useIpcStore } from '../../stores/ipc';

const props = defineProps({
  oldText: {
    type: String,
    required: true,
  },
  newText: {
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
const editedNewText = ref(props.newText);

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

function updateNewText(text: string) {
  editedNewText.value = text;
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

    typeIntoWindowAndClose(editedNewText.value);
  }
  else if (event.code === "KeyA") {
    intoClipboardAndClose(editedNewText.value);
  }
}
</script>

<style scoped>
.diff-view {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
</style>
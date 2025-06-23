<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.IN_PROGRESS">
    <InProgressMessage :ai="true" />
  </OverlayOneColumn>

  <div class="diff-view">
    <DiffInput :oldText="props.oldText" :newText="props.newText" />
  </div>

  <div>
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div>Esc - <button @click="close">назад</button></div>
      <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
      <div v-if="ipcStore.data?.windowId && props.showInsertButton">Space - <button @click="typeIntoWindowAndClose(props.newText)">вставить</button></div>
      <div>a - <button @click="intoClipboardAndClose(props.newText)">в буфер обмена и закрыть окно</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../composables/useCallApi';
import { useIpcStore } from '../stores/ipc';

enum OverlayMode {
  IN_PROGRESS = "in-progress",
  NONE = "none",
}

const overlayMode = ref(OverlayMode.NONE);

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
  overlayMode.value = OverlayMode.IN_PROGRESS;

  await typeIntoWindowAndClose(text);

  overlayMode.value = OverlayMode.NONE;
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

    insertIntoWindow(props.newText);
  }
  else if (event.code === "KeyA") {
    intoClipboardAndClose(props.newText);
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
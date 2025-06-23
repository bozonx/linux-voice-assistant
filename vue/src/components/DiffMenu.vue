<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.IN_PROGRESS">
    <InProgressMessage :ai="true" />
  </OverlayOneColumn>

  <div class="diff-view">
    <Diff :oldText="props.oldText" :newText="props.newText" />
    <DiffView :diffFile="diffFile" />
  </div>

  <div>
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div>Esc - <button @click="close">назад</button></div>
      <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@git-diff-view/vue/styles/diff-view.css";
import { DiffView } from "@git-diff-view/vue";
import { DiffFile } from "@git-diff-view/core";
import { generateDiffFile } from "@git-diff-view/file";
import { useCallApi } from '../composables/useCallApi';
import { useIpcStore } from '../stores/ipc';

enum OverlayMode {
  IN_PROGRESS = "in-progress",
  NONE = "none",
}

const overlayMode = ref(OverlayMode.NONE);

const props = defineProps<{
  oldText: string;
  newText: string;
}>();
const { closeWindow, typeIntoWindowAndClose } = useCallApi();
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
    
const file = generateDiffFile(
  "oldFile.md",
  props.oldText,
  "newFile.md",
  props.newText,
  "Markdown",
  "Markdown"
);
file.initTheme('light');
file.init();
file.buildSplitDiffLines();
file.buildUnifiedDiffLines();

const bundle = file.getBundle();
const diffFile = ref(DiffFile.createInstance({}, bundle));

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
    if (!ipcStore.data?.windowId) return;

    insertIntoWindow(props.newText);
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
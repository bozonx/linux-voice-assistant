<template>
  <div class="diff-view">
    <DiffInput :oldText="props.oldText" :newText="props.newText" @update:newText="updateNewText" />
  </div>

  <div>
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div v-if="ipcStore.params?.windowId && props.showInsertButton">Space - <button @click="typeIntoWindowAndClose(editedNewText)">вставить</button></div>
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
  showBackButton: {
    type: Boolean,
    default: true,
  },
  showInsertButton: {
    type: Boolean,
    default: true,
  },
  showToEditor: {
    type: Boolean,
    default: true,
  },
  onBack: {
    type: Function,
    default: () => {}
  }
});
const { typeIntoWindowAndClose } = useCallApi();
const inFocusButton = ref<HTMLButtonElement | null>(null);
const ipcStore = useIpcStore();
const editedNewText = ref(props.newText);

onMounted(() => {
  nextTick(() => {
    if (inFocusButton.value) {
      inFocusButton.value.focus();
    }
  })
})  

function updateNewText(text: string) {
  editedNewText.value = text;
}

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Space") {
    if (!ipcStore.params?.windowId || !props.showInsertButton) return;

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
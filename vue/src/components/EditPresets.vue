<template>
  <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
    <div>Esc - <button ref="backButton" @click="close">назад</button></div>
    <div>Ctrl + q - <button @click="closeWindow">закрыть программу</button></div>
    <div v-for="(preset, index) in ipcStore.data?.userConfig.aiTasks.deepEdit" :key="preset.description">
      {{ EDIT_PRESET_KEYS[index] }} - <button @click="editAndInsert(index, props.text)">{{ preset.description }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../composables/useCallApi';
import { EDIT_PRESET_KEYS } from '../types';
import { useIpcStore } from '../stores/ipc';
import { useCallAi } from '../composables/useCallAi';

const props = defineProps<{
  text?: string
}>();

const ipcStore = useIpcStore();
const { editAndInsert } = useCallAi();
const { closeWindow } = useCallApi();
const backButton = ref<HTMLButtonElement | null>(null);

const emit = defineEmits<{
  (e: 'close'): void
}>();

onMounted(() => {
  nextTick(() => {
    backButton.value?.focus();
  })
})

function close() {
  emit('close');
}

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Escape") {
    close();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }

  let codeLetter;
  if (event.code.length === 4 && event.code.startsWith("Key")) {
    codeLetter = event.code.slice(3).toLowerCase();
  }
  
  if (codeLetter && EDIT_PRESET_KEYS.includes(codeLetter)) {
    editAndInsert(EDIT_PRESET_KEYS.indexOf(codeLetter), props.text);
  }
}
</script>

<style scoped>
</style>
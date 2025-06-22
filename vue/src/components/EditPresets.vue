<template>
  <div>{{ props.text }}</div>
  <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
    <div v-if="props.showBackButton">Esc - <button @click="close">назад</button></div>
    <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
    <div v-for="(preset, index) in ipcStore.data?.userConfig.aiRules.deepEdit" :key="preset.description">
      {{ EDIT_PRESET_KEYS[index] }} - <button @click="editAndInsert(index, props.text)">{{ preset.description }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../composables/useCallApi';
import { EDIT_PRESET_KEYS } from '../types';
import { useIpcStore } from '../stores/ipc';
import { useCallAi } from '../composables/useCallAi';

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  showBackButton: {
    type: Boolean,
    default: true
  },
});

const ipcStore = useIpcStore();
const { editAndInsert } = useCallAi();
const { closeWindow } = useCallApi();
const inFocusButton = ref<HTMLButtonElement | null>(null);

const emit = defineEmits<{
  (e: 'close'): void
}>();

onMounted(() => {
  nextTick(() => {
    inFocusButton.value?.focus();
  })
})

function close() {
  emit('close');
}

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Escape") {
    if (!props.showBackButton) return;

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
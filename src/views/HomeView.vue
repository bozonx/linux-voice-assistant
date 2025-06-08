<template>
  <div class="container">
    <VoiceRecognitionProcess 
      :is-active="isVoiceRecognitionActive" 
      @stop="stopVoiceRecognition" 
    />

    <MainInput
      v-model="inputText"
      :is-voice-recognition-active="isVoiceRecognitionActive"
      @toggle-voice-recognition="toggleVoiceRecognition"
      @correct-text="correctText"
      @edit-text="editText"
      @translate-text="translateText"
      @transform-text="transformText"
    />

    <TextEditToolbar
      :text="inputText"
      :is-voice-recognition-active="isVoiceRecognitionActive"
      @toggle-voice-recognition="toggleVoiceRecognition"
      @correct-text="correctText"
      @edit-text="editText"
      @translate-text="translateText"
      @transform-text="transformText"
    />

    <h2 class="section-title">Действия</h2>
    <Actions :text="inputText" />

    <h2 class="section-title">Трансформирование и вставка</h2>
    <TransformAndInsertMenu :text="inputText" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIpc } from '../composables/useIpc';
import { useTextTransform } from '../composables/useTextTransform';
import { useVoiceRecognition } from '../composables/useVoiceRecognition';
import { Modes } from '../types';

import MainInput from '../components/MainInput.vue';
import Actions from '../components/Actions.vue';
import TransformAndInsertMenu from '../components/TransformAndInsertMenu.vue';
import TextEditToolbar from '../components/TextEditToolbar.vue';
import VoiceRecognitionProcess from '../components/VoiceRecognitionProcess.vue';

const { windowId, selectedText, mode, callFunction, initParams } = useIpc();
const { isVoiceRecognitionActive, startVoiceRecognition, stopVoiceRecognition, toggleVoiceRecognition } = useVoiceRecognition();
const {
  capitalizeFirstLetter,
  toUppercase,
  toLowercase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase
} = useTextTransform();

const inputText = ref('');

onMounted(() => {
  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('init-params', async (event: any, params: any) => {
    initParams(params);

    if (mode.value === Modes.SELECT && selectedText.value) {
      inputText.value = selectedText.value;
    } else if (mode.value === Modes.VOICE) {
      await startVoiceRecognition();
    }
  });

  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('voice-recognition', (event: any, data: string) => {
    inputText.value = data;
  });
});

const correctText = () => {
  // TODO: Implement text correction
  console.log('Correcting text:', inputText.value);
};

const editText = () => {
  // TODO: Implement text editing
  console.log('Editing text:', inputText.value);
};

const translateText = async (from: string, to: string) => {
  if (!inputText.value.trim()) return;
  const result = await callFunction('translateText', [inputText.value, from, to]);
  if (result.success) {
    inputText.value = result.result;
  } else {
    console.error(result.error);
  }
};

const transformText = (type: string) => {
  if (!inputText.value.trim()) return;
  switch (type) {
    case 'capitalize':
      inputText.value = capitalizeFirstLetter(inputText.value);
      break;
    case 'uppercase':
      inputText.value = toUppercase(inputText.value);
      break;
    case 'lowercase':
      inputText.value = toLowercase(inputText.value);
      break;
    case 'camelCase':
      inputText.value = toCamelCase(inputText.value);
      break;
    case 'pascalCase':
      inputText.value = toPascalCase(inputText.value);
      break;
    case 'snakeCase':
      inputText.value = toSnakeCase(inputText.value);
      break;
    case 'kebabCase':
      inputText.value = toKebabCase(inputText.value);
      break;
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 14px;
}
</style> 
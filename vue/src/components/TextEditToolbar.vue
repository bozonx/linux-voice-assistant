<template>
  <div>
    <ul class="text-edit-toolbar">
      <li>
        <button
          class="mini-button"
          @click="voiceRecognition()"
        >
          Голосовой ввод
        </button>
      </li>
      <li>
        <button class="mini-button" @click="translateText('en', 'ru')">EN ➡️ RU</button>
      </li>
      <li>
        <button class="mini-button" @click="translateText('ru', 'en')">RU ➡️ EN</button>
      </li>
      <li>
        <button class="mini-button" @click="translateText('ru', 'es')">RU ➡️ ES</button>
      </li>
      <li>
        <button class="mini-button" @click="translateText('es', 'ru')">ES ➡️ RU</button>
      </li>
    </ul>

    <ul class="text-edit-toolbar">
      <li>
        <button class="mini-button" @click="correctText()">Коррекция</button>
      </li>
      <li>
        <button class="mini-button" @click="editText()">Редактировать</button>
      </li>
      <li>
        <button class="mini-button" @click="formatMd()">Формат MD</button>
      </li>
      <li>
        <button class="mini-button" @click="formatCode()">Формат JS/TS/JSON/CSS/HTML/XML</button>
      </li>
      <li>
        <button class="mini-button" @click="rusStress()">Ударение рус</button>
      </li>
    </ul>

    <ul class="text-edit-toolbar">
      <li>
        <button class="mini-button" @click="transformText('capitalize')">Capitalize</button>
      </li>
      <li>
        <button class="mini-button" @click="transformText('uppercase')">UPPERCASE</button>
      </li>
      <li>
        <button class="mini-button" @click="transformText('lowercase')">lowercase</button>
      </li>
      <li>
        <button class="mini-button" @click="transformText('camelCase')">camelCase</button>
      </li>
      <li>
        <button class="mini-button" @click="transformText('pascalCase')">PascalCase</button>
      </li>
      <li>
        <button class="mini-button" @click="transformText('snakeCase')">snake_case</button>
      </li>
      <li>
        <button class="mini-button" @click="transformText('kebabCase')">kebab-case</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { useTextTransform } from '../composables/useTextTransform';
import { useMainInputStore } from '../stores/mainInput'
import { useOverlayStore } from '../stores/overlay';
import { useVoiceRecognitionStore } from '../stores/voiceRecognition';
import { useCodeFormatter } from '../composables/useCodeFormatter';

import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()

// Используем composable
const mainInputStore = useMainInputStore()
const ipcStore = useIpcStore();
const overlayStore = useOverlayStore();
const voiceRecognitionStore = useVoiceRecognitionStore();
const { formatSomeCode } = useCodeFormatter();
const {
  capitalizeFirstLetter,
  toUppercase,
  toLowercase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase
} = useTextTransform();

// Функция для корректировки текста
const correctText = () => {
  console.log('Корректировка текста:', mainInputStore.value);
};

// Функция для редактирования текста
const editText = () => {
  console.log('Редактура текста:', mainInputStore.value);
};

// Функция для перевода текста
const translateText = async (from: string, to: string) => {
  if (!mainInputStore.value.trim()) return;
  
  overlayStore.startTranslating();

  const result = await ipcStore.callFunction('translateText', [mainInputStore.value, from, to]);

  if (result.success) {
    mainInputStore.setValue(result.result as string);
  } else {
    console.error(result.error);
  }

  overlayStore.hideOverlay();
};

const formatMd = () => {
  console.log('Форматирование MD:', mainInputStore.value);
};

const formatCode = async () => {
  notify({
  title: "Authorization",
  text: "You have been logged in!",
});

  mainInputStore.setValue(await formatSomeCode(mainInputStore.value));
};

const rusStress = () => {
  console.log('Ударение русский:', mainInputStore.value);
};

// Функция для трансформации текста
const transformText = (type: string) => {
  if (!mainInputStore.value.trim()) return;

  switch (type) {
    case 'capitalize':
      mainInputStore.setValue(capitalizeFirstLetter(mainInputStore.value));
      break;
    case 'uppercase':
      mainInputStore.setValue(toUppercase(mainInputStore.value));
      break;
    case 'lowercase':
      mainInputStore.setValue(toLowercase(mainInputStore.value));
      break;
    case 'camelCase':
      mainInputStore.setValue(toCamelCase(mainInputStore.value));
      break;
    case 'pascalCase':
      mainInputStore.setValue(toPascalCase(mainInputStore.value));
      break;
    case 'snakeCase':
      mainInputStore.setValue(toSnakeCase(mainInputStore.value));
      break;
    case 'kebabCase':
      mainInputStore.setValue(toKebabCase(mainInputStore.value));
      break;
  }
};

const voiceRecognition = () => {
  voiceRecognitionStore.startRecognizing();
};
</script>

<style scoped>
.text-edit-toolbar {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 2px;
  list-style: none;
  padding: 0;
  margin: 0 0 2px 0;
}
</style> 
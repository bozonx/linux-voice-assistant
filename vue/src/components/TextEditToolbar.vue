<template>
  <div>
    <ul class="text-edit-toolbar">
      <li>
        <button
          class="mini-button"
          @click="voiceRecognition"
        >
          Голосовой ввод
        </button>
      </li>
      <li>
        <button class="mini-button" @click="translateAndEdit('en', 'ru')">EN ➡️ RU</button>
      </li>
      <li>
        <button class="mini-button" @click="translateAndEdit('ru', 'en')">RU ➡️ EN</button>
      </li>
      <li>
        <button class="mini-button" @click="translateAndEdit('ru', 'es')">RU ➡️ ES</button>
      </li>
      <li>
        <button class="mini-button" @click="translateAndEdit('es', 'ru')">ES ➡️ RU</button>
      </li>
    </ul>

    <ul class="text-edit-toolbar">
      <li>
        <button class="mini-button" @click="correctAndEdit">Коррекция</button>
      </li>
      <li>
        <button class="mini-button" @click="editAndEdit">Редактировать</button>
      </li>
      <li>
        <button class="mini-button" @click="formatMdAndEdit">Beautyfy MD</button>
      </li>
      <li>
        <button class="mini-button" @click="formatCodeAndEdit">Формат JS/JSON/CSS/HTML/XML</button>
      </li>
      <li>
        <button class="mini-button" @click="rusStress">Ударение рус</button>
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
import { useTextTransform } from '../composables/useTextTransform';
import { useMainInputStore } from '../stores/mainInput'
import { useVoiceRecognitionStore } from '../stores/voiceRecognition';
import { useCallFunction } from '../composables/useCallFunction';

// Используем composable
const mainInputStore = useMainInputStore()
const voiceRecognitionStore = useVoiceRecognitionStore();
const {
  translateAndEdit,
  formatMdAndEdit,
  correctAndEdit,
  editAndEdit,
  formatCodeAndEdit,
} = useCallFunction();
const {
  capitalizeFirstLetter,
  toUppercase,
  toLowercase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  makeRusStress
} = useTextTransform();

const rusStress = () => {
  if (!mainInputStore.value.trim()) return;

  if (mainInputStore.selectedText) {
    mainInputStore.replaceSelection(makeRusStress(mainInputStore.selectedText));
  }
  else {
    mainInputStore.setValue(makeRusStress(mainInputStore.value));
  }
};

// Функция для трансформации текста
const transformText = (type: string) => {
  if (!mainInputStore.value.trim()) return;

  let text = mainInputStore.value;
  let result = '';

  if (mainInputStore.selectedText) {
    text = mainInputStore.selectedText;
  }

  switch (type) {
    case 'capitalize':
      result = capitalizeFirstLetter(text);
      break;
    case 'uppercase':
      result = toUppercase(text);
      break;
    case 'lowercase':
      result = toLowercase(text);
      break;
    case 'camelCase':
      result = toCamelCase(text);
      break;
    case 'pascalCase':
      result = toPascalCase(text);
      break;
    case 'snakeCase':
      result = toSnakeCase(text);
      break;
    case 'kebabCase':
      result = toKebabCase(text);
      break;
  }

  if (mainInputStore.selectedText) {
    mainInputStore.replaceSelection(result);
  }
  else {
    mainInputStore.setValue(result);
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
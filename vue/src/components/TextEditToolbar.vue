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
        <button class="mini-button" @click="correctText()">Коррекция</button>
      </li>
      <li>
        <button class="mini-button" @click="editText()">Редактировать</button>
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

// Используем composable
const { setMainInputText, getMainInputText } = useMainInputStore()
const ipcStore = useIpcStore();
const overlayStore = useOverlayStore();
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
  console.log('Корректировка текста:', getMainInputText());
};

// Функция для редактирования текста
const editText = () => {
  console.log('Редактура текста:', getMainInputText());
};

// Функция для перевода текста
const translateText = async (from: string, to: string) => {
  const result = await ipcStore.callFunction('translateText', [getMainInputText(), from, to]);

  if (result.success) {
    setMainInputText(result.data as string);
  } else {
    console.error(result.error);
  }
};

// Функция для трансформации текста
const transformText = (type: string) => {
  switch (type) {
    case 'capitalize':
      setMainInputText(capitalizeFirstLetter(getMainInputText()));
      break;
    case 'uppercase':
      setMainInputText(toUppercase(getMainInputText()));
      break;
    case 'lowercase':
      setMainInputText(toLowercase(getMainInputText()));
      break;
    case 'camelCase':
      setMainInputText(toCamelCase(getMainInputText()));
      break;
    case 'pascalCase':
      setMainInputText(toPascalCase(getMainInputText()));
      break;
    case 'snakeCase':
      setMainInputText(toSnakeCase(getMainInputText()));
      break;
    case 'kebabCase':
      setMainInputText(toKebabCase(getMainInputText()));
      break;
  }
};

const voiceRecognition = () => {
  overlayStore.startVoiceRecognition();
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
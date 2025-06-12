<template>
  <div>
    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="correctAndInsert">Коррекция</button>
      </li>
      <li>
        <button class="button" @click="editAndInsert">Редактировать</button>
      </li>
      <li>
        <button class="button" @click="formatMd">Beautyfy MD</button>
      </li>
      <li>
        <button class="button" @click="formatCode">Формат JS/JSON/CSS/HTML/XML</button>
      </li>
      <li>
        <button class="button" @click="rusStress">Ударение рус</button>
      </li>
    </ul>

    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="translateAndInsert('en', 'ru')">EN ➡️ RU</button>
      </li>
      <li>
        <button class="button" @click="translateAndInsert('ru', 'en')">RU ➡️ EN</button>
      </li>
      <li>
        <button class="button" @click="translateAndInsert('ru', 'es')">RU ➡️ ES</button>
      </li>
      <li>
        <button class="button" @click="translateAndInsert('es', 'ru')">ES ➡️ RU</button>
      </li>
    </ul>

    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="transformAndInsert('capitalize')">Capitalize</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('uppercase')">UPPERCASE</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('lowercase')">lowercase</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('camelCase')">camelCase</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('pascalCase')">PascalCase</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('snakeCase')">snake_case</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('kebabCase')">kebab-case</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { useTextTransform } from '../composables/useTextTransform';
import { useMainInputStore } from '../stores/mainInput';
import { useOverlayStore } from '../stores/overlay';
import { useCodeFormatter } from '../composables/useCodeFormatter';

const ipcStore = useIpcStore();
const mainInputStore = useMainInputStore();
const overlayStore = useOverlayStore();
const { formatSomeCode, formatMdAndStyle } = useCodeFormatter();
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

// Функция для корректировки и вставки текста
const correctAndInsert = () => {
  console.log('Корректировка текста:', mainInputStore.value);
};

// Функция для редактирования и вставки текста
const editAndInsert = () => {
  console.log('Редактура текста:', mainInputStore.value);
};

// Функция для перевода и вставки текста
const translateAndInsert = async (from: string, to: string) => {
  if (!mainInputStore.value.trim()) return;
  
  overlayStore.startTranslating();

  const result = await ipcStore.callFunction('translateTextAndInsert', [
    mainInputStore.value,
    from,
    to,
    ipcStore.windowId
  ]);
  if (!result.success) {
    console.error(result.error);
  }

  overlayStore.hideOverlay();
};

const formatMd = async () => {
  if (!mainInputStore.value.trim()) return;

  const value = await formatMdAndStyle(mainInputStore.value);
  const result = await ipcStore.callFunction('typeIntoWindowAndClose', [value, ipcStore.windowId]);

  if (!result.success) {
    console.error(result.error);
  }
};

const formatCode = async () => {
  if (!mainInputStore.value.trim()) return;

  const value = await formatSomeCode(mainInputStore.value);
  const result = await ipcStore.callFunction('typeIntoWindowAndClose', [value, ipcStore.windowId]);
  
  if (!result.success) {
    console.error(result.error);
  }
};

const rusStress = async () => {
  if (!mainInputStore.value.trim()) return;

  const value = makeRusStress(mainInputStore.value);
  const result = await ipcStore.callFunction('typeIntoWindowAndClose', [value, ipcStore.windowId]);
  
  if (!result.success) {
    console.error(result.error);
  }
};

// Функция для трансформации и вставки текста
const transformAndInsert = async (type: string) => {
  if (!mainInputStore.value.trim()) return;
  
  let transformedText = mainInputStore.value;
  
  switch (type) {
    case 'capitalize':
      transformedText = capitalizeFirstLetter(mainInputStore.value);
      break;
    case 'uppercase':
      transformedText = toUppercase(mainInputStore.value);
      break;
    case 'lowercase':
      transformedText = toLowercase(mainInputStore.value);
      break;
    case 'camelCase':
      transformedText = toCamelCase(mainInputStore.value);
      break;
    case 'pascalCase':
      transformedText = toPascalCase(mainInputStore.value);
      break;
    case 'snakeCase':
      transformedText = toSnakeCase(mainInputStore.value);
      break;
    case 'kebabCase':
      transformedText = toKebabCase(mainInputStore.value);
      break;
  }

  const result = await ipcStore.callFunction('typeIntoWindowAndClose', [transformedText, ipcStore.windowId]);
  
  if (!result.success) {
    console.error(result.error);
  }
};
</script>

<style scoped>

</style> 
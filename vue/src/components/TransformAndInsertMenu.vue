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
        <button class="button" @click="formatMdAndInsert">Beautyfy MD</button>
      </li>
      <li>
        <button class="button" @click="formatCodeAndInsert">Формат JS/JSON/CSS/HTML/XML</button>
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
        <button class="button" @click="transform('capitalize')">Capitalize</button>
      </li>
      <li>
        <button class="button" @click="transform('uppercase')">UPPERCASE</button>
      </li>
      <li>
        <button class="button" @click="transform('lowercase')">lowercase</button>
      </li>
      <li>
        <button class="button" @click="transform('camelCase')">camelCase</button>
      </li>
      <li>
        <button class="button" @click="transform('pascalCase')">PascalCase</button>
      </li>
      <li>
        <button class="button" @click="transform('snakeCase')">snake_case</button>
      </li>
      <li>
        <button class="button" @click="transform('kebabCase')">kebab-case</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { useTextTransform } from '../composables/useTextTransform';
import { useMainInputStore } from '../stores/mainInput';
import { useCallFunction } from '../composables/useCallFunction';

const ipcStore = useIpcStore();
const mainInputStore = useMainInputStore();
const {
  correctAndInsert,
  editAndInsert,
  translateAndInsert,
  formatMdAndInsert,
  formatCodeAndInsert,
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

const rusStress = async () => {
  if (!mainInputStore.value.trim()) return;

  const value = makeRusStress(mainInputStore.value);
  const result = await ipcStore.callFunction('typeIntoWindowAndClose', [value, ipcStore.windowId]);
  
  if (!result.success) {
    console.error(result.error);
  }
};

// Функция для трансформации и вставки текста
const transform = async (type: string) => {
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
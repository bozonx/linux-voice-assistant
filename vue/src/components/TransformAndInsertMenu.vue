<template>
  <div>

    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="correctAndInsert">Коррекция</button>
      </li>
      <li>
        <button class="button" @click="editAndInsert">Редактировать</button>
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
import { useIpc } from '../composables/useIpc';
import { useTextTransform } from '../composables/useTextTransform';

// Определяем пропсы компонента
const props = defineProps<{
  text: string;
}>();

const { windowId, callFunction } = useIpc();
const {
  capitalizeFirstLetter,
  toUppercase,
  toLowercase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase
} = useTextTransform();

// Функция для корректировки и вставки текста
const correctAndInsert = () => {
  console.log('Корректировка текста:', props.text);
};

// Функция для редактирования и вставки текста
const editAndInsert = () => {
  console.log('Редактура текста:', props.text);
};

// Функция для перевода и вставки текста
const translateAndInsert = async (from: string, to: string) => {
  if (!props.text.trim()) return;
  
  const result = await callFunction('translateTextAndInsert', [
    props.text,
    from,
    to,
    windowId.value
  ]);
  if (!result.success) {
    console.error(result.error);
  }
};

// Функция для трансформации и вставки текста
const transformAndInsert = async (type: string) => {
  if (!props.text.trim()) return;
  
  let transformedText = props.text;
  
  switch (type) {
    case 'capitalize':
      transformedText = capitalizeFirstLetter(props.text);
      break;
    case 'uppercase':
      transformedText = toUppercase(props.text);
      break;
    case 'lowercase':
      transformedText = toLowercase(props.text);
      break;
    case 'camelCase':
      transformedText = toCamelCase(props.text);
      break;
    case 'pascalCase':
      transformedText = toPascalCase(props.text);
      break;
    case 'snakeCase':
      transformedText = toSnakeCase(props.text);
      break;
    case 'kebabCase':
      transformedText = toKebabCase(props.text);
      break;
  }

  const result = await callFunction('typeIntoWindowAndClose', [transformedText, windowId.value]);
  if (!result.success) {
    console.error(result.error);
  }
};
</script>

<style scoped>
.big-buttons-toolbar {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4px;
}

.button {
  width: 100%;
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  text-align: left;
}

.button:hover {
  background-color: #1976D2;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section-title {
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 14px;
}
</style> 
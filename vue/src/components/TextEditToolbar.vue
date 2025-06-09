<template>
  <div>
    <ul class="text-edit-toolbar">
      <li>
        <button
          class="mini-button"
          @click="startVoiceRecognition()"
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
import { useIpc } from '../composables/useIpc';
import { useTextTransform } from '../composables/useTextTransform';
import { useTextInput } from '../composables/useTextInput.js'

// Используем composable
const { setText, getText } = useTextInput()
const { callFunction } = useIpc();
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
  console.log('Корректировка текста:', getText());
};

// Функция для редактирования текста
const editText = () => {
  console.log('Редактура текста:', getText());
};

// Функция для перевода текста
const translateText = async (from: string, to: string) => {
  const result = await callFunction('translateText', [getText(), from, to]);

  if (result.success) {
    setText(result.data as string);
  } else {
    console.error(result.error);
  }
};

// Функция для трансформации текста
const transformText = (type: string) => {
  switch (type) {
    case 'capitalize':
      setText(capitalizeFirstLetter(getText()));
      break;
    case 'uppercase':
      setText(toUppercase(getText()));
      break;
    case 'lowercase':
      setText(toLowercase(getText()));
      break;
    case 'camelCase':
      setText(toCamelCase(getText()));
      break;
    case 'pascalCase':
      setText(toPascalCase(getText()));
      break;
    case 'snakeCase':
      setText(toSnakeCase(getText()));
      break;
    case 'kebabCase':
      setText(toKebabCase(getText()));
      break;
  }
};

const startVoiceRecognition = () => {
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
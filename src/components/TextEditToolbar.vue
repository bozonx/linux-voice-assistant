<template>
  <div>
    <ul class="text-edit-toolbar">
      <li>
        <button
          class="mini-button"
          :class="{ 'mini-btn-pressed': isVoiceRecognitionActive }"
          @click="$emit('toggleVoiceRecognition')"
        >
          Голосовой ввод
        </button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('correctText')">Коррекция</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('editText')">Редактировать</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('translateText', 'en', 'ru')">EN ➡️ RU</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('translateText', 'ru', 'en')">RU ➡️ EN</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('translateText', 'ru', 'es')">RU ➡️ ES</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('translateText', 'es', 'ru')">ES ➡️ RU</button>
      </li>
    </ul>

    <ul class="text-edit-toolbar">
      <li>
        <button class="mini-button" @click="$emit('transformText', 'capitalize')">Capitalize</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'uppercase')">UPPERCASE</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'lowercase')">lowercase</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'camelCase')">camelCase</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'pascalCase')">PascalCase</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'snakeCase')">snake_case</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'kebabCase')">kebab-case</button>
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
  isVoiceRecognitionActive: boolean;
}>();

// Определяем события компонента
const emit = defineEmits<{
  (e: 'toggleVoiceRecognition'): void;
  (e: 'correctText'): void;
  (e: 'editText'): void;
  (e: 'translateText', from: string, to: string): void;
  (e: 'transformText', type: string): void;
}>();

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
  console.log('Корректировка текста:', props.text);
  emit('correctText');
};

// Функция для редактирования текста
const editText = () => {
  console.log('Редактура текста:', props.text);
  emit('editText');
};

// Функция для перевода текста
const translateText = async (from: string, to: string) => {
  if (!props.text.trim()) return;
  
  const result = await callFunction('translateText', [props.text, from, to]);
  if (result.success) {
    emit('translateText', from, to);
  } else {
    console.error(result.error);
  }
};

// Функция для трансформации текста
const transformText = (type: string) => {
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
  
  emit('transformText', type);
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

.mini-button {
  background-color: #1b72b7;
  color: white;
  border: none;
  padding: 2px 6px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
}

.mini-button:hover {
  background-color: #1976D2;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.mini-btn-pressed {
  background-color: #19528b;
  color: white;
}
</style> 
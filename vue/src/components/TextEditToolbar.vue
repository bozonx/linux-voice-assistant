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
        <button class="mini-button" @click="translateAndEdit('ru', 'en')">RU ➡️ EN</button>
      </li>
      <li>
        <button class="mini-button" @click="translateAndEdit('en', 'ru')">EN ➡️ RU</button>
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
        <button class="mini-button" @click="rusStressAndEdit">Ударение рус</button>
      </li>
    </ul>

    <ul class="text-edit-toolbar">
      <li>
        <button class="mini-button" @click="transformTextAndEdit('capitalize')">Capitalize</button>
      </li>
      <li>
        <button class="mini-button" @click="transformTextAndEdit('uppercase')">UPPERCASE</button>
      </li>
      <li>
        <button class="mini-button" @click="transformTextAndEdit('lowercase')">lowercase</button>
      </li>
      <li>
        <button class="mini-button" @click="transformTextAndEdit('camelCase')">camelCase</button>
      </li>
      <li>
        <button class="mini-button" @click="transformTextAndEdit('pascalCase')">PascalCase</button>
      </li>
      <li>
        <button class="mini-button" @click="transformTextAndEdit('snakeCase')">snake_case</button>
      </li>
      <li>
        <button class="mini-button" @click="transformTextAndEdit('kebabCase')">kebab-case</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCallFunction } from '../composables/useCallFunction';

const {
  translateAndEdit,
  formatMdAndEdit,
  correctAndEdit,
  editAndEdit,
  formatCodeAndEdit,
  rusStressAndEdit,
  voiceRecognition,
  transformTextAndEdit,
} = useCallFunction();
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
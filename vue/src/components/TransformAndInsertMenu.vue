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
        <button class="button" @click="rusStressAndInsert">Ударение рус</button>
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
        <button class="button" @click="transformTextAndInsert('capitalize')">Capitalize</button>
      </li>
      <li>
        <button class="button" @click="transformTextAndInsert('uppercase')">UPPERCASE</button>
      </li>
      <li>
        <button class="button" @click="transformTextAndInsert('lowercase')">lowercase</button>
      </li>
      <li>
        <button class="button" @click="transformTextAndInsert('camelCase')">camelCase</button>
      </li>
      <li>
        <button class="button" @click="transformTextAndInsert('pascalCase')">PascalCase</button>
      </li>
      <li>
        <button class="button" @click="transformTextAndInsert('snakeCase')">snake_case</button>
      </li>
      <li>
        <button class="button" @click="transformTextAndInsert('kebabCase')">kebab-case</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCallFunction } from '../composables/useCallFunction';

const {
  correctAndInsert,
  editAndInsert,
  translateAndInsert,
  formatMdAndInsert,
  formatCodeAndInsert,
  rusStressAndInsert,
  transformTextAndInsert,
} = useCallFunction();
</script>

<style scoped>

</style> 
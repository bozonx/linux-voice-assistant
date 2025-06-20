<template>
  <div>
    <ul class="small-buttons-toolbar">
      <li>
        <button
          class="mini-button"
          @click="voiceRecognition"
        >
          Голосовой ввод
        </button>
      </li>
      <li v-for="lang in ipcStore.data?.userConfig.toTranslateLanguages" :key="lang">
        <button class="mini-button" @click="translateAndEdit(lang)">➡️ {{ lang }}</button>
      </li>
    </ul>

    <ul class="small-buttons-toolbar">
      <li>
        <button class="mini-button" @click="correctAndEdit">Коррекция</button>
      </li>
      <li>
        <button class="mini-button" @click="overlayStore.showEditPresets">Редактировать</button>
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

    <ul class="small-buttons-toolbar">
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
import { useCallApi } from '../composables/useCallApi';
import { useCallAi } from '../composables/useCallAi';
import { useIpcStore } from '../stores/ipc';
import { useOverlayStore } from '../stores/mainOverlay';

const ipcStore = useIpcStore();
const overlayStore = useOverlayStore();
const {
  voiceRecognition,
  translateAndEdit,
  correctAndEdit,
} = useCallAi();
const {
  formatMdAndEdit,
  formatCodeAndEdit,
  rusStressAndEdit,
  transformTextAndEdit,
} = useCallApi();

</script>

<style scoped>
.big-buttons-toolbar {
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
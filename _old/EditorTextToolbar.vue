<template>
  <div>
    <ul class="small-buttons-toolbar">
      <li>
        <button class="mini-button" @click="voiceRecognition">Голосовой ввод</button>
      </li>
      <li>
        <button class="mini-button" @click="clear">Очистить</button>
      </li>
      <li>
        <button class="mini-button" @click="selectAll">Выбрать всё</button>
      </li>
    </ul>

    <ul class="small-buttons-toolbar">
      <li>
        <button class="mini-button" @click="formatMd">Beautyfy MD</button>
      </li>
      <li>
        <button class="mini-button" @click="formatCode">Формат JS/JSON/CSS/HTML/XML</button>
      </li>
      <li>
        <button class="mini-button" @click="rusStress">Ударение рус</button>
      </li>
    </ul>

    <ul class="small-buttons-toolbar">
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
import { useMainInputStore } from '../vue/src/stores/mainInput';
import { useCodeFormatter } from '../vue/src/composables/useCodeFormatter';
import { useTextTransform } from '../vue/src/composables/useTextTransform';
import { useOverlayStore } from '../vue/src/stores/mainOverlay';

const overlayStore = useOverlayStore();
const mainInputStore = useMainInputStore();
const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();
const { makeRusStress, doCaseTransform } = useTextTransform();

async function editMode(transformCb: (value: string) => Promise<string>) {
  let value = mainInputStore.value;

  if (mainInputStore.selectedText) {
    value = mainInputStore.selectedText;
  }

  if (!value.trim()) return;

  value = await transformCb(value);

  mainInputStore.selectedText
    ? mainInputStore.replaceSelection(value)
    : mainInputStore.setValue(value);
}

const voiceRecognition = () => {
  overlayStore.showVoiceRecognition();
}

const clear = () => {
  mainInputStore.clear();
}

const selectAll = () => {
  mainInputStore.selectAll();
}

const formatMd = () => editMode((value) => formatMdAndStyle(value));
const formatCode = () => editMode((value) => formatSomeCode(value));
const rusStress = () => editMode((value) => Promise.resolve(makeRusStress(value)));
const transformText = (type: string) => editMode((value) => Promise.resolve(doCaseTransform(value, type)));
</script>

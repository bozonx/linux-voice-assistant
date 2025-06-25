<template>
  <div>
    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="formatMdAndInsert()">Beautyfy MD</button>
      </li>
      <li>
        <button class="button" @click="formatCodeAndInsert()">Формат JS/JSON/CSS/HTML/XML</button>
      </li>
      <li>
        <button class="button" @click="rusStressAndInsert()">Ударение рус</button>
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
import { useMainInputStore } from '../stores/mainInput';
import { useCodeFormatter } from '../composables/useCodeFormatter';
import { useTextTransform } from '../composables/useTextTransform';
import { useCallApi } from '../composables/useCallApi';
import miniToastr from "mini-toastr";

const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();
const { makeRusStress, doCaseTransform } = useTextTransform();
const { typeIntoWindowAndClose, resolveText } = useCallApi();
const mainInputStore = useMainInputStore();

async function insertMode(transformCb: (value: string) => Promise<string>) {
  let value = mainInputStore.value;

  if (mainInputStore.selectedText) {
    value = mainInputStore.selectedText;
  }

  if (!value.trim()) {
    miniToastr.error("Текст не выбран");
    return;
  }

  await typeIntoWindowAndClose(await transformCb(value));
}

const formatMdAndInsert = () => insertMode((value) => formatMdAndStyle(value));
const formatCodeAndInsert = () => insertMode((value) => formatSomeCode(value));
const rusStressAndInsert = () =>
  insertMode((value) => Promise.resolve(makeRusStress(value)));
const transformTextAndInsert = (type: string) =>
  insertMode((value) => Promise.resolve(doCaseTransform(value, type)));
</script>

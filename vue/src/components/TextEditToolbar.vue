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
      <li v-for="(lang, index) in ipcStore.data?.userConfig.toTranslateLanguages" :key="lang">
        <button class="mini-button" @click="translate(index)">➡️ {{ lang }}</button>
      </li>
    </ul>

    <ul class="small-buttons-toolbar">
      <li>
        <button class="mini-button" @click="correct">Коррекция</button>
      </li>
      <li>
        <button class="mini-button" @click="edit(selectedEditPresetIndex - 1)">Редактировать</button>
        <Dropdown v-model:value="selectedEditPresetIndex" :options="editPresets" />
      </li>
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
import { useIpcStore } from '../stores/ipc';
import { useOverlayStore } from '../stores/mainOverlay';
import { useMainInputStore } from '../stores/mainInput';
import { useCodeFormatter } from '../composables/useCodeFormatter';
import { useTextTransform } from '../composables/useTextTransform';
import { useCallAi } from '../composables/useCallAi';
import { AI_TASKS } from '../types';

const ipcStore = useIpcStore();
const overlayStore = useOverlayStore();
const mainInputStore = useMainInputStore();
const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();
const { makeRusStress, doCaseTransform } = useTextTransform();
const { translateText, deepEdit, correctText } = useCallAi();
const selectedEditPresetIndex = ref(0);

const editPresets = computed((): string[] => {
  return [
    'Ничего не выбрано',
     ...ipcStore.data?.userConfig.aiRules[AI_TASKS.DEEP_EDIT].map((item) => item.description) || []
    ];
});

// watch(selectedEditPresetIndex, (value, oldValue) => {
//   if (value === oldValue) return;
  
//   if (value > 0) {
//     nextTick(() => {
//             editAndEdit(value - 1);
//             // selectedEditPresetIndex.value = 0;      
//     });
//   }
// });

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

const aiEditMode = async (transformCb: (value: string) => Promise<string>) => {
  let value = mainInputStore.value;

  if (mainInputStore.selectedText) {
    value = mainInputStore.selectedText;
  }

  if (!value.trim()) return;

  overlayStore.showAskingAi();

  value = await transformCb(value);

  mainInputStore.selectedText
    ? mainInputStore.replaceSelection(value)
    : mainInputStore.setValue(value);

  overlayStore.hideOverlay();
};

const voiceRecognition = () => {
  overlayStore.showVoiceRecognition();
}

const formatMd = () => editMode((value) => formatMdAndStyle(value));
const formatCode = () => editMode((value) => formatSomeCode(value));
const rusStress = () => editMode((value) => Promise.resolve(makeRusStress(value)));
const transformText = (type: string) => editMode((value) => Promise.resolve(doCaseTransform(value, type)));

const correct = () =>
  aiEditMode((value) =>
  correctText(value)
  );

const translate = (toLangNum: number) =>
  aiEditMode((value) => translateText(toLangNum, value));

const edit = (presetNum: number) => {
  if (presetNum === -1) return;

  return aiEditMode((value) =>
    deepEdit(presetNum, value)
  );
}
</script>

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
import { useIpcStore } from '../stores/ipc';
import { useOverlayStore } from '../stores/mainOverlay';
import { useMainInputStore } from '../stores/mainInput';
import { useCodeFormatter } from '../composables/useCodeFormatter';
import { useTextTransform } from '../composables/useTextTransform';
import { useCallAi } from '../composables/useCallAi';

const ipcStore = useIpcStore();
const overlayStore = useOverlayStore();
const mainInputStore = useMainInputStore();
const { formatMdAndStyle, formatSomeCode } = useCodeFormatter();
const { makeRusStress, doCaseTransform } = useTextTransform();
const { aiRequest } = useCallAi();
const router = useRouter();

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

  overlayStore.startAskingAi();

  value = await transformCb(value);

  mainInputStore.selectedText
    ? mainInputStore.replaceSelection(value)
    : mainInputStore.setValue(value);

  overlayStore.hideOverlay();
};

const voiceRecognition = () => {
  router.push('/voice');
}

const formatMdAndEdit = () => editMode((value) => formatMdAndStyle(value));
const formatCodeAndEdit = () => editMode((value) => formatSomeCode(value));
const rusStressAndEdit = () => editMode((value) => Promise.resolve(makeRusStress(value)));
const transformTextAndEdit = (type: string) => editMode((value) => Promise.resolve(doCaseTransform(value, type)));

const correctAndEdit = () =>
  aiEditMode((value) =>
    aiRequest(
          "correction",
          ipcStore.data!.appConfig.aiInstructions.clearResult,
          ipcStore.data!.userConfig.aiTasks.correction,
          value
        )
      );

const translateAndEdit = (to: string) =>
  editMode((value) =>
    aiRequest(
      "translate",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiTasks.translate + " " + to,
      value
    )
  );

const editAndEdit = (presetNum: number) =>
  editMode((value) =>
    aiRequest(
      "deepEdit",
      ipcStore.data!.appConfig.aiInstructions.clearResult,
      ipcStore.data!.userConfig.aiTasks.deepEdit[presetNum].context,
      value
    )
  );

</script>

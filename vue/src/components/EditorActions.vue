<template>
  <div>
    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="correct()">Коррекция</button>
      </li>
      <li>
        <button class="button" @click="edit()">Редактировать</button>
      </li>
      <!-- <li v-for="(lang, index) in ipcStore.data?.userConfig.toTranslateLanguages" :key="lang">
        <button class="mini-button" @click="translate(index)">➡️ {{ lang }}</button>
      </li> -->
      <li>
        <button class="button" @click="fastNote()">Быстрая заметка</button>
      </li>
      <li>
        <button class="button" @click="addToKnowledgeBase()">В базу знаний</button>
      </li>
      <li>
        <button class="button" @click="dealToCalendar()">Дело в календарь</button>
      </li>
      <li>
        <button class="button" @click="intoClipboardAndClose()">В буфер обмена</button>
      </li>
      <li v-if="ipcStore.data?.windowId">
        <button class="button" @click="insertIntoWindow()">Вставить в окно</button>
      </li>
    </ul>
    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="searchInInternet()">Поиск в интернете</button>
      </li>
      <!-- <li>
        <button class="button" @click="askAIlong()">Подробный ответ от AI</button>
      </li> -->
      <li>        
        <button class="button" @click="askAIShort()">Быстрый вопрос к AI</button>  
      </li>
      <li>
        <button class="button" @click="askAItext()">Вопрос по тексту к AI</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../composables/useCallApi';
import { useCallAi } from '../composables/useCallAi';
import { useIpcStore } from '../stores/ipc';
import { useOverlayStore } from '../stores/mainOverlay';
import { useMainInputStore } from '../stores/mainInput';

const ipcStore = useIpcStore();
const overlayStore = useOverlayStore();
const mainInputStore = useMainInputStore();

const {
  searchInInternet,
  fastNote,
  addToKnowledgeBase,
  intoClipboardAndClose,
  askAIShort,
  askAItext,
  insertIntoWindow,
} = useCallApi();

const {
  dealToCalendar,
  correctText,
} = useCallAi();


// const correctAndInsert = async (text?: string) => {
//   let value = resolveText(text);

//   if (!value.trim()) return;

//   overlayStore.showAskingAi();
  
//   const newText = await correctText(value); 

//   overlayStore.showDiff(newText);
// };

const correct = async () => {
  if (!mainInputStore.value.trim()) return;

  overlayStore.showCorrection();

  const newText = await correctText(mainInputStore.value); 

  overlayStore.showDiff(newText);
}

const edit = () => {
  overlayStore.showEditPresets();
}


// const { translateText, deepEdit, correctText } = useCallAi();
// const selectedEditPresetIndex = ref(0);

// const editPresets = computed((): string[] => {
//   return [
//     'Ничего не выбрано',
//      ...ipcStore.data?.userConfig.aiRules[AI_TASKS.DEEP_EDIT].map((item) => item.description) || []
//     ];
// });

// watch(selectedEditPresetIndex, (value, oldValue) => {
//   if (value === oldValue) return;
  
//   if (value > 0) {
//     nextTick(() => {
//             editAndEdit(value - 1);
//             // selectedEditPresetIndex.value = 0;      
//     });
//   }
// });


// const aiEditMode = async (transformCb: (value: string) => Promise<string>) => {
//   let value = mainInputStore.value;

//   if (mainInputStore.selectedText) {
//     value = mainInputStore.selectedText;
//   }

//   if (!value.trim()) return;

//   overlayStore.showAskingAi();

//   value = await transformCb(value);

//   mainInputStore.selectedText
//     ? mainInputStore.replaceSelection(value)
//     : mainInputStore.setValue(value);

//   overlayStore.hideOverlay();
// };
// const correct = () =>
//   aiEditMode((value) =>
//   correctText(value)
//   );

// const translate = (toLangNum: number) =>
//   aiEditMode((value) => translateText(toLangNum, value));

// const edit = (presetNum: number) => {
//   if (presetNum === -1) return;

//   return aiEditMode((value) =>
//     deepEdit(presetNum, value)
//   );
// }
</script>

<style scoped>

</style> 
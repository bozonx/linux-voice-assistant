<template>
  <div>
    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="correct()">Коррекция</button>
      </li>
      <li>
        <button class="button" @click="edit()">Редактировать</button>
      </li>
      <li>
        <button class="button" @click="translate()">Перевод</button>
      </li>
      <li>
        <button class="button" @click="intoClipboardAndClose()">В буфер обмена</button>
      </li>
      <li v-if="ipcStore.params?.windowId">
        <button class="button" @click="insertIntoWindow()">Вставить в окно</button>
      </li>
    </ul>
    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="fastNote()">Быстрая заметка</button>
      </li>
      <li>
        <button class="button" @click="addToKnowledgeBase()">В базу знаний</button>
      </li>
      <li>
        <button class="button" @click="dealToCalendar()">Дело в календарь</button>
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
import miniToastr from "mini-toastr";

const ipcStore = useIpcStore();
const overlayStore = useOverlayStore();
const mainInputStore = useMainInputStore();
const appConfig = ipcStore.params!.appConfig;

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


const correct = async () => {
  if (!mainInputStore.value.trim()) return;

  if (mainInputStore.value.length < appConfig.minCorrectionLength) {
    miniToastr.warn('Слишком короткий текст для коррекции');

    return;
  }

  overlayStore.showCorrection();

  const newText = await correctText(mainInputStore.value); 

  overlayStore.showDiff(newText);
}

const edit = () => {
  overlayStore.showEditPresets();
}

const translate = async () => {
  overlayStore.showTranslate();
};

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
</script>

<style scoped>

</style> 
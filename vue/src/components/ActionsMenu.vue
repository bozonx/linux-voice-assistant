<template>
  <div>
    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="fastNote">Быстрая заметка</button>
      </li>
      <li>
        <button class="button" @click="addToKnowledgeBase">В базу знаний</button>
      </li>
      <li>
        <button class="button" @click="dealToCalendar">Дело в календарь</button>
      </li>
      <li>
        <button class="button" @click="intoClipboardAndClose">В буфер обмена</button>
      </li>
      <li>
        <button class="button" @click="insertIntoWindow">Вставить в окно</button>
      </li>
    </ul>
    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="searchInInternet">Поиск в интернете</button>
      </li>
      <li>
        <button class="button" @click="askAIShort">Быстрый вопрос к AI</button>
      </li>
      <li>
        <button class="button" @click="askAIlong">Подробный ответ от AI</button>
      </li>
      <li>
        <button class="button" @click="askAItext">Вопрос по тексту к AI</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../composables/useCallApi';

const {
  searchInInternet,
  insertIntoWindow,
  fastNote,
  dealToCalendar,
  askAIShort,
  askAIlong,
  addToKnowledgeBase,
  intoClipboardAndClose,
  askAItext,
} = useCallApi();
</script>

<style scoped>

</style> 
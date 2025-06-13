<template>
  <div>
    <ul class="text-insert-buttons">
      <li>
        <button class="button" @click="fastNote">Создать быструю заметку</button>
      </li>
      <li>
        <button class="button" @click="dealToCalendar">Дело в календарь</button>
      </li>
      <li>
        <button class="button" @click="searchInInternet">Поиск выбранного текста в интернете</button>
      </li>
      <li>
        <button class="button" @click="insertIntoWindow">Вставить в окно</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCallFunction } from '../composables/useCallFunction';

const {
  searchInInternet,
  insertIntoWindow,
  fastNote,
  dealToCalendar,
} = useCallFunction();
</script>

<style scoped>

</style> 
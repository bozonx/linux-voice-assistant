<template>
  <div>
    <ul class="text-insert-buttons">
      <li>
        <button class="button" @click="createNote">Создать быструю заметку</button>
      </li>
      <li>
        <button class="button" @click="addToCalendar">Дело в календарь</button>
      </li>
      <li>
        <button class="button" @click="searchText">Поиск выбранного текста в интернете</button>
      </li>
      <li>
        <button class="button" @click="insertIntoWindow">Вставить в окно</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { useMainInputStore } from '../stores/mainInput';

const ipcStore = useIpcStore();
const mainInputStore = useMainInputStore();

// Функция для создания быстрой заметки
const createNote = () => {
  console.log('Создание заметки:', mainInputStore.value);
};

// Функция для добавления дела в календарь
const addToCalendar = () => {
  console.log('Дело в календарь:', mainInputStore.value);
};

// Функция для поиска текста в интернете
const searchText = async () => {
  if (!mainInputStore.value.trim()) return;
  
  const result = await ipcStore.callFunction('openInBrowserAndClose', [
    `https://duckduckgo.com/?q=${encodeURIComponent(mainInputStore.value)}`
  ]);
  if (!result.success) {
    console.error(result.error);
  }
};

// Функция для вставки текста в окно
const insertIntoWindow = async () => {
  if (!mainInputStore.value.trim()) return;
  
  const result = await ipcStore.callFunction('typeIntoWindowAndClose', [mainInputStore.value, ipcStore.windowId]);
  if (!result.success) {
    console.error(result.error);
  }
};
</script>

<style scoped>

</style> 
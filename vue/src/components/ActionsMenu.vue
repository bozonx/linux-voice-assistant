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

// Определяем пропсы компонента
const props = defineProps<{
  text: string;
}>();

const ipcStore = useIpcStore();

// Функция для создания быстрой заметки
const createNote = () => {
  console.log('Создание заметки:', props.text);
};

// Функция для добавления дела в календарь
const addToCalendar = () => {
  console.log('Дело в календарь:', props.text);
};

// Функция для поиска текста в интернете
const searchText = async () => {
  if (!props.text.trim()) return;
  
  const result = await ipcStore.callFunction('openInBrowserAndClose', [
    `https://duckduckgo.com/?q=${encodeURIComponent(props.text)}`
  ]);
  if (!result.success) {
    console.error(result.error);
  }
};

// Функция для вставки текста в окно
const insertIntoWindow = async () => {
  if (!props.text.trim()) return;
  
  const result = await ipcStore.callFunction('typeIntoWindowAndClose', [props.text, ipcStore.windowId]);
  if (!result.success) {
    console.error(result.error);
  }
};
</script>

<style scoped>
.text-insert-buttons {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4px;
}

.button {
  width: 100%;
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  text-align: left;
}

.button:hover {
  background-color: #1976D2;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section-title {
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 14px;
}
</style> 
<template>
  <div>
    <Overlays />

    <div>
      <MainInput ref="mainInput"/>

      <TextEditToolbar/>
    </div>

    

    <h2 class="section-title">Действия</h2>

    <ActionsMenu />

    <h2 class="section-title">Трансформирование и вставка</h2>

    <TransformAndInsertMenu />

    <div class="havigation">
      <RouterLink to="/history">История</RouterLink>
      <RouterLink to="/config">Настройки</RouterLink>
      <RouterLink to="/write">Режим написания</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainInputStore } from '../stores/mainInput';

const route = useRoute();
const mainInputStore = useMainInputStore();

// Обработка query параметра text при загрузке страницы
onMounted(() => {
  try {
    const textFromQuery = route.query.text as string;
    if (textFromQuery && textFromQuery.trim()) {
      // Декодируем URL-encoded текст
      const decodedText = decodeURIComponent(textFromQuery);
      mainInputStore.setValue(decodedText);
      
      // Фокусируемся на поле ввода
      nextTick(() => {
        mainInputStore.focus();
      });
    }
  } catch (error) {
    console.error("Error processing query parameter:", error);
    // Продолжаем работу без установки текста
  }
});
</script>
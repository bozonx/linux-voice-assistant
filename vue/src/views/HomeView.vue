<template>
  <DiffMenu :oldText="oldText" :newText="newText" />
  <Editor />

  <div class="navigation">
    <RouterLink to="/history">История</RouterLink>
    <RouterLink to="/config">Настройки</RouterLink>
    <RouterLink to="/write">Режим написания</RouterLink>
    <RouterLink to="/voice">Режим голоса</RouterLink>
    <RouterLink to="/edit">Режим редактирования</RouterLink>
    <RouterLink to="/select">Режим выбора</RouterLink>
  </div>
</template>

<script setup lang="ts">
const newText = ref('Можно вести список продуктов. Он будет запоминать, какие из них закончились, и примерно рассчитывать их потребление.');
const oldText = ref('можно вести список продуктов. Он может запоминать какие продукты уже закончились. Примерно прикидывать потребление');
</script>

<style scoped>
.navigation {
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: right;
}

.navigation a {
  text-decoration: none;
  color: #444;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  transition: background-color 0.3s ease;
}

.navigation a:hover {
  color: #000000;
  text-decoration: underline;
}
</style>
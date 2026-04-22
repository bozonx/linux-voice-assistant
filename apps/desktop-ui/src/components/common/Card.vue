<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .card {
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 16px;
    background-color: #f9f9f9;
    min-height: 0; /* Важно для правильной работы flexbox */
    overflow: hidden; /* Предотвращает выход содержимого за границы */
  }
</style>

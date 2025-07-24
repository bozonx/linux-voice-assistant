<template>
  <div class="flex flex-col w-full h-full justify-center items-center">
    <h2>
      <span v-if="props.ai">Запрос к AI </span>
      <span v-else-if="props.correction">Коррекция </span>
      <span v-else>Выполняется </span>

      <span class="loading loading-spinner loading-lg"></span>
    </h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ai: {
    type: Boolean,
    default: false
  },
  correction: {
    type: Boolean,
    default: false
  },
});
</script>
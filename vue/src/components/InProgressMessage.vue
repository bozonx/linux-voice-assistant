<template>
  <div>
    <div v-if="props.ai">
      <h2>Запрос к AI...</h2>
    </div>
    <div v-else>
      <h2>Выполняется...</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ai: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
</style>
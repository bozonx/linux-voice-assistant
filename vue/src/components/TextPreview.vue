<template>
  <div class="text-preview">
    <p>{{ text }}</p>
  </div>
  </template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<style scoped>
.text-preview {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
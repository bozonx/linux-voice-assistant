<template>
  <pre>{{ text }}</pre>
</template>

<script setup lang="ts">
const props = defineProps<{
  text?: string;
}>();
</script>

<style scoped>
pre {
  text-align: left;
  padding: 10px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  font-size: 16px;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
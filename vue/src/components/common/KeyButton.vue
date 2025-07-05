<template>
  <div class="bg-gray-200 rounded-md p-2 text-sm key-button">
    <span>{{ PRESETS_KEYS[props.index] }}</span>
  </div>
</template>

<script setup lang="ts">
  import { PRESETS_KEYS } from "../../types";

  const props = defineProps<{
    index: number;
  }>();
</script>

<style scoped>
  .key-button {
    width: 2.5rem;
    text-align: center;
  }
</style>

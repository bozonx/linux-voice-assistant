<template>
  <select v-model="value">
    <option v-for="(option, index) in options" :key="option" :value="index">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: number;
    options: string[];
  }>();

  const emit = defineEmits<{
    (e: "update:value", value: number): void;
  }>();

  const value = computed({
    get: () => props.value,
    set: (value) => emit("update:value", value),
  });
</script>

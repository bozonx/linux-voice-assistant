<template>
  <select v-model="value">
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value?: number | string;
    options: { id: number | string; name: string }[];
  }>();

  const emit = defineEmits<{
    (e: "update:value", value: number | string | undefined): void;
  }>();

  const value = computed({
    get: () => props.value,
    set: (value) => emit("update:value", value),
  });
</script>

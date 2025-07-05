<template>
  <div class="form-row-input">
    <select v-model="value">
      <option v-for="option in options" :key="option" :value="option">{{
        option
      }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: string;
    options: string[];
  }>();

  const emit = defineEmits<{
    (e: "update:value", value: string): void;
  }>();

  const value = computed({
    get: () => props.value,
    set: (value) => emit("update:value", value),
  });
</script>
<template>
  <div class="form-row">
    <div class="form-row-label">{{ label }}</div>
    <div class="form-row-input">
      <input type="text" v-model="value" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: string;
    label: string;
  }>();

  const emit = defineEmits<{
    (e: "update:value", value: string): void;
  }>();

  const value = computed({
    get: () => props.value,
    set: (value) => emit("update:value", value),
  });
</script>

<style scoped></style>
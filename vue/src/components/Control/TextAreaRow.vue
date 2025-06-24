<template>
  <div class="form-row">
    <div v-if="label" class="form-row-label">{{ label }}</div>
    <div class="form-row-input">
      <textarea v-model="value" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: string;
    label?: string;
  }>();

  const emit = defineEmits<{
    (e: "update:value", value: string): void;
  }>();

  const value = computed({
    get: () => props.value,
    set: (value) => emit("update:value", value),
  });
</script>

<style scoped>
  textarea {
    width: 100%;
    height: 200px;
  }
</style>
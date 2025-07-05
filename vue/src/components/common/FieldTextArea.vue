<template>
  <div class="form-textarea">
    <textarea v-model="value" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: string;
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
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
    font-size: 14px;
    line-height: 1.5rem;
  }
</style>

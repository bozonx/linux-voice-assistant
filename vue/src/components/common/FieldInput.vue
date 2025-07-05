<template>
  <div class="form-input">
    <input type="text" v-model="value" />
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
  input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
    font-size: 14px;
    line-height: 1.5rem;
  }
</style>

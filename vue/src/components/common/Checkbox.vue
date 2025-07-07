<template>
  <input type="checkbox" :checked="value" @change="handleChange" />
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: boolean;
  }>();

  const emit = defineEmits<{
    (e: "update:value", value: boolean): void;
  }>();

  function handleChange() {
    emit("update:value", !props.value);
  }
</script>

<style scoped></style>

<template>
  <div class="form-row">
    <div class="form-row-label">{{ label }}</div>
    <div class="form-row-input">
      <input type="checkbox" :checked="value" @change="handleChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: boolean;
  label: string;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: boolean): void
}>();

function handleChange() {
  emit('update:value', !props.value);
}
</script>

<style scoped>

</style>
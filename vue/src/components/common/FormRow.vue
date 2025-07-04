<template>
  <div class="form-row">
    <div class="text-sm text-gray-600 form-row-label">
      {{ label }}
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    label: string;
  }>();
</script>

<style scoped>
  .form-row {
    display: flex;
    flex-direction: row;
    gap: 14px;
    border-bottom: 1px solid #eee;
    padding: 6px 0;
  }

  .form-row-label {
    width: 200px;
    text-align: right;
    line-height: 1.5rem;
  }
</style>

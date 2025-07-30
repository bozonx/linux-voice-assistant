<template>
  <div class="field-row" :class="{ vertical: vertical }">
    <div class="text-sm text-gray-600 field-row-label">
      {{ label }}
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string; vertical?: boolean }>()
</script>

<style scoped>
.field-row {
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding: 0.75rem 0.5rem;
}

.field-row-label {
  width: 160px;
  text-align: right;
  line-height: 2rem;
}

.vertical {
  flex-direction: column;
  gap: 0px;
}

.vertical .form-row-label {
  text-align: left;
  font-size: 12px;
  line-height: 1.125rem;
}
</style>

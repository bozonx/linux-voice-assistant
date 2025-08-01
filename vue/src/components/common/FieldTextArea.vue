<template>
  <textarea class="textarea" :placeholder="placeholder" v-model="value" />
</template>

<script setup lang="ts">
const props = defineProps<{ value: string; placeholder?: string }>()
const emit = defineEmits<{ (e: 'update:value', value: string): void }>()

const value = computed({
  get: () => props.value,
  set: (value: string) => emit('update:value', value),
})
</script>

<style scoped>
textarea {
  width: 100%;
  min-height: 100px;
  resize: vertical;
}
</style>

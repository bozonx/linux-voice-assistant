<template>
  <select v-model="value" :title="title" class="select">
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.id"
      :selected="option.id === value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
const props = defineProps<{
  value?: number | string
  title?: string
  options: { id: number | string; name: string }[]
}>()

const emit = defineEmits<{
  (e: 'update:value', value: number | string | undefined): void
}>()

const value = computed({
  get: () => props.value,
  set: (value: number | string | undefined) => emit('update:value', value),
})
</script>

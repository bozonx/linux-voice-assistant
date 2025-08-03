<template>
  <input type="text" v-model="value" :placeholder="placeholder" class="input" />
</template>

<script setup lang="ts">
const props = defineProps<{ value: string | number; placeholder?: string }>()

const emit = defineEmits<{ (e: 'update:value', value: string): void }>()

const value = computed({
  get: () => props.value,
  set: (value) => emit('update:value', value),
})
</script>

<style scoped>
input {
  width: 100%;
}
</style>

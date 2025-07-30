<template>
  <div class="form-textarea">
    <textarea class="textarea" :placeholder="placeholder" v-model="value" />
  </div>
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
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
  font-size: 14px;
  line-height: 1.5rem;
  resize: vertical;
}
</style>

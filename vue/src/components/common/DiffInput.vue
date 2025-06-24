<template>
  <div>
    <textarea v-model="inputText" />
    <Diff :oldText="props.oldText" :newText="inputText" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  oldText: string;
  newText: string;
}>();
const inputText = ref(props.newText);

const emit = defineEmits<{
  (e: 'update:newText', value: string): void
}>();

watch(inputText, (newVal) => {
  emit('update:newText', newVal);
});
</script>

<style scoped>
textarea {
  width: 100%;
  height: 150px;
}
</style>
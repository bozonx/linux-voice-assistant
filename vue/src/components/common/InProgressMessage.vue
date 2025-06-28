<template>
  <div>
      <h2>
        <span v-if="props.ai">Запрос к AI </span>
        <span v-else-if="props.correction">Коррекция </span>
        <!-- <span v-else-if="props.recognition">Распознавание </span> -->
        <span v-else>Выполняется </span>
        <button ref="pendingButton">...</button>
      </h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ai: {
    type: Boolean,
    default: false
  },
  correction: {
    type: Boolean,
    default: false
  },
  // recognition: {
  //   type: Boolean,
  //   default: false
  // }
});

const pendingButton = ref<HTMLButtonElement>();

onMounted(() => {
  nextTick(() => {
    if (pendingButton.value) {
      pendingButton.value.focus();
    }
  })
})
</script>

<style scoped>
</style>
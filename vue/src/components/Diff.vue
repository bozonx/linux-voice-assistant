<template>
  <div>
    <div v-for="part in diff" :key="part.added + part.removed">
      <span v-if="part.added" class="added">{{ part.value }}</span>
      <span v-if="part.removed" class="removed">{{ part.value }}</span>
      <span v-else>{{ part.value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {diffChars} from 'diff';

const props = defineProps<{
  oldText: string;
  newText: string;
}>();

const diff = ref(diffChars(props.oldText, props.newText));

console.log(diff.value);

</script>

<style scoped>
.added {
  background-color: #e6ffe6;
}

.removed {
  background-color: #ffe6e6;
}
</style>
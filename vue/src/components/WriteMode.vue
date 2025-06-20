<template>
  <div class="write-mode-container">
    <textarea class="write-mode-textarea" v-model="text" />
  </div>
</template>

<script setup lang="ts">

const text = ref('');

</script>

<style scoped>
.write-mode-container {
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100%;
  min-height: 100%;
}

.write-mode-textarea {
  width: 80%;
  height: 100%;
  resize: none;
}

</style>
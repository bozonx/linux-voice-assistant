<template>
  <div class="overlay" :class="{ 'modal': modal }">
    <slot />
  </div>
</template>

<script setup lang="ts">  
const props = defineProps<{
  modal?: boolean;
}>();
</script>

<style scoped>
.overlay {
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal {
  height: calc(100% - 40px);
  position: fixed;
  background-color: rgb(0 8 2 / 80%);
  color: white;
  padding: 1.25rem;
}
</style>
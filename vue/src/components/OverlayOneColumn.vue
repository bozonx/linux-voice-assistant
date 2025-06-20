<template>
  <div class="overlay-one-column">
    <div class="overlay-one-column-content"><slot /></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.overlay-one-column {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
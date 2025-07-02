<template>
  <div class="overlay">
    <slot />
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  padding: 1.25rem;
  z-index: 100;
  width: 100%;
  height: calc(100% - 40px);
  background-color: rgb(0 8 2 / 80%);
  color: white;
  /* font-size: 24px; */
  /* font-weight: bold; */
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}
</style>
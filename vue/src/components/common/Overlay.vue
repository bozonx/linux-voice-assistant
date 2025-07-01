<template>
  <div class="overlay-one-column">
    <div class="overlay-one-column-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.overlay-one-column {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgb(0 8 2 / 80%);
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
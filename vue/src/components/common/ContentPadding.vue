<template>
  <div class="content-padding">
    <slot></slot>
  </div>
</template>

<style scoped>
  .content-padding {
    min-height: 0;
    padding: 1.25rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
</style>

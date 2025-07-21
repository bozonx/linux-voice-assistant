<template>
  <div class="overlay glass">
    <div class="navbar bg-neutral text-neutral-content shadow-sm overlay-header">
      <Button neutral @click="menuModalsStore.back">
          Назад
      </Button>
    </div>
    <ContentPadding class="flex-1">
      <slot />
    </ContentPadding>
  </div>
</template>

<script setup lang="ts">  
import { useMenuModalsStore } from '../../stores/menuModals';

const menuModalsStore = useMenuModalsStore();
</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 100;
  height: 100%;
  position: fixed;
  background-color: rgb(0 8 2 / 60%);
}

.overlay-header {
  padding: 0.5rem 1.25rem;
}
</style>
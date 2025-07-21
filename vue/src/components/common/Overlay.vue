<template>
  <div class="overlay" :class="{ 'modal-mode glass': modal }">
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

const props = defineProps<{
  modal?: boolean;
}>();
</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.modal-mode {
  z-index: 100;
  height: 100%;
  position: fixed;
  background-color: rgb(0 8 2 / 60%);
}

.overlay-header {
  padding: 0.5rem 1.25rem;
}
</style>
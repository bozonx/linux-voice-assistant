<template>
  <div v-if="overlayStore.status === 'TRANSLATING'" class="overlay-process">
    <div>Перевод...</div>
  </div>
  <div v-if="overlayStore.status === 'VOICE_RECOGNITION'" class="overlay-process">
    <div>Распознавание голоса...</div>
    <div>
      <button class="dialog-button" @click="onStopRecognition">Остановить</button>
    </div>
  </div>
  <div v-if="overlayStore.status === 'REPUNCTUATION'" class="overlay-process">
    <div>Коррекция пунктуации...</div>
  </div>
</template>

<script setup lang="ts">
import { useOverlayStore } from '../stores/overlay';

const overlayStore = useOverlayStore();

const onStopRecognition = () => {
  overlayStore.hideOverlay();
};
</script>

<style scoped>
.overlay-process {
  position: fixed;
  top: 0;
  left: 0;
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

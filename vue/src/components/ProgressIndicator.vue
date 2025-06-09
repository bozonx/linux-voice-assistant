<template>
  <div v-if="overlayStatus === 'TRANSLATING'" class="overlay-process">
    <div>Перевод...</div>
  </div>
  <div v-if="overlayStatus === 'VOICE_RECOGNITION'" class="overlay-process">
    <div>Распознавание голоса...</div>
    <div>
      <button class="dialog-button" @click="onStopRecognition">Остановить</button>
    </div>
  </div>
  <div v-if="overlayStatus === 'REPUNCTUATION'" class="overlay-process">
    <div>Коррекция пунктуации...</div>
  </div>
</template>

<script setup lang="ts">
import { endOverlay, overlayStatus } from '../composables/useOverlay';

const onStopRecognition = () => {
  endOverlay();
};
</script>

<style scoped>
.overlay-process {
  position: absolute;
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

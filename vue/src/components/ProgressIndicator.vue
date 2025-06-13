<template>
  <div v-if="overlayStore.status === 'TRANSLATING'" class="overlay-process">
    <div>Перевод...</div>
  </div>
  <div v-if="overlayStore.status === 'VOICE_RECOGNITION'" class="overlay-process">
    <div>Распознавание голоса...</div>
    <div class="flex gap-2">
      <button class="dialog-button" @click="onStopRecognition">Прервать</button>
      <button class="dialog-button" @click="onGoToEditor">В редактор</button>
    </div>
    <div class="text-sm mt-4">
      <div>q - выйти</div>
      <div>w - RU ➡️ EN > вставить</div>
      <div>e - RU ➡️ ES > вставить</div>
      <div>a - в редактор</div>
      <div>s - вставить в окно</div>
      <div>d - дело в календарь</div>
      <div>f - быстрая заметка в Obsidian</div>
      <div>g - поиск в интернете</div>
    </div>

  </div>
  <div v-if="overlayStore.status === 'REPUNCTUATION'" class="overlay-process">
    <div>Коррекция пунктуации...</div>
  </div>
</template>

<script setup lang="ts">
import { useOverlayStore } from '../stores/overlay';
import { useVoiceRecognitionStore } from '../stores/voiceRecognition';

const overlayStore = useOverlayStore();
const voiceRecognitionStore = useVoiceRecognitionStore();

const onStopRecognition = () => {
  voiceRecognitionStore.stopRecognizing();
};

const onGoToEditor = () => {
  voiceRecognitionStore.startRepunctuation();
};
</script>

<style scoped>
.overlay-process {
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

<template>
  <div v-if="overlayStore.status === 'VOICE_RECOGNITION'" class="overlay-process">
    <div>Распознавание голоса...</div>
    <div class="flex gap-2">
      <button class="dialog-button" @click="onStopRecognition">Прервать</button>
      <button class="dialog-button" @click="onFromRecognitionToEditor">В редактор</button>
    </div>
    <div class="text-sm mt-4">
      <div>Esc - в редактор</div>
      <div>q - закрыть программу</div>
      <div>w - ➡️ EN > вставить</div>
      <div>e - ➡️ ES > вставить</div>
      <div>e - ➡️ RU > вставить</div>
      <div>a - вставить в окно</div>
      <div>s - редактирование и вставка (пресет 1)</div>
      <div>f - быстрая заметка в Obsidian</div>
      <div>g - поиск в интернете</div>
      <div>z - в базу знаний</div>
      <div>x - редактирование и вставка (пресет 2)</div>
      <div>c - дело в календарь</div>
      <div>v - спросить у AI</div>
    </div>

  </div>
  <div v-if="overlayStore.status === 'HOTKEYS'" class="overlay-process">
    <div>Что делаем с выделенным текстом?</div>
    <div class="flex gap-2">
      <button class="dialog-button" @click="onGoToEditor">В редактор</button>
    </div>
    <div class="text-sm mt-4">
      <div>Esc - в редактор</div>
      <div>q - закрыть программу</div>
      <div>w - ➡️ EN > вставить</div>
      <div>e - ➡️ ES > вставить</div>
      <div>r - ➡️ RU > вставить</div>
      <div>a - вставить в окно</div>
      <div>s - редактирование и вставка (пресет 1)</div>
      <div>d - коррекция и вставка</div>
      <div>f - быстрая заметка в Obsidian</div>
      <div>g - поиск в интернете</div>
      <div>z - в базу знаний</div>
      <div>x - редактирование и вставка (пресет 2)</div>
      <div>c - дело в календарь</div>
      <div>v - спросить у AI</div>
    </div>
  </div>
  <div v-if="overlayStore.status === 'REPUNCTUATION'" class="overlay-process">
    <div>Коррекция пунктуации...</div>
  </div>
  <div v-if="overlayStore.status === 'ASKING_AI'" class="overlay-process">
    <div>Запрос к AI...</div>
  </div>
  <div v-if="overlayStore.status === 'AI_RESULT'" class="overlay-process">
    <div>Результат от AI</div>
    <div class="ai-result">{{ overlayStore.message }}</div>
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

const onFromRecognitionToEditor = () => {
  voiceRecognitionStore.startRepunctuation();
};

const onGoToEditor = () => {
  overlayStore.hideOverlay();
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

.ai-result {
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  max-width: 80%;
}
</style>

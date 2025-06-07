<template>
  <div id="voice-recognition-process" :class="{ active: isActive }">
    <div>Распознавание голоса...</div>
    <div>
      <button class="mini-button" @click="onStop">Остановить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: 'stop'): void;
}>();

const onStop = () => {
  emit('stop');
};
</script>

<style scoped>
#voice-recognition-process {
  display: none;
}

#voice-recognition-process.active {
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

.mini-button {
  background-color: #1b72b7;
  color: white;
  border: none;
  padding: 2px 6px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
}

.mini-button:hover {
  background-color: #1976D2;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style> 
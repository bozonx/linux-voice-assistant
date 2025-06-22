<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.MENU">
    <InsertShortCuts @back="overlayStore.hideOverlay" @editPresets="overlayStore.showMenu"
       :showToEditor="false" :text="mainInputStore.value" />
  </OverlayOneColumn>

  <OverlayOneColumn v-if="overlayMode === OverlayMode.EDIT_PRESETS">
    <EditPresets @close="overlayStore.hideOverlay" :text="mainInputStore.value" />
  </OverlayOneColumn>

  <OverlayOneColumn v-if="overlayMode === OverlayMode.ASKING_AI">
    <InProgressMessage :ai="true" />
  </OverlayOneColumn>

  <Editor @toMenu="overlayStore.showMenu" />

  <div class="navigation">
    <RouterLink to="/history">История</RouterLink>
    <RouterLink to="/config">Настройки</RouterLink>
    <RouterLink to="/write">Режим написания</RouterLink>
    <RouterLink to="/voice">Режим голоса</RouterLink>
    <RouterLink to="/edit">Режим редактирования</RouterLink>
    <RouterLink to="/select">Режим выбора</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useMainInputStore } from '../stores/mainInput';
import { OverlayMode, useOverlayStore } from '../stores/mainOverlay';

const mainInputStore = useMainInputStore();
const overlayStore = useOverlayStore();
const overlayMode = computed(() => overlayStore.overlayMode);
</script>

<style scoped>
.navigation {
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: right;
}

.navigation a {
  text-decoration: none;
  color: #444;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  transition: background-color 0.3s ease;
}

.navigation a:hover {
  color: #000000;
  text-decoration: underline;
}
</style>
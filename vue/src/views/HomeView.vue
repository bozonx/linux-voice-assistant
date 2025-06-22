<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.TEXT_DO_SHORTCUTS">
    <InsertShortCuts @back="toEditor" @editPresets="overlayStore.showEditPresets"
       :showToEditor="false" :text="mainInputStore.value" />
  </OverlayOneColumn>

  <OverlayOneColumn v-if="overlayMode === OverlayMode.EDIT_PRESETS">
    <EditPresets @close="toEditor" :text="mainInputStore.value" />
  </OverlayOneColumn>

  <OverlayOneColumn v-if="overlayMode === OverlayMode.ASKING_AI">
    <InProgressMessage :ai="true" />
  </OverlayOneColumn>

  <div @keyup="handleKeyUp">
    <div>
      <MainInput ref="mainInput"/>
      <TextEditToolbar/>
    </div>

    <div>
      <h2 class="section-title">Действия</h2>
      <ActionsMenu />
    </div>

    <div v-if="ipcStore.data?.windowId">
      <h2 class="section-title">Трансформирование и вставка</h2>
      <TransformAndInsertMenu />
    </div>

    <div class="navigation">
      <RouterLink to="/history">История</RouterLink>
      <RouterLink to="/config">Настройки</RouterLink>
      <RouterLink to="/write">Режим написания</RouterLink>
      <RouterLink to="/voice">Режим голоса</RouterLink>
      <RouterLink to="/edit">Режим редактирования</RouterLink>
      <RouterLink to="/select">Режим выбора</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainInputStore } from '../stores/mainInput';
import { OverlayMode, useOverlayStore } from '../stores/mainOverlay';
import { useIpcStore } from '../stores/ipc';
import { useRouteParams } from '../stores/routeParams';

const mainInputStore = useMainInputStore();
const overlayStore = useOverlayStore();
const overlayMode = computed(() => overlayStore.overlayMode);
const ipcStore = useIpcStore();
const routeParamsStore = useRouteParams();

// Обработка query параметра text при загрузке страницы
onMounted(() => {
  if (routeParamsStore.params.text) {
    mainInputStore.setValue(routeParamsStore.params.text);
    nextTick(() => {
      mainInputStore.focus();
    });
  }
});

function toEditor() {
  overlayStore.hideOverlay();
  nextTick(() => {
    mainInputStore.focus();
  })
}

// function toShortcuts() {
//   overlayStore.showTextDoShortcuts();
// }

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Escape") {
    overlayStore.showTextDoShortcuts();
  }
}
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
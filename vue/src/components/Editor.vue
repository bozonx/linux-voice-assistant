<template>
  <Overlay v-if="overlayMode === OverlayMode.MENU">
    <InsertMenu @back="overlayStore.hideOverlay"
       :showToEditor="false" :text="mainInputStore.value" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.EDIT_PRESETS">
    <EditPresetsMenu @close="overlayStore.hideOverlay" :text="mainInputStore.value" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.CORRECTION">
    <InProgressMessage :correction="true" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.DIFF">
    <DiffMenu :oldText="mainInputStore.value" :newText="overlayStore.diffText" @close="overlayStore.hideOverlay" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.VOICE_RECOGNITION">
    <VoiceRecognitionMenu @close="overlayStore.hideOverlay" @corrected="handleCorrected" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.TRANSLATE">
    <TranslateMenu :text="mainInputStore.value" @back="overlayStore.hideOverlay" />
  </Overlay>

  <div @keyup="handleKeyUp">
    <div>
      <MainInput ref="mainInput"/>
      <p class="main-input-hint">Hint: press Esc to open menu. можно выделить текст в инпуте, и тогда изменения будут касаться только того, что выделено.</p>
      <EditorTextToolbar/>
    </div>

    <div>
      <h2 class="section-title">Действия</h2>
      <EditorActions />
    </div>

    <div v-if="ipcStore.params?.windowId">
      <h2 class="section-title">Трансформирование и вставка</h2>
      <EditorInsertToolbar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { useRouteParams } from '../stores/routeParams';
import { useMainInputStore } from '../stores/mainInput';
import { OverlayMode, useOverlayStore } from '../stores/mainOverlay';

const ipcStore = useIpcStore();
const routeParamsStore = useRouteParams();
const mainInputStore = useMainInputStore();
const overlayStore = useOverlayStore();
const overlayMode = computed(() => overlayStore.overlayMode);

onMounted(() => {
  if (routeParamsStore.params.text) {
    mainInputStore.setValue(routeParamsStore.params.text);
    nextTick(() => {
      mainInputStore.focus();
    });
  }
});

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Escape") {
    overlayStore.showMenu();
  }
}

function handleCorrected(text: string) {
  mainInputStore.setValueAtCursor(text);
  overlayStore.hideOverlay();
}
</script>

<style scoped>
</style>
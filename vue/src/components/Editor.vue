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

  <OverlayOneColumn v-if="overlayMode === OverlayMode.DIFF">
    <DiffMenu :oldText="mainInputStore.value" :newText="overlayStore.diffText" @close="overlayStore.hideOverlay" />
  </OverlayOneColumn>

  <OverlayOneColumn v-if="overlayMode === OverlayMode.TRANSLATE_PREVIEW">
    <PreviewMenu :text="overlayStore.translateResult" @close="overlayStore.hideOverlay" />
  </OverlayOneColumn>

  <div @keyup="handleKeyUp">
    <div>
      <MainInput ref="mainInput"/>
      <p class="main-input-hint">Hint: press Esc to open menu. можно выделить текст в инпуте, и тогда изменения будут касаться только того, что выделено.</p>
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
</script>

<style scoped>
</style>
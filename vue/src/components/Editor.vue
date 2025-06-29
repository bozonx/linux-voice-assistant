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
      <div class="flex gap-4">
        <div class="flex-1">
          <MainInput ref="mainInput"/>
        </div>
        <div class="flex gap-2 flex-col">
          <Button small primary @click="overlayStore.showVoiceRecognition">Голосовой ввод</Button>
          <Button small primary @click="mainInputStore.clear">Очистить</Button>
          <Button small primary @click="mainInputStore.selectAll">Выбрать всё</Button>
        </div>
      </div>
      
      <p class="main-input-hint">Hint: press Esc to open menu. можно выделить текст в инпуте, и тогда изменения будут касаться только того, что выделено.</p>

      <div class="flex gap-1 w-full flex-wrap">
        <Button v-for="item in menuStore.getEditMenu()" :key="item.name" small secondary :icon="item.icon" @click="editMode(item.action)">{{ item.name }}</Button>
      </div>
    </div>

    <div>
      <h2 class="section-title">Действия</h2>

      <div class="flex gap-1 w-full flex-wrap">
        <Button  v-for="item in menuStore.getActionsMenu()" :key="item.name" big primary :icon="item.icon" @click="prepareActionText(item.action)">{{ item.name }}</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouteParams } from '../stores/routeParams';
import { useMainInputStore } from '../stores/mainInput';
import { OverlayMode, useOverlayStore } from '../stores/mainOverlay';
import { useMenuStore } from '../stores/menu';
import miniToastr from "mini-toastr";

const routeParamsStore = useRouteParams();
const mainInputStore = useMainInputStore();
const overlayStore = useOverlayStore();
const overlayMode = computed(() => overlayStore.overlayMode);
const menuStore = useMenuStore();

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

const prepareActionText = async (cb: (text: string) => Promise<void>): Promise<void> => {
  let value = mainInputStore.value;

  if (mainInputStore.selectedText) {
    value = mainInputStore.selectedText;
  }

  value = value.trim();

  if (!value) {
    miniToastr.error("Текст не выбран");
    return;
  }

  return cb(value);
};

async function editMode(cb: (text: string) => Promise<string>): Promise<void> {
  let value = mainInputStore.value;

  if (mainInputStore.selectedText) {
    value = mainInputStore.selectedText;
  }   

  value = value.trim();

  if (!value) {
    miniToastr.error("Текст не выбран");
    return;
  }

  const result = await cb(value);

  mainInputStore.selectedText
    ? mainInputStore.replaceSelection(result)
    : mainInputStore.setValue(result);
}
</script>

<style scoped>

.section-title {
  margin-top: 8px;
  margin-bottom: 2px;
  font-size: 14px;
}

</style>
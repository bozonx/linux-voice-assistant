<template>
  <div>
    <TextPreview :text="props.text" />
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div v-if="props.showBackButton">Esc - <button @click="props.onBack()">
        <span v-if="props.escToEditor">в редактор</span>
        <span v-else>назад</span>
      </button></div>
      <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
      <div v-for="(preset, index) in ipcStore.params?.userConfig.aiRules.deepEdit" :key="preset.description">
        {{ PRESETS_KEYS[index] }} - <button @click="makeDiff(index)">{{ preset.description }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../../composables/useCallApi';
import { PRESETS_KEYS } from '../../types';
import { useIpcStore } from '../../stores/ipc';
import { useCallAi } from '../../composables/useCallAi';
import { useRouteParams } from '../../stores/routeParams';
import { useMainInputStore } from '../../stores/mainInput';
import { useOverlayStore } from '../../stores/mainOverlay';
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';
import miniToastr from "mini-toastr";

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  escToEditor: {
    type: Boolean,
    default: false
  },
  showBackButton: {
    type: Boolean,
    default: true
  },
  onBack: {
    type: Function,
    default: () => {}
  }
});

const routeParamsStore = useRouteParams();
const router = useRouter();
const mainInputStore = useMainInputStore();
const overlayStore = useOverlayStore();
const menuModalsStore = useMenuModalsStore();
const ipcStore = useIpcStore();
const { deepEdit } = useCallAi();
const { closeWindow } = useCallApi();
const inFocusButton = ref<HTMLButtonElement | null>(null);
const newText = ref('');
const appConfig = ipcStore.params!.appConfig;

onMounted(() => {
  nextTick(() => {
    inFocusButton.value?.focus();
  })
})

function goToEditor() {
  if (props.text?.trim()) {
    routeParamsStore.setParams({ text: props.text });
    mainInputStore.setValue(props.text);
  }

  overlayStore.hideOverlay();
  router.push("/");
}

async function makeDiff(index: number) {
  if (props.text.length < appConfig.minCorrectionLength) {
    miniToastr.warn('Слишком короткий текст для коррекции');

    return;
  }

  menuModalsStore.setPendingModal({
    ai: true,
  });

  newText.value = await deepEdit(index, props.text);

  menuModalsStore.clearPendingModal();

  menuModalsStore.nextModal(MenuModals.DIFF, {
    oldText: props.text,
    newText: newText.value,
  });
}

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Escape") {
    if (!props.showBackButton) return;

    if (props.escToEditor) {
      goToEditor();
    }
    else {
      props.onBack();
    }
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  
  let codeLetter;
  if (event.code.length === 4 && event.code.startsWith("Key")) {
    codeLetter = event.code.slice(3).toLowerCase();
  }
  
  if (codeLetter && PRESETS_KEYS.includes(codeLetter)) {
    makeDiff(PRESETS_KEYS.indexOf(codeLetter));
  }
}
</script>

<style scoped>
</style>
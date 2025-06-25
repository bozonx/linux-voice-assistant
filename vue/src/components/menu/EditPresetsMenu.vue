<template>
  <Overlay v-if="overlayMode === OverlayMode.IN_PROGRESS">
    <InProgressMessage :ai="true" />
  </Overlay>

  <Overlay v-if="overlayMode === OverlayMode.DIFF">
    <DiffMenu :oldText="props.text" :newText="newText" @close="overlayMode = OverlayMode.NONE" />
  </Overlay>

  <div>
    <TextPreview :text="props.text" />
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div v-if="props.showBackButton">Esc - <button @click="close">
        <span v-if="props.escToEditor">в редактор</span>
        <span v-else>назад</span>
      </button></div>
      <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
      <div v-for="(preset, index) in ipcStore.data?.userConfig.aiRules.deepEdit" :key="preset.description">
        {{ EDIT_PRESET_KEYS[index] }} - <button @click="makeDiff(index)">{{ preset.description }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../../composables/useCallApi';
import { EDIT_PRESET_KEYS } from '../../types';
import { useIpcStore } from '../../stores/ipc';
import { useCallAi } from '../../composables/useCallAi';
import { useRouteParams } from '../../stores/routeParams';
import { useMainInputStore } from '../../stores/mainInput';
import { useOverlayStore } from '../../stores/mainOverlay';

enum OverlayMode {
  DIFF = "diff",
  IN_PROGRESS = "in-progress",
  NONE = "none",
}

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
});

const routeParamsStore = useRouteParams();
const router = useRouter();
const mainInputStore = useMainInputStore();
const overlayStore = useOverlayStore();
const ipcStore = useIpcStore();
const { deepEdit } = useCallAi();
const { closeWindow } = useCallApi();
const inFocusButton = ref<HTMLButtonElement | null>(null);
const overlayMode = ref(OverlayMode.NONE);
const newText = ref('');

const emit = defineEmits<{
  (e: 'close'): void
}>();

onMounted(() => {
  nextTick(() => {
    inFocusButton.value?.focus();
  })
})

function close() {
  emit('close');
}

function goToEditor() {
  if (props.text?.trim()) {
    routeParamsStore.setParams({ text: props.text });
    mainInputStore.setValue(props.text);
  }

  overlayStore.hideOverlay();
  router.push("/");
}

async function makeDiff(index: number) {
  overlayMode.value = OverlayMode.IN_PROGRESS;
  newText.value = await deepEdit(index, props.text);
  overlayMode.value = OverlayMode.DIFF;
}

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Escape") {
    if (!props.showBackButton) return;

    if (props.escToEditor) {
      goToEditor();
    }
    else {
      close();
    }
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
  
  let codeLetter;
  if (event.code.length === 4 && event.code.startsWith("Key")) {
    codeLetter = event.code.slice(3).toLowerCase();
  }
  
  if (codeLetter && EDIT_PRESET_KEYS.includes(codeLetter)) {
    makeDiff(EDIT_PRESET_KEYS.indexOf(codeLetter));
  }
}
</script>

<style scoped>
</style>
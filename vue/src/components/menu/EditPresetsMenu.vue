<template>
  <div>
    <TextPreview :text="props.text" />
    <div @keyup.prevent="handleKeyUp" class="shortcuts-list">
      <div v-for="(preset, index) in ipcStore.params?.userConfig.aiRules.deepEdit" :key="preset.description">
        {{ PRESETS_KEYS[index] }} - <button @click="makeDiff(index)">{{ preset.description }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PRESETS_KEYS } from '../../types';
import { useIpcStore } from '../../stores/ipc';
import { useCallAi } from '../../composables/useCallAi';
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';
import miniToastr from "mini-toastr";

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
});

const menuModalsStore = useMenuModalsStore();
const ipcStore = useIpcStore();
const { deepEdit } = useCallAi();
const inFocusButton = ref<HTMLButtonElement | null>(null);
const newText = ref('');
const appConfig = ipcStore.params!.appConfig;

onMounted(() => {
  nextTick(() => {
    inFocusButton.value?.focus();
  })
})

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
  let codeLetter;
  if (event.code.length === 4 && event.code.startsWith("Key")) {
    codeLetter = event.code.slice(3).toLowerCase();
  }
  
  if (codeLetter && PRESETS_KEYS.includes(codeLetter)) {
    makeDiff(PRESETS_KEYS.indexOf(codeLetter));
  }
}
</script>
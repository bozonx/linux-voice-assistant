<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1 class="menu-title">Перевести</h1>
    <div class="flex-1 relative">
      <TextPreview :text="props.text" class="absolute" />
    </div>

    <ShortcutList :text="props.text" :leftLetterKeys="leftLetterKeys" />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { useCallAi } from '../../composables/useCallAi';
import miniToastr from "mini-toastr";
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';

const ipcStore = useIpcStore();
const appConfig = ipcStore.params!.appConfig;
const { translateText } = useCallAi();
const menuModalsStore = useMenuModalsStore();

const props = defineProps<{
  text: string;
}>();

const translate = async (toLangNum: number) => {
  const trimmedText = props.text.trim();
  
  if (!trimmedText) {
    miniToastr.warn('Нет текста для перевода');

    return;
  }

  if (trimmedText.length < appConfig.minCorrectionLength) {
    miniToastr.warn('Слишком короткий текст для перевода');

    return;
  }

  menuModalsStore.setPendingModal({ ai: true });
  
  const newText = await translateText(toLangNum, trimmedText);

  menuModalsStore.clearPendingModal();

  menuModalsStore.nextModal(MenuModals.PREVIEW, {
    text: newText,
  });
};

const leftLetterKeys = computed(() => 
  ipcStore.params!.userConfig.toTranslateLanguages.map((lang, index) => 
    ({name: lang, action: () => translate(index)})));
</script>
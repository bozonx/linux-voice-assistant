<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1>Перевести</h1>

    <div class="flex-1">
      <TextPreview :text="props.text" />
    </div>

    <ShortcutList :text="props.text" :leftLetterKeys="leftLetterKeys" />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { useCallAi } from '../../composables/useCallAi';
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';
import useToast from '../../composables/useToast';
import { useHistoryStore } from '../../stores/history';

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});

const ipcStore = useIpcStore();
const appConfig = ipcStore.params!.appConfig;
const { translateText } = useCallAi();
const menuModalsStore = useMenuModalsStore();
const historyStore = useHistoryStore();
const { toast } = useToast();
const leftLetterKeys = computed(() => 
  ipcStore.params!.userConfig.toTranslateLanguages.map((lang, index) => 
    ({name: lang, action: () => translate(index)})));

const translate = async (toLangNum: number) => {
  const trimmedText = props.text.trim();
  
  if (!trimmedText) {
    toast('Нет текста для перевода', 'warn');

    return;
  }

  if (trimmedText.length < appConfig.minCorrectionLength) {
    toast('Слишком короткий текст для перевода', 'warn');

    return;
  }

  menuModalsStore.setPendingModal({ ai: true });
  
  const newText = await translateText(toLangNum, trimmedText);  

  await historyStore.saveTransformHistory(newText);

  menuModalsStore.nextModal(MenuModals.PREVIEW, {
    text: newText,
  });
};
</script>
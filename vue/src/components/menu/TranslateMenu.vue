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
import { MenuModals, useMenuModalsStore } from '../../stores/menuModals';
import useToast from '../../composables/useToast';
import { useNavPanelStore } from '../../stores/navPanel';

const ipcStore = useIpcStore();
const appConfig = ipcStore.params!.appConfig;
const { translateText } = useCallAi();
const menuModalsStore = useMenuModalsStore();
const { toast } = useToast();
const navPanelStore = useNavPanelStore();

const props = defineProps<{
  text: string;
}>();

navPanelStore.resetNavParams({
  escBtnAction: menuModalsStore.back
});

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

  menuModalsStore.clearPendingModal();

  menuModalsStore.nextModal(MenuModals.PREVIEW, {
    text: newText,
  });
};

const leftLetterKeys = computed(() => 
  ipcStore.params!.userConfig.toTranslateLanguages.map((lang, index) => 
    ({name: lang, action: () => translate(index)})));
</script>
<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1>Задание для AI</h1>

    <div class="flex-1">
      <TextPreview :text="props.text" />
    </div>

    <ShortcutList
      :text="props.text"
      :leftLetterKeys="leftLetterKeys"
      :stopListening="props.stopListening"
      :toEditorVisible="!routeParamsStore.isEditorPage()" />
  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from "../../stores/ipc";
import { useCallAi } from "../../composables/useCallAi";
import { MenuModals, useMenuModalsStore } from "../../stores/menuModals";
import useToast from '../../composables/useToast';
import { useRouteParams } from '../../stores/routeParams';
import { useHistoryStore } from '../../stores/history';

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  stopListening: {
    type: Boolean,
    default: false,
  },
});

const routeParamsStore = useRouteParams();
const menuModalsStore = useMenuModalsStore();
const ipcStore = useIpcStore();
const { aiTasks } = useCallAi();
const appConfig = ipcStore.params!.appConfig;
const { toast } = useToast();
const historyStore = useHistoryStore();
const leftLetterKeys = computed(() =>
  ipcStore.params!.userConfig.aiTasks.map((item, index) => ({
    name: item.name,
    action: () => makeDiff(index),
  }))
);

async function makeDiff(index: number) {
  const trimmedText = props.text.trim();
  
  if (!trimmedText) {
    toast('Нет текста для обработки', 'warn');

    return;
  }

  if (trimmedText.length < appConfig.minCorrectionLength) {
    toast("Слишком короткий текст для обработки", "warn");

    return;
  }

  menuModalsStore.setPendingModal({ ai: true });

  const newText = await aiTasks(index, trimmedText);

  await historyStore.saveTransformHistory(newText);

  menuModalsStore.nextModal(MenuModals.DIFF, {
    oldText: props.text,
    newText,
  });
}
</script>

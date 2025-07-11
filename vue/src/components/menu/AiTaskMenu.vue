<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1 class="menu-title">Задание для AI</h1>
    <div class="flex-1 relative">
      <TextPreview :text="props.text" class="absolute" />
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
  
  const routeParamsStore = useRouteParams();

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

  const menuModalsStore = useMenuModalsStore();
  const ipcStore = useIpcStore();
  const { aiTasks } = useCallAi();
  const appConfig = ipcStore.params!.appConfig;
  const { toast } = useToast();
  const historyStore = useHistoryStore();

  async function makeDiff(index: number) {
    if (props.text.length < appConfig.minCorrectionLength) {
      toast("Слишком короткий текст для обработки", "warn");

      return;
    }

    menuModalsStore.setPendingModal({ ai: true });

    const newText = await aiTasks(index, props.text);

    await historyStore.saveTransformHistory(newText);

    menuModalsStore.clearPendingModal();

    menuModalsStore.nextModal(MenuModals.DIFF, {
      oldText: props.text,
      newText,
    });
  }

  const leftLetterKeys = computed(() =>
    ipcStore.params!.userConfig.aiTasks.map((item, index) => ({
      name: item.name,
      action: () => makeDiff(index),
    }))
  );
</script>

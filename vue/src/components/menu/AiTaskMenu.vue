<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1 class="menu-title">Задание для AI</h1>
    <div class="flex-1 relative">
      <TextPreview :text="props.text" class="absolute" />
    </div>

    <ShortcutList :text="props.text" :leftLetterKeys="leftLetterKeys" />
  </div>
</template>

<script setup lang="ts">
  import { useIpcStore } from "../../stores/ipc";
  import { useCallAi } from "../../composables/useCallAi";
  import { MenuModals, useMenuModalsStore } from "../../stores/menuModals";
  import miniToastr from "mini-toastr";

  const props = defineProps({
    text: {
      type: String,
      default: "",
    },
  });

  const menuModalsStore = useMenuModalsStore();
  const ipcStore = useIpcStore();
  const { aiTasks } = useCallAi();
  const appConfig = ipcStore.params!.appConfig;

  async function makeDiff(index: number) {
    if (props.text.length < appConfig.minCorrectionLength) {
      miniToastr.warn("Слишком короткий текст для обработки");

      return;
    }

    menuModalsStore.setPendingModal({ ai: true });

    const newText = await aiTasks(index, props.text);

    menuModalsStore.clearPendingModal();

    menuModalsStore.nextModal(MenuModals.DIFF, {
      oldText: props.text,
      newText,
    });
  }

  const leftLetterKeys = computed(() =>
    ipcStore.params!.userConfig.aiTasks.map((item, index) => ({
      name: item.description,
      action: () => makeDiff(index),
    }))
  );
</script>

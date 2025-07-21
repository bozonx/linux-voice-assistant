<template>
<ContentPadding>
  <Editor v-if="ipcStore.params">
    <div class="mt-4 flex flex-row gap-2 text-xs">
      <RouterLink to="/write">Режим написания</RouterLink>
      <RouterLink to="/voice">Режим голоса</RouterLink>
      <RouterLink to="/aiTasks">Режим редактирования</RouterLink>
      <RouterLink to="/select">Режим выбора</RouterLink>
    </div>
  </Editor>
</ContentPadding>
</template>

<script setup lang="ts">
  import { useIpcStore } from "../stores/ipc";
  import { useNavPanelStore } from "../stores/navPanel";
  import { MenuModals, useMenuModalsStore } from "../stores/menuModals";
  import { useMainInputStore } from "../stores/mainInput";

  const ipcStore = useIpcStore();
  const navPanelStore = useNavPanelStore();
  const menuModalsStore = useMenuModalsStore();
  const mainInputStore = useMainInputStore();

  navPanelStore.resetNavParams({
    escBtnAction: () => {
      menuModalsStore.nextModal(MenuModals.INSERT, {
        text: mainInputStore.value,
      });
    },
  });
</script>

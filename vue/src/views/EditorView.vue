<template>
  <Editor v-if="ipcStore.params">
    <div class="mt-4 flex flex-row gap-2 text-xs">
      <RouterLink to="/write">Режим написания</RouterLink>
      <RouterLink to="/voice">Режим голоса</RouterLink>
      <RouterLink to="/edit">Режим редактирования</RouterLink>
      <RouterLink to="/select">Режим выбора</RouterLink>
    </div>
  </Editor>
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
    escBtnText: "Меню",
    escBtnAction: () => {
      menuModalsStore.nextModal(MenuModals.INSERT, {
        text: mainInputStore.value,
      });
    },
    toEditorBtnVisible: false,
  });
</script>

<template>
  <div class="navbar bg-neutral text-neutral-content shadow-sm panel">
    <div class="flex-1 flex flex-row gap-2">
      <Button
        v-if="navPanelStore.params.escBtnAction"
        sm
        neutral
        @click="navPanelStore.params.escBtnAction"
        >{{ escBtnText }}</Button
      >
    </div>
    <div class="flex flex-row gap-2" v-if="navPanelStore.params.rightPanelVisible">
      <Button :disabled="router.currentRoute.value.path === '/editor'" sm neutral @click="routeParamsStore.toEditor()">Редактор</Button>
      <Button :disabled="router.currentRoute.value.path === '/history'" sm neutral @click="openHistory">История</Button>
      <Button :disabled="router.currentRoute.value.path === '/config'" sm neutral @click="openSettings">Настройки</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { useNavPanelStore } from "../stores/navPanel";
  import { useRouteParams } from "../stores/routeParams";
  import { useMenuModalsStore } from "../stores/menuModals";

  const router = useRouter();
  const routeParamsStore = useRouteParams();
  const navPanelStore = useNavPanelStore(); 
  const menuModalsStore = useMenuModalsStore();

  const escBtnText = computed(() => {
    return navPanelStore.params.escBtnText + " (Esc)";
  });

  function openSettings() {
    menuModalsStore.closeAll();
    router.push("/config");
  }

  function openHistory() {
    menuModalsStore.closeAll();
    router.push("/history");
  }
</script>

<style scoped>
  .panel {
    padding: 0.5rem 1.25rem;
  }
</style>

<template>
  <div class="panel flex flex-row">
    <div class="flex-1 flex flex-row gap-2">
      <Button
        v-if="navPanelStore.escBtnVisible"
        small
        secondary
        @click="navPanelStore.escBtnAction"
        >{{ escBtnText }}</Button
      >
      <Button v-if="isEditorOpen()" small secondary @click="goToEditor"
        >в редактор (Tab)</Button
      >
      <Button small secondary @click="closeWindow">закрыть (Ctrl + q)</Button>
    </div>
    <div class="flex flex-row gap-2">
      <Button small secondary @click="openSettings">Настройки</Button>
      <Button small secondary @click="openHistory">История</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouteParams } from "../stores/routeParams";
  import { useRouter } from "vue-router";
  import { useMenuModalsStore } from "../stores/menuModals";
  import { useCallApi } from "../composables/useCallApi";
  import {
    useGlobalEvents,
    GlobalEvents,
  } from "../composables/useGlobalEvents";
  import { useNavPanelStore } from "../stores/navPanel";

  const router = useRouter();
  const routeParamsStore = useRouteParams();
  const menuModalsStore = useMenuModalsStore();
  const { closeWindow } = useCallApi();
  const { globalEvents } = useGlobalEvents();
  const navPanelStore = useNavPanelStore();
  const escBtnText = computed(() => navPanelStore.escBtnText + " (Esc)");

  const keyUpHanlderIndex = globalEvents.addListener(
    GlobalEvents.KEY_UP,
    handleShortCutKeyUp
  );

  onUnmounted(() => {
    globalEvents.removeListener(keyUpHanlderIndex);
  });

  function isEditorOpen() {
    return router.currentRoute.value.path !== "/";
  }

  function goToEditor() {
    // if (props.text?.trim()) {
    //   routeParamsStore.setParams({ text: props.text });
    // }

    menuModalsStore.closeAll();

    if (isEditorOpen()) {
      router.push("/");
    }
  }

  function openSettings() {
    router.push("/config");
  }

  function openHistory() {
    router.push("/history");
  }

  function handleShortCutKeyUp(event: KeyboardEvent) {
    if (event.code === "Escape") {
      navPanelStore.escBtnAction?.();
    } else if (event.code === "KeyQ" && event.ctrlKey) {
      closeWindow();
    } else if (event.code === "Tab") {
      if (isEditorOpen()) return;

      goToEditor();
    }
  }
</script>

<style scoped>
  .panel {
    padding: 0.25rem 1.25rem;
  }
</style>

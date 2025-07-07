<template>
  <div class="panel flex flex-row">
    <div class="flex-1 flex flex-row gap-2">
      <Button
        v-if="navPanelStore.params.escBtnVisible"
        small
        secondary
        @click="navPanelStore.params.escBtnAction"
        >{{ escBtnText }}</Button
      >
      <Button v-if="navPanelStore.params.toEditorBtnVisible" small secondary @click="toEditor()"
        >в редактор (Tab)</Button
      >
    </div>
    <div class="flex flex-row gap-2">
      <Button small secondary @click="openHistory">История</Button>
      <Button small secondary @click="openSettings">Настройки</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { useNavPanelStore } from "../stores/navPanel";
  import { useRouteParams } from "../stores/routeParams";
  import { useKeysStore } from "../stores/keys";
  import { useGlobalEvents, GlobalEvents } from "../composables/useGlobalEvents";
  
  const router = useRouter();
  const { globalEvents } = useGlobalEvents();
  const routeParamsStore = useRouteParams();
  const navPanelStore = useNavPanelStore();
  const keysStore = useKeysStore();
  const escBtnText = computed(() => navPanelStore.params.escBtnText + " (Esc)");

  let keyUpHanlderIndex: number;

  onMounted(() => {
    keyUpHanlderIndex = globalEvents.addListener(GlobalEvents.KEY_UP, handleShortCutKeyUp);
  });

  onUnmounted(() => {
    globalEvents.removeListener(keyUpHanlderIndex);
  });


  function openSettings() {
    router.push("/config");
  }

  function openHistory() {
    router.push("/history");
  }

  function toEditor() {
    routeParamsStore.toEditor(navPanelStore.params.toEditorText);
  }

  function handleShortCutKeyUp(event: KeyboardEvent) {
    if (event.code === "Escape") {
      navPanelStore.params.escBtnAction?.();
    } else if (event.code === "Tab" && !navPanelStore.params.toEditorBtnVisible) {
      toEditor();
    }
  }
</script>

<style scoped>
  .panel {
    padding: 0.25rem 1.25rem;
  }
</style>

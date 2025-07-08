<template>
  <div class="panel flex flex-row">
    <div class="flex-1 flex flex-row gap-2">
      <Button
        v-if="navPanelStore.params.escBtnVisible"
        small
        secondary
        @click="escBtnAction"
        >{{ escBtnText }}</Button
      >
      <!-- <Button v-if="navPanelStore.params.toEditorBtnVisible" small secondary @click="toEditor()"
        >в редактор (Tab)</Button
      > -->
    </div>
    <div class="flex flex-row gap-2" v-if="navPanelStore.params.rightPanelVisible">
      <Button :disabled="navPanelStore.params.toEditorBtnDisabled" small secondary @click="routeParamsStore.toEditor()">Редактор</Button>
      <Button :disabled="navPanelStore.params.historyBtnDisabled" small secondary @click="openHistory">История</Button>
      <Button :disabled="navPanelStore.params.settingsBtnDisabled" small secondary @click="openSettings">Настройки</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { DEFAULT_PARAMS, useNavPanelStore } from "../stores/navPanel";
  import { useRouteParams } from "../stores/routeParams";
  import { useGlobalEvents, GlobalEvents } from "../composables/useGlobalEvents";
  import { useMenuModalsStore } from "../stores/menuModals";

  const router = useRouter();
  const { globalEvents } = useGlobalEvents();
  const routeParamsStore = useRouteParams();
  const navPanelStore = useNavPanelStore(); 
  const menuModalsStore = useMenuModalsStore();
  let keyUpHanlderIndex: number;

  const escBtnText = computed(() => {
    let result = navPanelStore.params.escBtnText;

    if (menuModalsStore.anyModalOpen) {
      result = DEFAULT_PARAMS.escBtnText;
    }

    return result + " (Esc)";
  });
  const escBtnAction = computed(() => {
    if (menuModalsStore.anyModalOpen) {
      return menuModalsStore.back;
    }

    return navPanelStore.params.escBtnAction;
  });


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

  // function toEditor() {
  //   routeParamsStore.toEditor(navPanelStore.params.toEditorText);
  // }

  function handleShortCutKeyUp(event: KeyboardEvent) {
    if (event.code === "Escape") {
      escBtnAction.value?.();
    }
    //  else if (event.code === "Tab" && !navPanelStore.params.toEditorBtnVisible) {
    //   toEditor();
    // }
  }
</script>

<style scoped>
  .panel {
    padding: 0.25rem 1.25rem;
  }
</style>

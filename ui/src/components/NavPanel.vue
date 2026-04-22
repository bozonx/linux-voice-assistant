<template>
  <div class="navbar bg-base-300 text-neutral-content shadow-sm panel">
    <div class="flex-1 flex flex-row gap-2">
      <Button
        v-if="navPanelStore.params.escBtnAction"
        sm
        neutral
        @click="navPanelStore.params.escBtnAction"
        >{{ escBtnText }}</Button
      >
    </div>
    <div class="flex flex-row gap-1" v-if="navPanelStore.params.rightPanelVisible">
      <Button
        :disabled="router.currentRoute.value.path === '/editor'"
        sm 
        neutral
        @click="routeParamsStore.toEditor()">
       <Icon icon="mdi:pencil" height="16" />
       {{ t('nav.editor') }}
      </Button>
      <Button
        :disabled="router.currentRoute.value.path === '/history'"
        sm
        neutral
        square
        @click="openHistory"
        :title="t('nav.history')"
      >
        <Icon icon="mdi:history" height="24" />
      </Button>
      <Button
        :disabled="router.currentRoute.value.path === '/config'"
        sm
        neutral
        square
        @click="openSettings"
        :title="t('nav.settings')"
      >
        <Icon icon="mdi:cog" height="24" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { Icon } from "@iconify/vue";
  import { useRouter } from "vue-router";
  import { useI18n } from '../composables/useI18n'
  import { useNavPanelStore } from "../stores/navPanel";
  import { useRouteParams } from "../stores/routeParams";
  import { useMenuModalsStore } from "../stores/menuModals";

  const router = useRouter();
  const routeParamsStore = useRouteParams();
  const navPanelStore = useNavPanelStore(); 
  const menuModalsStore = useMenuModalsStore();
  const { t } = useI18n()

  const escBtnText = computed(() => {
    return navPanelStore.params.escBtnText + t('nav.escSuffix');
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

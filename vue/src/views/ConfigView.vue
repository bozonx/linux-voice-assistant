<template>
  <Settings />
</template>

<script setup lang="ts">
  import { useNavPanelStore } from "../stores/navPanel";

  const navPanelStore = useNavPanelStore();

  navPanelStore.resetNavParams({
    escBtnVisible: false,
    settingsBtnDisabled: true,
  });
</script>
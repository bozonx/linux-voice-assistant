<template>
  <InputHistory />
</template>

<script setup lang="ts">
  import { useNavPanelStore } from "../stores/navPanel";

  const navPanelStore = useNavPanelStore();

  navPanelStore.resetNavParams({
    historyBtnDisabled: true,
  });
</script>
<template>
  <div @keyup="handleKeyUp">
    <div>
      <MainInput ref="mainInput"/>
      <TextEditToolbar/>
    </div>

    <div>
      <h2 class="section-title">Действия</h2>
      <ActionsMenu />
    </div>

    <div v-if="ipcStore.data?.windowId">
      <h2 class="section-title">Трансформирование и вставка</h2>
      <TransformAndInsertMenu />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../stores/ipc';
import { useRouteParams } from '../stores/routeParams';
import { useMainInputStore } from '../stores/mainInput';

const ipcStore = useIpcStore();
const routeParamsStore = useRouteParams();
const mainInputStore = useMainInputStore();

const emit = defineEmits<{
  (e: 'toMenu'): void
}>();

onMounted(() => {
  if (routeParamsStore.params.text) {
    mainInputStore.setValue(routeParamsStore.params.text);
    nextTick(() => {
      mainInputStore.focus();
    });
  }
});

// function toShortcuts() {
//   overlayStore.showTextDoShortcuts();
// }

function handleKeyUp(event: KeyboardEvent) {
  if (event.code === "Escape") {
    emit('toMenu');
  }
}

</script>

<style scoped>
</style>
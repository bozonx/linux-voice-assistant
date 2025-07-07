<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <h1 class="menu-title">Проверьте результат</h1>
    <div class="flex-1 relative">
      <TextPreview :text="props.text" class="absolute" />
    </div>

    <ShortcutList :text="props.text" :leftLetterKeys="leftLetterKeys" :spaceKey="spaceKey" />
  </div>
</template>

<script setup lang="ts">
import { ActionItem, useActionMenuStore } from '../../stores/actionMenu';
import { useIpcStore } from '../../stores/ipc';
import { useMainInputStore } from '../../stores/mainInput';
import { useMenuModalsStore } from '../../stores/menuModals';
import { useRouteParams } from '../../stores/routeParams';
import { useRouter } from 'vue-router';
import { useNavPanelStore } from '../../stores/navPanel';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const navPanelStore = useNavPanelStore();
const actionMenuStore = useActionMenuStore();
const DEFAULT_ACTIONS = actionMenuStore.DEFAULT_ACTIONS;
const ipcStore = useIpcStore();
const mainInputStore = useMainInputStore();
const menuModalsStore = useMenuModalsStore();
const routeParams = useRouteParams();
const router = useRouter();

navPanelStore.resetNavParams({
  toEditorText: props.text,
  escBtnAction: menuModalsStore.back
});

const leftLetterKeys = [
  ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined,
  DEFAULT_ACTIONS[1],
  {
    name: "Вставить в редактор",
    action: () => {
      mainInputStore.setValue(props.text);
      routeParams.setParams({ text: props.text });
      mainInputStore.focus();
      menuModalsStore.closeAll();
      router.push('/');
    },
  }
] as ActionItem[]

const spaceKey = ipcStore.params?.windowId ? DEFAULT_ACTIONS[0] : undefined;
</script>
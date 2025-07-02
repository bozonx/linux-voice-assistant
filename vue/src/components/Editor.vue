<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex-1 flex gap-2">
      <div class="flex-1">
        <MainInput ref="mainInput"/>
      </div>
      <div class="flex gap-2 flex-col">
        <Button small primary @click="voiceRecognition">Голосовой ввод</Button>
        <Button small primary @click="mainInputStore.clear">Очистить</Button>
        <Button small primary @click="mainInputStore.selectAll">Выбрать всё</Button>
      </div>
    </div>
    
    <div>
      <p class="text-xs mb-2">Подсказка: можно выделить текст, и тогда изменения будут касаться только того, что выделено.</p>

      <div class="flex gap-1 w-full flex-wrap">
        <Button v-for="item in editMenuStore.getEditMenu()"
          :key="item.name" small secondary :icon="item.icon"
          @click="doEdit(item.action)">{{ item.name }}</Button>
      </div>

      <h2 class="mt-4 mb-1 text-sm">Действия</h2>
      <div class="flex gap-1 w-full flex-wrap">
        <Button v-for="item in actionMenuStore.getActionsMenu()"
          :key="item.name" big primary :icon="item.icon"
          @click="doAction(item.action)">{{ item.name }}</Button>
      </div>

      <slot />
    </div>
</div>
</template>

<script setup lang="ts">
import { useRouteParams } from '../stores/routeParams';
import { useMainInputStore } from '../stores/mainInput';
import { useActionMenuStore } from '../stores/actionMenu';
import { useEditMenuStore } from '../stores/edditMenu';
import { MenuModals, useMenuModalsStore } from '../stores/menuModals';
import miniToastr from "mini-toastr";
import { useNavPanelStore } from '../stores/navPanel';

const routeParamsStore = useRouteParams();
const mainInputStore = useMainInputStore();
const actionMenuStore = useActionMenuStore();
const editMenuStore = useEditMenuStore();
const menuModalsStore = useMenuModalsStore();
const navPanelStore = useNavPanelStore();

onMounted(() => {
  if (routeParamsStore.params.text) {
    mainInputStore.setValue(routeParamsStore.params.text);
  }

  init();
});

watch(() => menuModalsStore.anyModalOpen, (value) => {
  if (!value) init()
});

async function init() {
  await nextTick();

  navPanelStore.setParams({
    escBtnText: "Меню",
    escBtnAction: () => {
      menuModalsStore.nextModal(MenuModals.INSERT, {
        text: mainInputStore.value,
      });
    },
  });
  
  mainInputStore.focus();
}

function voiceRecognition() {
  menuModalsStore.nextModal(MenuModals.VOICE_RECOGNITION, {
    onCorrected: (text: string) => {
      mainInputStore.setValueAtCursor(text);
      menuModalsStore.closeAll();
    },
  });
}

const doAction = async (cb: (text: string) => Promise<void>): Promise<void> => {
  let value = mainInputStore.value;

  if (mainInputStore.selectedText) {
    value = mainInputStore.selectedText;
  }

  value = value.trim();

  if (!value) {
    miniToastr.error("Текст не выбран");
    return;
  }

  return cb(value);
};

async function doEdit(cb: (text: string) => Promise<string>): Promise<void> {
  let value = mainInputStore.value;

  if (mainInputStore.selectedText) {
    value = mainInputStore.selectedText;
  }   

  value = value.trim();

  if (!value) {
    miniToastr.error("Текст не выбран");
    return;
  }

  const result = await cb(value);

  mainInputStore.selectedText
    ? mainInputStore.replaceSelection(result)
    : mainInputStore.setValue(result);
}
</script>
<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex-1 flex gap-2">
      <div class="flex-1">
        <MainInput ref="mainInput"/>
      </div>
      <div class="flex gap-2 flex-col">
        <Button sm @click="voiceRecognition">Голосовой ввод</Button>
        <Button sm @click="mainInputStore.clear">Очистить</Button>
        <Button sm @click="mainInputStore.selectAll">Выбрать всё</Button>
      </div>
    </div>
    
    <div>
      <p class="text-xs mb-2 text-gray-500">Подсказка: можно выделить текст, и тогда изменения будут касаться только того, что выделено.</p>

      <div class="flex gap-1 w-full flex-wrap">
        <Button v-for="item in editMenuStore.getEditMenu()"
          :key="item.name" sm neutral :icon="item.icon"
          @click="doEdit(item.action)">{{ item.name }}</Button>
      </div>

      <h2 class="mt-4 mb-1 text-sm">Действия</h2>
      <div class="flex gap-1 w-full flex-wrap">
        <Button v-for="item in actionMenuStore.getActionsMenu()"
          :key="item.name" :icon="item.icon"
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
import useToast from '../composables/useToast';

const routeParamsStore = useRouteParams();
const mainInputStore = useMainInputStore();
const actionMenuStore = useActionMenuStore();
const editMenuStore = useEditMenuStore();
const menuModalsStore = useMenuModalsStore();
const { toast } = useToast();

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
  mainInputStore.focus();
}

function voiceRecognition() {
  menuModalsStore.nextModal(MenuModals.VOICE_RECOGNITION, {
    onCorrected: (resultText: string) => {
      mainInputStore.setValueAtCursor(resultText);
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

  return cb(value);
};

async function doEdit(cb: (text: string) => Promise<string>): Promise<void> {
  let value = mainInputStore.value;

  if (mainInputStore.selectedText) {
    value = mainInputStore.selectedText;
  }   

  value = value.trim();

  if (!value) {
    toast("Текст не выбран", "error");
    return;
  }

  const result = await cb(value);

  mainInputStore.selectedText
    ? mainInputStore.replaceSelection(result)
    : mainInputStore.setValue(result);
}
</script>
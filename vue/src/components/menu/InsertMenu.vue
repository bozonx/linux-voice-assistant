<template>
<div class="flex flex-col gap-4 w-full h-full"> 
  <h1>Вставить</h1>

  <div class="flex-1">
    <DiffInput
      v-if="props.oldText"
      :oldText="props.oldText"
      :newText="props.text"
      @update:newText="handleNewText" />
    <TextPreview v-else :text="props.text" />
  </div>

  <ShortcutList
    :text="props.text"
    :leftLetterKeys="leftLetterKeys"
    :spaceKey="spaceKey"
    :stopListening="props.stopListening"
    :toEditorVisible="!routeParamsStore.isEditorPage()" />
</div>
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { useActionMenuStore } from '../../stores/actionMenu';
import { useRouteParams } from '../../stores/routeParams';

const routeParamsStore = useRouteParams();

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  // if set then diff will be shown
  oldText: {
    type: String,
    default: "",
  },
  allowInsertButton: {
    type: Boolean,
    default: true
  },
  stopListening: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'update:text', value: string): void;
}>();

const ipcStore = useIpcStore();
const actionMenuStore = useActionMenuStore();
const actionsMenu = computed(() => actionMenuStore.getActionsMenu());

const leftLetterKeys = computed(() => 
  actionsMenu.value.map((item, index) => 
    ({...item, disabled: index === 0 && !needShowInsertButton()})));

const spaceKey = computed(() => ({
  ...actionsMenu.value[0],
  disabled: !needShowInsertButton(),
}));

function handleNewText(newText: string) {
  emit('update:text', newText);
}

function needShowInsertButton() {
  return ipcStore.params?.windowId && props.text && props.allowInsertButton;
}
</script>

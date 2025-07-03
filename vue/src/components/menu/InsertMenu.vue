<template>
<div class="flex flex-col gap-4 w-full h-full"> 
  <h1 class="menu-title">Вставить</h1>
  <div class="flex-1 relative">
    <DiffInput v-if="props.oldText" :oldText="props.oldText" :newText="props.text" @update:newText="handleNewText" />
    <TextPreview v-else :text="props.text" class="absolute" />
  </div>

  <ShortcutList :text="props.text" :leftLetterKeys="leftLetterKeys" :spaceKey="spaceKey" />
</div>

</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { useActionMenuStore } from '../../stores/actionMenu';

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
});

const emit = defineEmits<{
  (e: 'update:newText', value: string): void;
}>();

const ipcStore = useIpcStore();
const actionMenuStore = useActionMenuStore();
const actionsMenu = computed(() => actionMenuStore.getActionsMenu());

const leftLetterKeys = computed(() => 
  actionsMenu.value.map((item, index) => 
    ({...item, disabled: index === 0 && !showInsertButton()})));

const spaceKey = computed(() => ({
  ...actionsMenu.value[0],
  disabled: !showInsertButton(),
}));

function handleNewText(newText: string) {
  emit('update:newText', newText);
}

function showInsertButton() {
  return ipcStore.params?.windowId && props.text && props.allowInsertButton;
}
</script>

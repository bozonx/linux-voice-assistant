<template>
<div class="flex flex-col gap-4 w-full h-full"> 
  <div class="flex-1 relative">
    <DiffInput v-if="props.oldText" :oldText="props.oldText" :newText="props.text" @update:newText="handleNewText" />
    <TextPreview v-else :text="props.text" class="absolute" />
  </div>

  <ShortcutList :leftLetterKeys="leftLetterKeys" :spaceKey="spaceKey" />
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
    ({...item, disabled: index === 0 && !showInsertButton(), action: () => item.action(props.text ?? '')})));

const spaceKey = computed(() => ({
  name: "Insert",
  icon: "insert",
  disabled: !showInsertButton(),
  action: () => showInsertButton() && actionsMenu.value[0]?.action(props.text ?? ''),
}));

function handleNewText(newText: string) {
  emit('update:newText', newText);
}

function showInsertButton() {
  return ipcStore.params?.windowId && props.text && props.allowInsertButton;
}
</script>

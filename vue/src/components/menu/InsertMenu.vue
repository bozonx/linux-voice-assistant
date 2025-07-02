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
import { PRESETS_KEYS } from '../../types';
import { useKeysStore } from '../../stores/keys';

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
  showInsertButton: {
    type: Boolean,
    default: true
  },
});

const emit = defineEmits<{
  (e: 'update:newText', value: string): void;
}>();

const actionMenuStore = useActionMenuStore();
const keysStore = useKeysStore();
const insertIntoWindowItem = actionMenuStore.getActionsMenu()[0]
const actionsMenu = actionMenuStore.getActionsMenu();
const ipcStore = useIpcStore();

const leftLetterKeys = computed(() => 
  actionsMenu.map((item, index) => 
    ({...item, disabled: index === 0 && !showInsertButton(), action: () => item.action(props.text ?? '')})));

const spaceKey = computed(() => ({
  name: "Insert",
  icon: "insert",
  disabled: !showInsertButton(),
  action: () => insertIntoWindowItem.action(props.text ?? ''),
}));

function handleNewText(newText: string) {
  emit('update:newText', newText);
}

watch(() => keysStore.keyupCode, (code) => {
  if (!code) return;

  if (code === "Space") {
    if (!ipcStore.params?.windowId || !props.text || !props.showInsertButton) return;

    insertIntoWindowItem.action(props.text ?? '');
  }

  let codeLetter;
  if (code.length === 4 && code.startsWith("Key")) {
    codeLetter = code.slice(3).toLowerCase();
  }
  
  if (codeLetter && PRESETS_KEYS.includes(codeLetter)) {
    if (codeLetter === "q" && !showInsertButton()) {
      return;
    }

    actionsMenu[PRESETS_KEYS.indexOf(codeLetter)]?.action(props.text ?? '');
  }
});

function showInsertButton() {
  return ipcStore.params?.windowId && props.text && props.showInsertButton;
}
</script>

<style scoped>
</style>

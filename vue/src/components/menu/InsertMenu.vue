<template>
<div class="flex flex-col gap-4 w-full h-full"> 
  <div class="flex-1 relative">
    <DiffInput v-if="props.oldText" :oldText="props.oldText" :newText="props.text" @update:newText="handleNewText" />
    <TextPreview v-else :text="props.text" class="absolute" />
  </div>

  <div class="shortcuts-list">
    <div v-if="ipcStore.params?.windowId && props.showInsertButton">Space - <button @click="insertIntoWindowItem.action(props.text ?? '')">{{ insertIntoWindowItem.name }}</button></div>

    <div class="flex flex-row w-full gap-4 mt-4">
      <div class="flex flex-col gap-1">
        <div v-for="item in col1" :key="item.name">
          {{ item.key }} - <Button v-if="item.name" :disabled="item.key === 'q' && !showInsertButton()" small secondary :icon="item.icon" @click="item.action(props.text)">{{ item.name }}</Button>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div v-for="item in col2" :key="item.name">
          {{ item.key }} - <Button v-if="item.name" small secondary :icon="item.icon" @click="item.action(props.text)">{{ item.name }}</Button>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div v-for="item in col3" :key="item.name">
          {{ item.key }} - <Button v-if="item.name" small secondary :icon="item.icon" @click="item.action(props.text)">{{ item.name }}</Button>
        </div>
      </div>
    </div>
  </div>
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
// const actionsMenu = computed(() => [
//   { key: "q" },
//   ...actionMenuStore.getActionsMenu().slice(1)
// ] as any[]);
const actionsMenu = actionMenuStore.getActionsMenu();


const ipcStore = useIpcStore();

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

<template>
  <div>
    <DiffInput v-if="props.oldText" :oldText="props.oldText" :newText="props.text" @update:newText="handleNewText" />
    <TextPreview v-else :text="props.text" />
  </div>

  <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
    <div v-if="ipcStore.params?.windowId && props.showInsertButton">Space - <button @click="insertIntoWindowItem.action(props.text ?? '')">{{ insertIntoWindowItem.name }}</button></div>

    <div class="flex flex-row w-full gap-4 mt-4">
      <div class="flex flex-col gap-1">
        <div v-for="item in col1" :key="item.name">
          {{ item.key }} - <Button v-if="item.name" small secondary :icon="item.icon" @click="item.action(props.text)">{{ item.name }}</Button>
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
</template>

<script setup lang="ts">
import { useIpcStore } from '../../stores/ipc';
import { useActionMenuStore } from '../../stores/actionMenu';
import { PRESETS_KEYS } from '../../types';

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

const inFocusButton = ref<HTMLButtonElement>();
const actionMenuStore = useActionMenuStore();
const insertIntoWindowItem = actionMenuStore.getActionsMenu()[0]
const actionsMenu = computed(() => [
  { key: "q" },
  ...actionMenuStore.getActionsMenu().slice(1)
] as any[]);
const col1 = computed(() => PRESETS_KEYS.slice(0, 5).map((key, index) => ({ key, ...actionsMenu.value[index] })));
const col2 = computed(() => PRESETS_KEYS.slice(5, 10).map((key, index) => ({ key, ...actionsMenu.value[index + 5] })));
const col3 = computed(() => PRESETS_KEYS.slice(10, 15).map((key, index) => ({ key, ...actionsMenu.value[index + 10] })));

onMounted(() => {
  nextTick(() => {
    if (inFocusButton.value) {
      inFocusButton.value.focus();
    }
  })
})

const ipcStore = useIpcStore();

function handleNewText(newText: string) {
  emit('update:newText', newText);
}

const handleShortCutKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Space") {
    if (!ipcStore.params?.windowId || !props.text || !props.showInsertButton) return;

    insertIntoWindowItem.action(props.text ?? '');
  }

  let codeLetter;
  if (event.code.length === 4 && event.code.startsWith("Key")) {
    codeLetter = event.code.slice(3).toLowerCase();
  }
  
  if (codeLetter && PRESETS_KEYS.includes(codeLetter)) {
    actionsMenu.value[PRESETS_KEYS.indexOf(codeLetter)]?.action(props.text ?? '');
  }
}
</script>
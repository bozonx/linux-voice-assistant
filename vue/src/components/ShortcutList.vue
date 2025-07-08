<template>
  <div class="shortcuts-list">
    <div>
      <div class="flex flex-row gap-2">
        <span v-if="props.spaceKey" class="flex flex-row gap-1"
          ><KeyButton>Space</KeyButton>
          <Button
            :disabled="props.spaceKey.disabled"
            small
            secondary
            @click="props.spaceKey.action(props.text || '')"
            >{{ props.spaceKey.name }}</Button
          >
        </span>
        <span v-if="props.toEditorVisible" class="flex flex-row gap-2"
          > <KeyButton>Tab</KeyButton>
          <Button small secondary @click="routeParamsStore.toEditor(props.text)"
            >Вставить в редактор</Button>
        </span>
      </div>

      <div class="flex flex-row gap-4 mt-2">
        <div class="flex flex-col gap-1">
          <div v-for="item in col1" :key="item.name">
            <span class="flex flex-row gap-1">
              <KeyButton>{{ item.key }}</KeyButton>
              <Button
                v-if="item.name"
                :disabled="item.disabled"
                small
                secondary
                :icon="item.icon"
                @click="item.action(props.text || '')"
                >{{ item.name }}</Button
              >
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div v-for="item in col2" :key="item.name">
            <span class="flex flex-row gap-1"
              ><KeyButton>{{ item.key }}</KeyButton>
              <Button
                v-if="item.name"
                :disabled="item.disabled"
                small
                secondary
                :icon="item.icon"
                @click="item.action(props.text || '')"
                >{{ item.name }}</Button
              ></span
            >
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div v-for="item in col3" :key="item.name">
            <span class="flex flex-row gap-1"
              ><KeyButton>{{ item.key }}</KeyButton>
              <Button
                v-if="item.name"
                :disabled="item.disabled"
                small
                secondary
                :icon="item.icon"
                @click="item.action(props.text || '')"
                >{{ item.name }}</Button
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PRESETS_KEYS } from "../types";
  import { ActionItem } from "../stores/actionMenu";
  import {
    useGlobalEvents,
    GlobalEvents,
  } from "../composables/useGlobalEvents";
  import { useRouteParams } from "../stores/routeParams";

  const props = defineProps({
    text: {
      type: String,
      default: "",
    },
    spaceKey: { 
      type: Object as PropType<ActionItem>,
      default: undefined,
    },
    toEditorVisible: {
      type: Boolean,
      default: false,
    },
    leftLetterKeys: {
      type: Array as PropType<ActionItem[]>,
      default: () => [],
    },
    stopListening: {
      type: Boolean,
      default: false,
    },
  });

  const routeParamsStore = useRouteParams();
  const { globalEvents } = useGlobalEvents();
  let keyUpHanlderIndex: number;

  const col1 = computed(() =>
    PRESETS_KEYS.slice(0, 5).map((key, index) => ({
      key,
      ...props.leftLetterKeys[index],
    }))
  );
  const col2 = computed(() =>
    PRESETS_KEYS.slice(5, 10).map((key, index) => ({
      key,
      ...props.leftLetterKeys[index + 5],
    }))
  );
  const col3 = computed(() =>
    PRESETS_KEYS.slice(10, 15).map((key, index) => ({
      key,
      ...props.leftLetterKeys[index + 10],
    }))
  );

  onMounted(() => {
    keyUpHanlderIndex = globalEvents.addListener(
      GlobalEvents.KEY_UP,
      handleShortCutKeyUp
    );
  });

  onUnmounted(() => {
    globalEvents.removeListener(keyUpHanlderIndex);
  });

  function handleShortCutKeyUp(event: KeyboardEvent) {
    if (props.stopListening) {
      return;
    }

    if (event.code === "Space" && !props.spaceKey?.disabled) {
      props.spaceKey?.action(props.text || "");
    } else if (event.code === "Tab" && props.toEditorVisible) {
      routeParamsStore.toEditor(props.text);
    }

    let codeLetter;
    if (event.code.length === 4 && event.code.startsWith("Key")) {
      codeLetter = event.code.slice(3).toLowerCase();
    }

    if (codeLetter && PRESETS_KEYS.includes(codeLetter)) {
      props.leftLetterKeys[PRESETS_KEYS.indexOf(codeLetter)]?.action(
        props.text || ""
      );
    }
  }
</script>

<style scoped>
  .shortcuts-list {
    text-align: left;
    font-family: monospace;
    font-size: 16px;
    line-height: 1.5;
    white-space: pre-wrap;
    display: flex;
    justify-content: center;
  }
</style>

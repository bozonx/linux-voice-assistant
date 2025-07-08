<template>
  <div class="shortcuts-list">
    <div>
      <div v-if="props.spaceKey || props.tabKey" class="mb-2">
        <span v-if="props.spaceKey"><KeyButton>Space</KeyButton> <Button
          :disabled="props.spaceKey.disabled"
          small
          secondary
          @click="props.spaceKey.action(props.text || '')"
          >Вставить в окно</Button>
        </span>
        <span v-if="props.tabKey"><KeyButton>Tab</KeyButton> <Button
          :disabled="props.tabKey.disabled"
          small
          secondary
          @click="props.tabKey.action(props.text || '')"
          >Вставить в редактор</Button>
        </span>
      </div>

      <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-1">
          <div v-for="item in col1" :key="item.name">
            <span>
              <KeyButton>{{ item.key }}</KeyButton> <Button
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
            <span><KeyButton>{{ item.key }}</KeyButton> <Button
              v-if="item.name"
              :disabled="item.disabled"
              small
              secondary
              :icon="item.icon"
              @click="item.action(props.text || '')"
              >{{ item.name }}</Button
            ></span>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div v-for="item in col3" :key="item.name">
            <span><KeyButton>{{ item.key }}</KeyButton> <Button
              v-if="item.name"
              :disabled="item.disabled"
              small
              secondary
              :icon="item.icon"
              @click="item.action(props.text || '')"
              >{{ item.name }}</Button
            ></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { PRESETS_KEYS } from "../../types";
  import { ActionItem } from "../../stores/actionMenu";
  import { useGlobalEvents, GlobalEvents } from "../../composables/useGlobalEvents";

  const props = defineProps<{
    text?: string;
    spaceKey?: ActionItem;
    tabKey?: ActionItem;
    leftLetterKeys: ActionItem[];
    stopListening?: boolean;
  }>();

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
    keyUpHanlderIndex = globalEvents.addListener(GlobalEvents.KEY_UP, handleShortCutKeyUp);
  });

  onUnmounted(() => {
    globalEvents.removeListener(keyUpHanlderIndex);
  });

  function handleShortCutKeyUp(event: KeyboardEvent) {
    if (props.stopListening) {
      return;
    }

    if (event.code === "Space") {
      props.spaceKey?.action(props.text || '');
    }

    let codeLetter;
    if (event.code.length === 4 && event.code.startsWith("Key")) {
      codeLetter = event.code.slice(3).toLowerCase();
    }
    
    if (codeLetter && PRESETS_KEYS.includes(codeLetter)) {
      props.leftLetterKeys[PRESETS_KEYS.indexOf(codeLetter)]?.action(props.text || '');
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

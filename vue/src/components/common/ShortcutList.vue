<template>
  <div class="shortcuts-list">
    <div>
      <div v-if="props.spaceKey" class="mb-2">
        <span class="shortcut-item">Space - </span
        ><Button
          :disabled="props.spaceKey.disabled"
          small
          secondary
          :icon="props.spaceKey.icon"
          @click="props.spaceKey.action(props.text)"
          >{{ props.spaceKey.name }}</Button
        >
      </div>

      <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-1">
          <div v-for="item in col1" :key="item.name">
            <span class="shortcut-item">{{ item.key }} - </span
            ><Button
              v-if="item.name"
              :disabled="item.disabled"
              small
              secondary
              :icon="item.icon"
              @click="item.action(props.text)"
              >{{ item.name }}</Button
            >
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div v-for="item in col2" :key="item.name">
            <span class="shortcut-item">{{ item.key }} - </span
            ><Button
              v-if="item.name"
              :disabled="item.disabled"
              small
              secondary
              :icon="item.icon"
              @click="item.action(props.text)"
              >{{ item.name }}</Button
            >
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div v-for="item in col3" :key="item.name">
            <span class="shortcut-item">{{ item.key }} - </span
            ><Button
              v-if="item.name"
              :disabled="item.disabled"
              small
              secondary
              :icon="item.icon"
              @click="item.action(props.text)"
              >{{ item.name }}</Button
            >
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { PRESETS_KEYS } from "../../types";
  import { useKeysStore } from "../../stores/keys";
  import { ActionItem } from "../../stores/actionMenu";

  const props = defineProps<{
    text?: string;
    spaceKey?: ActionItem;
    leftLetterKeys: ActionItem[];
  }>();

  const keysStore = useKeysStore();
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

  watch(() => keysStore.keyupCode, (code) => {
    if (!code) return;

    if (code === "Space") {
      props.spaceKey?.action();
    }

    let codeLetter;
    if (code.length === 4 && code.startsWith("Key")) {
      codeLetter = code.slice(3).toLowerCase();
    }
    
    if (codeLetter && PRESETS_KEYS.includes(codeLetter)) {
      props.leftLetterKeys[PRESETS_KEYS.indexOf(codeLetter)]?.action();
    }
  });
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

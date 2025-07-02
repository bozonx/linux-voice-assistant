<template>
  <div class="shortcuts-list">
    <div class="flex flex-row w-full gap-4 mt-4">
      <div class="flex flex-col gap-1">
        <div v-for="item in col1" :key="item.name">
          <span class="shortcut-item">{{ item.key }} - </span
          ><Button
            v-if="item.name"
            :disabled="item.disabled"
            small
            secondary
            :icon="item.icon"
            @click="item.action"
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
            @click="item.action"
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
            @click="item.action"
            >{{ item.name }}</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PRESETS_KEYS } from "../../types";

  const props = defineProps<{
    leftLetterKeys: {
      name: string;
      icon?: string;
      disabled?: boolean;
      action: () => void;
    }[];
  }>();

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
</script>

<style scoped>
  .shortcuts-list {
    text-align: left;
    font-family: monospace;
    font-size: 16px;
    line-height: 1.5;
    white-space: pre-wrap;
  }
</style>

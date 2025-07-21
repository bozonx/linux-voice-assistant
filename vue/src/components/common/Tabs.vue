<template>
  <div role="tablist" class="tabs tabs-border mb-4">
    <TabItem
      v-for="tab in tabs"
      :key="tab.key"
      :active="tab.key === props.activeTab"
      @click="onClick(tab.key)"
    >
      {{ tab.text }}
    </TabItem>
  </div>
</template>

<script setup lang="ts">
  import TabItem from "./TabItem.vue";

  const emit = defineEmits<{
    (e: "click", key: string | number): void;
  }>();

  const props = defineProps<{
    tabs: {
      text: string;
      key: string | number;
    }[];
    activeTab?: string | number;
  }>();

  const onClick = (key: string | number) => {
    emit("click", key);
  };
</script>

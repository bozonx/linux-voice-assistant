<template>
  <!-- <div>
    <Button small secondary @click="emit('clear-history')">
      Очистить историю
    </Button>
  </div> -->

  <div class="flex flex-col h-full overflow-hidden">
    <div v-if="filtered.length === 0" role="alert" class="alert">
      <span>{{ searchQuery ? "Ничего не найдено" : "История пуста" }}</span>
    </div>
    <ul v-else class="list bg-base-100 rounded-box shadow-md">
      <li class="list-row" v-for="(item, index) in filtered" :key="index">
        <div @click="emit('to-editor', item)" title="В редактор" class="history-text list-col-grow">
          {{ truncate(item, 250) || "пусто" }}
        </div>

        <Button
          ghost
          square
          @click="$emit('remove-item', item)"
          title="Удалить из истории"
        >
          <Icon icon="mdi:delete" height="24" />
        </Button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";
  import { truncate } from "squidlet-lib";

  const emit = defineEmits<{
    (e: "remove-item", item: string): void;
    (e: "clear-history"): void;
    (e: "to-editor", item: string): void;
  }>();

  const props = defineProps<{
    items: string[];
    searchQuery?: string;
  }>();

  const filtered = computed(() => {
    const query = props.searchQuery?.trim().toLowerCase();

    if (!query) return props.items;
    
    return props.items.filter((item) =>
      item.toLowerCase().includes(query)
    );
  });
</script>

<style scoped>
  /* .empty-history {
    text-align: center;
    padding: 20px;
    color: #666;
    font-style: italic;
  } */

  /* .history-list {
    overflow-y: auto;
    min-height: 0;
  } */

  /* .history-text {
    flex: 1;
    cursor: pointer;
    word-break: break-word;
    line-height: 1.4;
    max-height: 60px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  } */
</style>

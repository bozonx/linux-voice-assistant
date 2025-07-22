<template>
  <div>
    <Button small secondary @click="$emit('clear-history')">
      Очистить историю
    </Button>
  </div>

  <div class="flex flex-col gap-2 h-full overflow-hidden">
    <div v-if="items.length === 0" class="empty-history">
      {{ searchQuery ? "Ничего не найдено" : "История пуста" }}
    </div>
    <ul v-else class="list bg-base-100 rounded-box shadow-md">
      <li class="list-row" v-for="(item, index) in items" :key="index">
        <!-- <div class="text-4xl font-thin opacity-30 tabular-nums">01</div> -->
        <!-- <div v-if="item.label" class="text-gray-500">{{ item.label }}:</div> -->
        <div class="history-text list-col-grow">
          {{ item.value || "пусто" }}
        </div>
        <!-- <Button
          ghost
          square
          @click="routeParams.toEditor(item.value)"
          title="В редактор"
        >
          <Icon icon="mdi:pencil" height="24" />
        </Button> -->
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
  import { useRouteParams } from "../stores/routeParams";

  const props = defineProps<{
    items: { label: string; value: string }[];
    searchQuery: string;
  }>();

  const routeParams = useRouteParams();

    // // Фильтрованная история на основе поискового запроса
    const filteredHistory = computed(() => {
    if (!searchQuery.value.trim()) {
      return props.items;
    }
    const query = searchQuery.value.toLowerCase();

    return props.items.filter((item) =>
      item.value.toLowerCase().includes(query)
    );
  });
</script>

<style scoped>
  .empty-history {
    text-align: center;
    padding: 20px;
    color: #666;
    font-style: italic;
  }

  .history-list {
    overflow-y: auto;
    min-height: 0; /* Важно для правильной работы flexbox с overflow */
  }

  /* .history-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s;
  }

  .history-item:last-child {
    border-bottom: none;
  }

  .history-item:hover {
    background-color: #f0f0f0;
  } */

  .history-text {
    flex: 1;
    cursor: pointer;
    word-break: break-word;
    line-height: 1.4;
    max-height: 60px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .history-text:hover {
    color: #2196f3;
  }
  /* 
.remove-history-btn {
  background: none;
  border: none;
  color: #999;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: 8px;
  line-height: 1;
}

.remove-history-btn:hover {
  background-color: #ffebee;
  color: #f44336;
} */
</style>

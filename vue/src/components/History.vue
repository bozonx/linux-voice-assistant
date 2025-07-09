<template>
<div class="flex flex-col gap-2 h-full overflow-hidden">
  <div class="flex flex-row gap-2">
    <div class="flex-1">
      <input
        v-model="searchQuery"
        type="text"
        ref="searchInput"
        placeholder="Поиск в истории..."
        class="history-search"
      />
    </div>
    <Button
      small
      secondary
      @click="$emit('clear-history')"
      >
      Очистить историю
    </Button>
  </div>

  <div v-if="filteredHistory.length === 0" class="empty-history">
    {{ searchQuery ? 'Ничего не найдено' : 'История пуста' }}
  </div>
  <div v-else class="history-list flex-1">
    <div
      v-for="(item, index) in filteredHistory"
      :key="index"
      class="history-item"
    >
      <div class="history-text">
        {{ item || 'пусто' }}
      </div>
      <div class="flex flex-row gap-1">
        <Button
          small
          secondary
          @click="routeParams.toEditor(item)"
          title="В редактор"
          >
          E
        </Button>
        <Button
          small
          secondary
          @click="$emit('remove-item', item)"
          title="Удалить из истории"
        >
          ×
        </Button>
      </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import { useRouteParams } from '../stores/routeParams';

const props = defineProps<{
  items: string[]
}>()

const routeParams = useRouteParams();
const searchInput = ref<HTMLInputElement | null>(null);
const searchQuery = ref<string>('')
// // Фильтрованная история на основе поискового запроса
const filteredHistory = computed(() => {
  if (!searchQuery.value.trim()) {
    return props.items;
  }
  const query = searchQuery.value.toLowerCase();

  return props.items.filter((item) => item.toLowerCase().includes(query));
})

onMounted(() => {
  if (searchInput.value) {
    searchInput.value.focus();
  }
});
</script>

<style scoped>
.history-search {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

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

.history-item {
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
}

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
  color: #2196F3;
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
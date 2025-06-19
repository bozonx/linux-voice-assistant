<template>
  <div class="main-input-history">
    <div class="history-header">
      <h3>История ввода</h3>
      <div class="history-controls">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Поиск в истории..."
          class="history-search"
        />
        <button
          @click="clearHistory"
          class="clear-history-btn"
          :disabled="historyStore.isLoading"
        >
          Очистить историю
        </button>
      </div>
    </div>

    <div v-if="historyStore.isLoading" class="loading">
      Загрузка истории...
    </div>

    <div v-else-if="filteredHistory.length === 0" class="empty-history">
      {{ searchQuery ? 'Ничего не найдено' : 'История пуста' }}
    </div>

    <div v-else class="history-list">
      <div
        v-for="(item, index) in filteredHistory"
        :key="index"
        class="history-item"
      >
        <div class="history-text" @click="selectHistoryItem(item)">
          {{ item }}
        </div>
        <button
          @click="removeHistoryItem(item)"
          class="remove-history-btn"
          title="Удалить из истории"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: string[]
}>()

const searchQuery = ref<string>('')

// Фильтрованная история на основе поискового запроса
const filteredHistory = computed(() => {
  return historyStore.getFilteredHistory(searchQuery.value)
})

// Загрузка истории при монтировании компонента
onMounted(async () => {
  await historyStore.loadHistory()
})

// Выбор элемента из истории
const selectHistoryItem = (item: string): void => {
  mainInputStore.setValue(item)
  mainInputStore.focus()
}

// Удаление элемента из истории
const removeHistoryItem = async (item: string): Promise<void> => {
  await historyStore.removeFromHistory(item)
}

// Очистка всей истории
const clearHistory = async (): Promise<void> => {
  if (confirm('Вы уверены, что хотите очистить всю историю?')) {
    await historyStore.clearHistory()
  }
}
</script>

<style scoped>
.main-input-history {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 16px;
  background-color: #f9f9f9;
}

.history-header {
  margin-bottom: 16px;
}

.history-header h3 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 18px;
}

.history-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.history-search {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.clear-history-btn {
  padding: 8px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
}

.clear-history-btn:hover:not(:disabled) {
  background-color: #d32f2f;
}

.clear-history-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.loading, .empty-history {
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
}

.history-list {
  max-height: 300px;
  overflow-y: auto;
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
}
</style> 
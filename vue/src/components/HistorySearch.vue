<template>
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
    <Button small secondary @click="$emit('clear-history')">
      Очистить историю
    </Button>
  </div>
</template>

<script setup lang="ts">
  const searchQuery = ref<string>("");
  const searchInput = ref<HTMLInputElement | null>(null);

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
</style>

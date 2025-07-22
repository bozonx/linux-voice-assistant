<template>
  <SearchInput
    v-model="searchQuery"
    placeholder="Поиск в истории..."
    ref="searchInput"
  />
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

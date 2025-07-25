<template>
  <div class="flex flex-col h-full overflow-auto">
    <div v-if="filtered.length === 0" role="alert" class="alert">
      <span>{{ searchQuery ? "Ничего не найдено" : "История пуста" }}</span>
    </div>

    <ul v-else class="list bg-base-100 rounded-box shadow-md">
      <li class="list-row hover:bg-base-200" v-for="item in filtered" :key="item.id">
        <div
          @click="emit('text-click', item)"
          :title="textTitle"
          class="history-text list-col-grow cursor-pointer"
        >
          {{ truncate(item.value, 250) || "пусто" }}
        </div>

        <Button
          ghost
          square
          @click="emit('remove-item', item)"
          title="Удалить из истории"
          class="remove-history-btn"
        >
          <Icon icon="mdi:delete" height="24" />
        </Button>
      </li>
    </ul>

    <div class="mt-4">
      <Button @click="emit('clear-history')">
        Очистить историю
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";
  import { truncate } from "squidlet-lib";

  const emit = defineEmits<{
    (e: "remove-item", item: {id: string | number, value: string}): void;
    (e: "clear-history"): void;
    (e: "text-click", item: {id: string | number, value: string}): void;
  }>();

  const props = defineProps<{
    items: {id: string | number, value: string}[];
    searchQuery?: string;
    textTitle?: string;
  }>();

  const filtered = computed(() => {
    const query = props.searchQuery?.trim().toLowerCase();

    if (!query) return props.items;
    
    return props.items.filter((item) =>
      item.value.toLowerCase().includes(query)
    );
  });
</script>

<style scoped>
.remove-history-btn {
  display: none;
}

.list-row:hover .remove-history-btn {
  display: flex;
}

.history-text {
  word-break: break-word;
  line-height: 1.4;
  min-height: 2.5rem;
}
</style>

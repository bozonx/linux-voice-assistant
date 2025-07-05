<template>
  <div class="field-items flex flex-col gap-2">
    <div
      class="flex flex-row gap-2"
      v-for="(item, index) in localItems"
      :key="index"
    >
      <div class="flex-1">
        <slot name="item" :item="item" :index="index" />
      </div>
      <Button small secondary @click="removeItem(index)">Remove</Button>
    </div>
    <div>
      <Button small secondary @click="addItem">Add</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";

  const props = defineProps<{
    items: Record<string, any>[];
  }>();

  const emit = defineEmits<{
    "update:items": [items: Record<string, any>[]];
  }>();

  // Локальное состояние для управления элементами
  const localItems = ref<Record<string, any>[]>([...props.items]);

  // Синхронизируем локальное состояние с пропсами
  // watch(() => props.items, (newItems) => {
  //   localItems.value = [...newItems];
  // }, { immediate: true, deep: true });

  // Отслеживаем изменения локального состояния и уведомляем родителя
  watch(
    localItems,
    (newItems) => {
      emit("update:items", newItems);
    },
    { deep: true }
  );

  const addItem = () => {
    localItems.value.push({});
  };

  const removeItem = (index: number) => {
    localItems.value.splice(index, 1);
  };
</script>

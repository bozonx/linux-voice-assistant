<template>
  <div class="form-row">
    <div v-if="label" class="form-row-label">{{ label }}</div>
    <div class="form-row-input">
      <div class="items-field-item" v-for="(item, index) in localItems" :key="index">
        <slot name="item" :item="item" :index="index" />
        <button @click="removeItem(index)">Remove</button>
      </div>
      <div>
        <button @click="addItem">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  items: Record<string, any>[];
  label?: string;
}>();

const emit = defineEmits<{
  'update:items': [items: Record<string, any>[]];
}>();

// Локальное состояние для управления элементами
const localItems = ref<Record<string, any>[]>([...props.items]);

// Синхронизируем локальное состояние с пропсами
// watch(() => props.items, (newItems) => {
//   localItems.value = [...newItems];
// }, { immediate: true, deep: true });

// Отслеживаем изменения локального состояния и уведомляем родителя
watch(localItems, (newItems) => {
  emit('update:items', newItems);
}, { deep: true });

const addItem = () => {
  localItems.value.push({});
};

const removeItem = (index: number) => {
  localItems.value.splice(index, 1);
};
</script>

<template>
  <div class="field-items flex flex-col">
    <div class="line-row" v-for="(item, index) in localItems" :key="index">
      <div class="flex-1">
        <slot name="item" :item="item" :index="index" />
      </div>
      <div class="line-controls">
        <div class="flex flex-col">
          <Button
            class="move-btn"
            xs
            :disabled="index === 0"
            neutral
            @click="moveItemUp(index)"
          >
            <Icon icon="mdi:arrow-up" />
          </Button>
          <Button
            class="move-btn"
            xs
            :disabled="index === localItems.length - 1"
            neutral
            @click="moveItemDown(index)"
          >
            <Icon icon="mdi:arrow-down" />
          </Button>
        </div>
        <div>
          <Button neutral square @click="removeItem(index)">
            <Icon icon="mdi:close" height="18" />
          </Button>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-end gap-2 mt-1">
      <Button @click="addItem">Добавить</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  items: Record<string, any>[]
}>()

const emit = defineEmits<{
  'update:items': [items: Record<string, any>[]]
}>()

const localItems = ref<Record<string, any>[]>([...props.items])

watch(
  localItems,
  (newItems: Record<string, any>[]) => {
    emit('update:items', newItems)
  },
  { deep: true }
)

const addItem = () => {
  localItems.value.push({})
}

const removeItem = (index: number) => {
  localItems.value.splice(index, 1)
}

const moveItemUp = (index: number) => {
  localItems.value.splice(index - 1, 0, localItems.value.splice(index, 1)[0])
}

const moveItemDown = (index: number) => {
  localItems.value.splice(index + 1, 0, localItems.value.splice(index, 1)[0])
}
</script>

<style scoped>
.move-btn {
  height: 20px;
}

.line-row {
  display: flex;
  flex-direction: row;
  padding: 0 0 0.5rem 0;
}

.line-controls {
  display: none;
  flex-direction: row;
  gap: 0.25rem;
}

.line-row:hover .line-controls {
  display: flex;
}
</style>

<template>
  <div class="main-input-history">
    <History :items="historyStore.history" @remove-item="removeItem" @clear-history="clearHistory" />
  </div>
</template>

<script setup lang="ts">
import { useMainInputHistoryStore } from '../stores/mainInputHistory'

const historyStore = useMainInputHistoryStore()

onMounted(async () => {
  await historyStore.loadHistory()
})

const removeItem = async (item: string) => {
  await historyStore.removeFromHistory(item)
}

const clearHistory = async () => {
  await historyStore.clearHistory()
}
</script>

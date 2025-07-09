<template>
  <div class="h-full flex flex-col gap-3 overflow-hidden">
    <div class="flex flex-row gap-2">
      <Button @click="currentTab = 0" :active="currentTab === 0">История ввода</Button>
      <Button @click="currentTab = 1" :active="currentTab === 1">История трансформаций</Button>
    </div>
    <Card v-show="currentTab === 0" class="flex-1">
      <History :items="historyStore.history" @remove-item="removeItem" @clear-history="clearHistory" />
    </Card>
    <Card v-show="currentTab === 1" class="flex-1">
      <History :items="historyStore.history" @remove-item="removeItem" @clear-history="clearHistory" />
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { useNavPanelStore } from "../stores/navPanel";
  import { useHistoryStore } from '../stores/history'

  const navPanelStore = useNavPanelStore();
  const historyStore = useHistoryStore()
  const currentTab = ref(0)

  onMounted(async () => {
    await historyStore.loadHistory()
  })

  navPanelStore.resetNavParams({
    escBtnVisible: false,
    historyBtnDisabled: true,
  });

  const removeItem = async (item: string) => {
    await historyStore.removeFromHistory(item)
  }

  const clearHistory = async () => {
    await historyStore.clearHistory()
  }
</script>
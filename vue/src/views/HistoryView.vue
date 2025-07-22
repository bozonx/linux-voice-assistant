<template>
<ContentPadding>
  <SearchInput
    v-model:value="searchQuery"
    placeholder="Поиск в истории..."
    ref="searchInput"
  />

  {{ searchQuery }}

  <Tabs
    :tabs="tabs"
    v-model:value="currentTab"
    class="mb-4"
  />

  <HistoryList
    v-show="currentTab === 0"
    :items="historyStore.inputHistory"
    :searchQuery="searchQuery"
    @remove-item="removeInputItem"
    @clear-history="historyStore.clearInputHistory()"
    @to-editor="routeParams.toEditor"
  />
  
  <HistoryList
    v-show="currentTab === 1"
    :items="historyStore.transformHistory"
    :searchQuery="searchQuery"
    @remove-item="removeTransformItem"
    @clear-history="historyStore.clearTransformHistory()"
    @to-editor="routeParams.toEditor"
  />

  <!-- <div v-show="currentTab === 2">
    <div v-for="item in historyStore.chatHistory" :key="item.id">
      <div class="flex flex-row gap-2">
        <div>{{ truncate(item.description, 24) }}</div>
        <div class="flex-1">{{ item.lastMsgDate }}</div>
      </div>
      <HistoryList
      :items="item.messages.map((message: any) => ({ label: message.role, value: message.content }))"
      @remove-item="removeChatItem(item)"
      @clear-history="historyStore.clearChatHistory()"
      />
    </div>
  </div> -->
</ContentPadding>
</template>

<script setup lang="ts">
  import { useNavPanelStore } from "../stores/navPanel";
  import { useHistoryStore } from '../stores/history'
  import { ChatHistoryItem } from "../../../electron/types/types";
  import { useRouteParams } from "../stores/routeParams";

  const navPanelStore = useNavPanelStore();
  const historyStore = useHistoryStore()
  const routeParams = useRouteParams();
  const currentTab = ref(0)
  const tabs = [
    { text: "История ввода", key: 0 },
    { text: "История трансформаций", key: 1 },
    { text: "История чатов", key: 2 },
  ]

  const searchQuery = ref<string>("");
  const searchInput = ref<HTMLInputElement | null>(null);

  onMounted(async () => {
    if (searchInput.value) {
      searchInput.value.focus();
    }

    await historyStore.loadInputHistory()
    await historyStore.loadTransformHistory()
    await historyStore.loadChatHistory()
  })

  navPanelStore.resetNavParams({});

  const removeInputItem = async (item: string) => {
    await historyStore.removeFromInputHistory(item)
  }

  const removeTransformItem = async (item: string) => {
    await historyStore.removeFromTransformHistory(item)
  }

  const removeChatItem = async (item: ChatHistoryItem) => {
    await historyStore.removeFromChatHistory(item)
  }

</script>
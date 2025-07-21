<template>
  <div class="h-full flex flex-col gap-3 overflow-hidden">
    <Tabs
      :tabs="tabs"
      :activeTab="currentTab"
      @click="currentTab = Number($event)"
      class="mb-4"
    />
    <Card v-show="currentTab === 0" class="flex-1">
      <History
        :items="historyStore.inputHistory.map((item) => ({ value: item }))"
        @remove-item="removeInputItem"
        @clear-history="historyStore.clearInputHistory()"
      />
    </Card>
    <Card v-show="currentTab === 1" class="flex-1">
      <History
        :items="historyStore.transformHistory.map((item) => ({ value: item }))"
        @remove-item="removeTransformItem"
        @clear-history="historyStore.clearTransformHistory()"
      />
    </Card>
    <Card v-show="currentTab === 2" class="flex-1">
      <div v-for="item in historyStore.chatHistory" :key="item.id">
        <div class="flex flex-row gap-2">
          <div>{{ truncate(item.description, 24) }}</div>
          <div class="flex-1">{{ item.lastMsgDate }}</div>
        </div>
        <History
        :items="item.messages.map((message: any) => ({ label: message.role, value: message.content }))"
        @remove-item="removeChatItem(item)"
        @clear-history="historyStore.clearChatHistory()"
        />
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { useNavPanelStore } from "../stores/navPanel";
  import { useHistoryStore } from '../stores/history'
  import { ChatHistoryItem } from "../../../electron/types/types";
  import { truncate } from "squidlet-lib";

  const navPanelStore = useNavPanelStore();
  const historyStore = useHistoryStore()
  const currentTab = ref(0)
  const tabs = [
    { text: "История ввода", key: 0 },
    { text: "История трансформаций", key: 1 },
    { text: "История чатов", key: 2 },
  ]

  onMounted(async () => {
    await historyStore.loadInputHistory()
    await historyStore.loadTransformHistory()
    await historyStore.loadChatHistory()
  })

  navPanelStore.resetNavParams({
    escBtnVisible: false,
  });

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
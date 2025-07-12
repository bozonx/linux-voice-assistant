<template>
  <div class="h-full flex flex-col gap-3 overflow-hidden">
    <div class="flex flex-row gap-2">
      <Button @click="currentTab = 0" :active="currentTab === 0">История ввода</Button>
      <Button @click="currentTab = 1" :active="currentTab === 1">История трансформаций</Button>
      <Button @click="currentTab = 2" :active="currentTab === 2">История чатов</Button>
    </div>
    <Card v-show="currentTab === 0" class="flex-1">
      <History
        :items="historyStore.inputHistory"
        @remove-item="removeInputItem"
        @clear-history="historyStore.clearInputHistory()"
      />
    </Card>
    <Card v-show="currentTab === 1" class="flex-1">
      <History
        :items="historyStore.transformHistory"
        @remove-item="removeTransformItem"
        @clear-history="historyStore.clearTransformHistory()"
      />
    </Card>
    <Card v-show="currentTab === 2" class="flex-1">
      <div v-for="item in historyStore.chatHistory" :key="item.name">
        <div class="flex flex-row gap-2">
          <div class="flex-1">{{ item.name }}</div>
          <div class="flex-1">{{ item.lastMsgDate }}</div>
        </div>
        <History
        :items="item.messages.map((message: any) =>`${message.role}: ${message.content}`)"
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

  const navPanelStore = useNavPanelStore();
  const historyStore = useHistoryStore()
  const currentTab = ref(0)

  onMounted(async () => {
    await historyStore.loadInputHistory()
    await historyStore.loadTransformHistory()
    await historyStore.loadChatHistory()
  })

  navPanelStore.resetNavParams({
    escBtnVisible: false,
    historyBtnDisabled: true,
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
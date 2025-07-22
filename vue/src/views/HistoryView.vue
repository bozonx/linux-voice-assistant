<template>
<ContentPadding>
  <SearchInput
    v-model="searchQuery"
    placeholder="Поиск в истории..."
    ref="searchInput"
    class="mb-4"
  />

  <Tabs
    :tabs="tabs"
    v-model:value="currentTab"
    class="mb-4"
    @update:value="onTabChange"
  />

  <HistoryList
    v-show="currentTab === 0"
    :items="historyStore.inputHistory.map((item, index) => ({ id: index, value: item }))"
    :searchQuery="searchQuery"
    textTitle="Поместить в редактор"
    @remove-item="removeInputItem"
    @clear-history="clearInputHistory()"
    @text-click="toEditor"
  />
  
  <HistoryList
    v-show="currentTab === 1"
    :items="historyStore.transformHistory.map((item, index) => ({ id: index, value: item }))"
    :searchQuery="searchQuery"
    textTitle="Поместить в редактор"
    @remove-item="removeTransformItem"
    @clear-history="clearTransformHistory()"
    @text-click="toEditor"
  />

  <HistoryList
    v-show="currentTab === 2"
    :items="historyStore.chatHistory.map((item) => ({ id: item.id, value: item.description }))"
    :searchQuery="searchQuery"
    textTitle="Посмотреть"
    @remove-item="removeChatItem"
    @clear-history="clearChatHistory()"
    @text-click="toChat"
  />
</ContentPadding>
</template>

<script setup lang="ts">
  import { useNavPanelStore } from "../stores/navPanel";
  import { useHistoryStore } from '../stores/history'
  import { ChatHistoryItem } from "../../../electron/types/types";
  import { useRouteParams } from "../stores/routeParams";
  import useToast from "../composables/useToast";

  const toast = useToast();
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

  const onTabChange = () => {
    if (searchInput.value) {
      searchInput.value.focus();
    }
  }

  const clearInputHistory = async () => {
    await historyStore.clearInputHistory()
    toast.toast("История ввода очищена", "success")
  }

  const clearTransformHistory = async () => {
    await historyStore.clearTransformHistory()
    toast.toast("История трансформаций очищена", "success")
  }

  const removeInputItem = async (item: {id: string, value: string}) => {
    await historyStore.removeFromInputHistory(item.value)
    toast.toast("Удалено из истории ввода", "success")
  }

  const removeTransformItem = async (item: {id: string, value: string}) => {
    await historyStore.removeFromTransformHistory(item.value)
    toast.toast("Удалено из истории трансформаций", "success")
  }

  const clearChatHistory = async () => {
    await historyStore.clearChatHistory()
    toast.toast("История чатов очищена", "success")
  }

  const removeChatItem = async (item: {id: string, value: string}) => {
    await historyStore.removeFromChatHistory(item.id)
    toast.toast("Удалено из истории чатов", "success")
  }

  const toEditor = (item: {id: string, value: string}) => {
    routeParams.toEditor(item.value)
  }

  const toChat = (item: {id: string, value: string}) => {
    // routeParams.toChat(item)
  }

</script>
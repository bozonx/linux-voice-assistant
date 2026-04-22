<template>
  <ContentPadding>
    <SearchInput
      v-model="searchQuery"
      placeholder="Поиск в истории..."
      ref="searchInput"
      class="mb-4 w-full"
    />

    <Tabs
      :tabs="tabs"
      v-model:value="currentTab"
      class="mb-4"
      @update:value="onTabChange"
    />

    <HistoryList
      v-show="currentTab === 0"
      :items="editorItems"
      :searchQuery="searchQuery"
      textTitle="Поместить в редактор"
      @remove-item="removeEditorItem"
      @clear-history="clearEditorHistory()"
      @text-click="toEditor"
    />

    <HistoryList
      v-show="currentTab === 1"
      :items="transformItems"
      :searchQuery="searchQuery"
      textTitle="Поместить в редактор"
      @remove-item="removeTransformItem"
      @clear-history="clearTransformHistory()"
      @text-click="toEditor"
    />

    <HistoryList
      v-show="currentTab === 2"
      :items="chatItems"
      :searchQuery="searchQuery"
      textTitle="Посмотреть"
      @remove-item="removeChatItem"
      @clear-history="clearChatHistory()"
      @text-click="toChat"
    />
  </ContentPadding>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import useToast from '../composables/useToast'
import { useHistoryStore } from '../stores/history'
import { useNavPanelStore } from '../stores/navPanel'
import { useRouteParams } from '../stores/routeParams'

const toast = useToast()
const navPanelStore = useNavPanelStore()
const historyStore = useHistoryStore()
const routeParams = useRouteParams()
const currentTab = ref(0)
const tabs = [
  { text: 'История ввода', key: 0 },
  { text: 'История трансформаций', key: 1 },
  { text: 'История чатов', key: 2 },
]

const searchQuery = ref<string>('')
const searchInput = ref<HTMLInputElement | null>(null)
const editorItems = computed(() =>
  historyStore.editorHistory.map((item: string, index: number) => ({
    id: index,
    value: item,
  }))
)
const transformItems = computed(() =>
  historyStore.transformHistory.map((item: string, index: number) => ({
    id: index,
    value: item,
  }))
)
const chatItems = computed(() =>
  historyStore.chatHistory.map((item: { id: string; description: string }) => ({
    id: item.id,
    value: item.description,
  }))
)

onMounted(async () => {
  if (searchInput.value) {
    searchInput.value.focus()
  }

  await historyStore.loadEditorHistory()
  await historyStore.loadTransformHistory()
  await historyStore.loadChatHistory()
})

navPanelStore.resetNavParams({})

const onTabChange = () => {
  if (searchInput.value) {
    searchInput.value.focus()
  }
}

const clearEditorHistory = async () => {
  await historyStore.clearEditorHistory()
  toast.toast('История ввода очищена', 'success')
}

const clearTransformHistory = async () => {
  await historyStore.clearTransformHistory()
  toast.toast('История трансформаций очищена', 'success')
}

const removeEditorItem = async (item: {
  id: string | number
  value: string
}) => {
  await historyStore.removeFromEditorHistory(item.value)
  toast.toast('Удалено из истории ввода', 'success')
}

const removeTransformItem = async (item: {
  id: string | number
  value: string
}) => {
  await historyStore.removeFromTransformHistory(item.value)
  toast.toast('Удалено из истории трансформаций', 'success')
}

const clearChatHistory = async () => {
  await historyStore.clearChatHistory()
  toast.toast('История чатов очищена', 'success')
}

const removeChatItem = async (item: { id: string | number; value: string }) => {
  await historyStore.removeFromChatHistory(item.id.toString())
  toast.toast('Удалено из истории чатов', 'success')
}

const toEditor = (item: { id: string | number; value: string }) => {
  routeParams.toEditor(item.value)
}

const toChat = (item: { id: string | number; value: string }) => {
  void item
  // routeParams.toChat(item)
}
</script>

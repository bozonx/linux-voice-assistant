import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { ChatHistoryItem } from '@shared'
import { useIpcStore } from './ipc'

export const useHistoryStore = defineStore('history', () => {
  const editorHistory = ref<string[]>([])
  const transformHistory = ref<string[]>([])
  const chatHistory = ref<ChatHistoryItem[]>([])
  const ipcStore = useIpcStore()

  const loadEditorHistory = async (): Promise<void> => {
    const loadedHistory = await ipcStore.callFunction('getEditorHistory', [])

    editorHistory.value = loadedHistory.result as string[]
  }

  const loadTransformHistory = async (): Promise<void> => {
    const loadedHistory = await ipcStore.callFunction('getTransformHistory', [])
    transformHistory.value = loadedHistory.result as string[]
  }

  const loadChatHistory = async (): Promise<void> => {
    const loadedHistory = await ipcStore.callFunction('getChatHistory', [])
    chatHistory.value = loadedHistory.result as ChatHistoryItem[]
  }

  const saveMainInputTmp = async (value: string) => {
    await ipcStore.callFunction('saveMainInputTmp', [value])
  }

  const saveEditorHistory = async (value: string) => {
    await ipcStore.callFunction('saveEditorHistory', [value])
  }

  const saveTransformHistory = async (value: string) => {
    await ipcStore.callFunction('saveTransformHistory', [value])
  }

  const saveChatHistory = async (chatHistoryItem: ChatHistoryItem) => {
    await ipcStore.callFunction('saveChatHistory', [chatHistoryItem])
  }

  const removeFromEditorHistory = async (value: string): Promise<void> => {
    await ipcStore.callFunction('removeFromEditorHistory', [value])
    editorHistory.value = editorHistory.value.filter((item) => item !== value)
  }

  const removeFromTransformHistory = async (value: string): Promise<void> => {
    await ipcStore.callFunction('removeFromTransformHistory', [value])
    transformHistory.value = transformHistory.value.filter(
      (item) => item !== value
    )
  }

  const removeFromChatHistory = async (id: string): Promise<void> => {
    await ipcStore.callFunction('removeFromChatHistory', [id])
    chatHistory.value = chatHistory.value.filter((item) => item.id !== id)
  }

  const clearMainInputTmp = async (): Promise<void> => {
    await ipcStore.callFunction('clearMainInputTmp', [])
  }

  const clearEditorHistory = async (): Promise<void> => {
    await ipcStore.callFunction('clearEditorHistory', [])
    editorHistory.value = []
  }

  const clearTransformHistory = async (): Promise<void> => {
    await ipcStore.callFunction('clearTransformHistory', [])
    transformHistory.value = []
  }

  const clearChatHistory = async (): Promise<void> => {
    await ipcStore.callFunction('clearChatHistory', [])
    chatHistory.value = []
  }

  return {
    editorHistory,
    transformHistory,
    chatHistory,
    loadEditorHistory,
    loadTransformHistory,
    loadChatHistory,
    saveMainInputTmp,
    saveEditorHistory,
    saveTransformHistory,
    saveChatHistory,
    removeFromEditorHistory,
    removeFromTransformHistory,
    removeFromChatHistory,
    clearMainInputTmp,
    clearEditorHistory,
    clearTransformHistory,
    clearChatHistory,
  }
})

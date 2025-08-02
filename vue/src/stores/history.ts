import { defineStore } from 'pinia'

import { ChatHistoryItem } from '../../../electron/types/types'
import { useIpcStore } from './ipc'

export const useHistoryStore = defineStore('history', () => {
  const inputHistory = ref<string[]>([])
  const transformHistory = ref<string[]>([])
  const chatHistory = ref<ChatHistoryItem[]>([])
  const ipcStore = useIpcStore()

  const loadInputHistory = async (): Promise<void> => {
    const loadedHistory = await ipcStore.callFunction('getInputHistory', [])

    inputHistory.value = loadedHistory.result as string[]
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

  const saveTransformHistory = async (value: string) => {
    await ipcStore.callFunction('saveTransformHistory', [value])
  }

  const saveChatHistory = async (chatHistoryItem: ChatHistoryItem) => {
    await ipcStore.callFunction('saveChatHistory', [chatHistoryItem])
  }

  const removeFromInputHistory = async (value: string): Promise<void> => {
    await ipcStore.callFunction('removeFromInputHistory', [value])
    inputHistory.value = inputHistory.value.filter((item) => item !== value)
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

  const clearInputHistory = async (): Promise<void> => {
    await ipcStore.callFunction('clearInputHistory', [])
    inputHistory.value = []
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
    inputHistory,
    transformHistory,
    chatHistory,
    loadInputHistory,
    loadTransformHistory,
    loadChatHistory,
    saveMainInputTmp,
    saveTransformHistory,
    saveChatHistory,
    removeFromInputHistory,
    removeFromTransformHistory,
    removeFromChatHistory,
    clearMainInputTmp,
    clearInputHistory,
    clearTransformHistory,
    clearChatHistory,
  }
})

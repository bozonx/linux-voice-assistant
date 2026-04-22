import { APP_CONFIG, type ChatMessage, type ChatParams, type ChatHistoryItem } from '@shared'
import { ref } from 'vue'

import { AI_TASKS } from '../../types'
import {
  createAssistantMessage,
  createChatHistoryEntry,
  prepareChatRequest,
} from './chat-helpers'

export interface ChatStoreDeps {
  sendChatMessage: (
    message: string,
    prevMessages: ChatMessage[],
    devInstructions?: string
  ) => Promise<string>
  saveChatHistory: (item: ChatHistoryItem) => void | Promise<void>
  navigateTo: (path: string) => void | Promise<void>
  notifyError: (message: string) => void
  createId: () => string
  nowIso: () => string
}

export function createChatStoreModel(deps: ChatStoreDeps) {
  const messages = ref<ChatMessage[]>([])
  const newChatParams = ref<ChatParams>({})

  const sendMessage = async (
    message: string,
    attachments?: string[],
    role?: string
  ) => {
    if (!message?.trim()) {
      deps.notifyError('Текст не выбран')
      return
    }

    let devInstructions: string | undefined
    const prevMessages = messages.value

    if (prevMessages.length > 0) {
      devInstructions = APP_CONFIG.aiInstructions[AI_TASKS.CHAT]
    }

    const { preparedMessage, userMessage } = prepareChatRequest(
      message,
      attachments,
      role
    )

    messages.value.push(userMessage)

    const result = await deps.sendChatMessage(
      preparedMessage,
      prevMessages,
      devInstructions
    )

    const assistantMessage: ChatMessage = createAssistantMessage(result)
    messages.value.push(assistantMessage)

    newChatParams.value.attachments = []

    await deps.saveChatHistory(
      createChatHistoryEntry({
        id: newChatParams.value.id || '',
        description: newChatParams.value.initialMessage || '',
        lastMsgDate: deps.nowIso(),
        userMessage,
        assistantMessage,
      })
    )

    return result
  }

  const startChat = async (chatParams: ChatParams) => {
    newChatParams.value = { ...chatParams, id: deps.createId() }
    await deps.navigateTo('/chat')
  }

  return {
    messages,
    newChatParams,
    sendMessage,
    startChat,
  }
}

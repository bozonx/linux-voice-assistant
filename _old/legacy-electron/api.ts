import { exec } from 'child_process'
import { BrowserWindow, clipboard } from 'electron'

import { typeIntoWindow } from '../common/helpers'
import {
  chatHistoryStore,
  editorHistoryStore,
  mainInputTmpStore,
  transformHistoryStore,
} from './history'
import { ParamsManager } from './paramsManager'
import { UserConfig } from './types/UserConfig'
import { AppConfig, ChatHistoryItem } from './types/types'
import { saveUserConfig } from './userConfigManager'
import VoskVoiceRecognition from './vosk'

export class Api {
  userConfig?: UserConfig
  vosk: VoskVoiceRecognition
  private voskHandler: (text: string) => void

  constructor(
    private readonly paramsManager: ParamsManager,
    private readonly appConfig: AppConfig,
    private readonly mainWindow: BrowserWindow
  ) {
    // TODO: брать из конфига
    this.vosk = new VoskVoiceRecognition('ws://localhost:2700')
  }

  async init() {}

  $setUserConfig(userConfig: UserConfig): void {
    this.userConfig = userConfig
  }

  $setVoskHandler(handler: (text: string) => void): void {
    this.voskHandler = handler
  }

  // Функция для открытия URL в браузере
  async openInBrowserAndClose(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      exec(`xdg-open "${url}"`, (error) => {
        if (error) {
          console.error('Error opening browser:', error)
          reject(error)
          return
        }
        resolve()
        this.mainWindow.close()
      })
    })
  }

  async typeIntoWindowAndClose(text: string): Promise<void> {
    await typeIntoWindow(
      this.userConfig!.xdotoolBin,
      text,
      this.paramsManager.getParams().windowId
    )

    if (this.mainWindow) this.mainWindow.close()
  }

  async putIntoClipboardAndClose(text: string): Promise<void> {
    clipboard.writeText(text)

    setTimeout(() => {
      if (this.mainWindow) this.mainWindow.close()
    }, 300)
  }

  // async closeMainWindow(): Promise<void> {
  //   if (this.mainWindow) this.mainWindow.close();
  // }

  async startVoiceRecognition(): Promise<void> {
    this.vosk.start((text) => {
      this.voskHandler(text)
    })
  }

  async stopVoiceRecognition(): Promise<void> {
    this.vosk.stop()
  }

  async saveUserConfig(userConfig: string): Promise<void> {
    const userConfigObj = JSON.parse(userConfig) as UserConfig
    await saveUserConfig(userConfigObj)
    this.userConfig = userConfigObj
  }

  async saveMainInputTmp(value: string): Promise<void> {
    try {
      mainInputTmpStore.set('value', value)
      mainInputTmpStore.set('lastSaved', new Date().toISOString())
    } catch (error) {
      console.error('Error saving main input tmp:', error)
      throw error
    }
  }

  async clearMainInputTmp(): Promise<void> {
    try {
      mainInputTmpStore.set('value', '')
      mainInputTmpStore.set('lastSaved', '')
    } catch (error) {
      console.error('Error clearing main input tmp:', error)
      throw error
    }
  }

  // async moveMainInputToHistory(): Promise<void> {
  //   try {
  //     moveInputToHistory()
  //   } catch (error) {
  //     console.error('Error moving main input to history:', error)
  //     throw error
  //   }
  // }

  async saveEditorHistory(value: string): Promise<void> {
    try {
      const history = editorHistoryStore.get('history', []) as string[]
      const filteredHistory = history.filter((item) => item !== value)

      if (filteredHistory.length > this.userConfig!.editorHistoryMaxItems) {
        filteredHistory.splice(this.userConfig!.editorHistoryMaxItems)
      }

      filteredHistory.unshift(value)
      editorHistoryStore.set('history', filteredHistory)
    } catch (error) {
      console.error('Error saving editor history:', error)
      throw error
    }
  }

  async saveTransformHistory(value: string): Promise<void> {
    try {
      const history = transformHistoryStore.get('history', []) as string[]
      const filteredHistory = history.filter((item) => item !== value)

      if (filteredHistory.length > this.userConfig!.transformHistoryMaxItems) {
        filteredHistory.splice(this.userConfig!.transformHistoryMaxItems)
      }

      filteredHistory.unshift(value)
      transformHistoryStore.set('history', filteredHistory)
    } catch (error) {
      console.error('Error saving transform:', error)
      throw error
    }
  }

  async saveChatHistory(chatHistoryItem: ChatHistoryItem): Promise<void> {
    try {
      const history = chatHistoryStore.get('history', []) as ChatHistoryItem[]
      const chatItem = history.find((item) => item.id === chatHistoryItem.id)

      if (chatItem) {
        chatItem.messages.push(...chatHistoryItem.messages)
        chatItem.lastMsgDate = chatHistoryItem.lastMsgDate
        chatItem.description = chatHistoryItem.description
      } else {
        // add new item
        if (history.length > this.userConfig!.chatHistoryMaxItems) {
          history.splice(this.userConfig!.chatHistoryMaxItems)
        }

        history.unshift(chatHistoryItem)
      }

      chatHistoryStore.set('history', history)
    } catch (error) {
      console.error('Error saving chat history:', error)
      throw error
    }
  }

  async getEditorHistory(): Promise<string[]> {
    try {
      return editorHistoryStore.get('history', []) as string[]
    } catch (error) {
      console.error('Error getting main input history:', error)
      return []
    }
  }

  async getTransformHistory(): Promise<string[]> {
    try {
      return transformHistoryStore.get('history', []) as string[]
    } catch (error) {
      console.error('Error getting transform history:', error)
      return []
    }
  }

  async getChatHistory(): Promise<ChatHistoryItem[]> {
    try {
      return chatHistoryStore.get('history', []) as ChatHistoryItem[]
    } catch (error) {
      console.error('Error getting chat history:', error)
      return []
    }
  }

  // Очистка истории main input
  async clearEditorHistory(): Promise<void> {
    try {
      editorHistoryStore.set('history', [])
    } catch (error) {
      console.error('Error clearing editor history:', error)
      throw error
    }
  }

  async clearTransformHistory(): Promise<void> {
    try {
      transformHistoryStore.set('history', [])
    } catch (error) {
      console.error('Error clearing transform history:', error)
      throw error
    }
  }

  async clearChatHistory(): Promise<void> {
    try {
      chatHistoryStore.set('history', [])
    } catch (error) {
      console.error('Error clearing chat history:', error)
      throw error
    }
  }

  async removeFromEditorHistory(value: string): Promise<void> {
    try {
      const history = editorHistoryStore.get('history', []) as string[]
      const filteredHistory = history.filter((item) => item !== value)
      editorHistoryStore.set('history', filteredHistory)
    } catch (error) {
      console.error('Error removing from editor history:', error)
      throw error
    }
  }

  async removeFromTransformHistory(value: string): Promise<void> {
    try {
      const history = transformHistoryStore.get('history', []) as string[]
      const filteredHistory = history.filter((item) => item !== value)
      transformHistoryStore.set('history', filteredHistory)
    } catch (error) {
      console.error('Error removing from transform history:', error)
      throw error
    }
  }

  async removeFromChatHistory(id: string): Promise<void> {
    try {
      const history = chatHistoryStore.get('history', []) as ChatHistoryItem[]
      const filteredHistory = history.filter((item) => item.id !== id)
      chatHistoryStore.set('history', filteredHistory)
    } catch (error) {
      console.error('Error removing from chat history:', error)
      throw error
    }
  }
}

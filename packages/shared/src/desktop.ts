import { APP_CONFIG, type AppConfig } from './app-config'
import { DEFAULT_USER_CONFIG, type UserConfig } from './user-config'

export interface IpcResult<T = unknown> {
  success: boolean
  error?: string
  result?: T
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'developer'
  content: string
}

export enum START_MODES {
  SELECT = 'select',
  VOICE = 'voice',
  AI_TASKS = 'aiTasks',
  EDITOR = 'editor',
  WRITE = 'write',
}

export interface ChatParams {
  id?: string
  initialMessage?: string
  initialRule?: string
  attachments?: string[]
}

export interface ChatHistoryItem {
  id: string
  description: string
  lastMsgDate: string
  messages: ChatMessage[]
}

export interface InitParams {
  windowId: string | null
  selectedText: string | null
  mode: START_MODES | null
  userConfig: UserConfig
  appConfig: AppConfig
  NODE_ENV: string
  isWindowShown: boolean
}

export const DEFAULT_INIT_PARAMS: InitParams = {
  windowId: null,
  selectedText: null,
  mode: START_MODES.EDITOR,
  userConfig: DEFAULT_USER_CONFIG,
  appConfig: APP_CONFIG,
  NODE_ENV: 'development',
  isWindowShown: true,
}

export const DESKTOP_EVENTS = {
  PARAMS_CHANGED: 'app://params-changed',
  VOICE_TEXT: 'app://voice-text',
} as const

export const DESKTOP_COMMANDS = {
  GET_INIT_PARAMS: 'get_init_params',
  SAVE_USER_CONFIG: 'save_user_config',
  GET_EDITOR_HISTORY: 'get_editor_history',
  GET_TRANSFORM_HISTORY: 'get_transform_history',
  GET_CHAT_HISTORY: 'get_chat_history',
  SAVE_MAIN_INPUT_TMP: 'save_main_input_tmp',
  CLEAR_MAIN_INPUT_TMP: 'clear_main_input_tmp',
  SAVE_EDITOR_HISTORY: 'save_editor_history',
  SAVE_TRANSFORM_HISTORY: 'save_transform_history',
  SAVE_CHAT_HISTORY: 'save_chat_history',
  REMOVE_FROM_EDITOR_HISTORY: 'remove_from_editor_history',
  REMOVE_FROM_TRANSFORM_HISTORY: 'remove_from_transform_history',
  REMOVE_FROM_CHAT_HISTORY: 'remove_from_chat_history',
  CLEAR_EDITOR_HISTORY: 'clear_editor_history',
  CLEAR_TRANSFORM_HISTORY: 'clear_transform_history',
  CLEAR_CHAT_HISTORY: 'clear_chat_history',
  CLOSE_WINDOW: 'close_window',
  START_VOICE_RECOGNITION: 'start_voice_recognition',
  STOP_VOICE_RECOGNITION: 'stop_voice_recognition',
  TYPE_INTO_WINDOW_AND_CLOSE: 'type_into_window_and_close',
} as const

export type DesktopCommandName =
  (typeof DESKTOP_COMMANDS)[keyof typeof DESKTOP_COMMANDS]

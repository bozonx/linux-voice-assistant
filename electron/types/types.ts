import { APP_CONFIG } from "../appConfig";

export interface CommandLineParams {
  windowId?: string;
  selectedText?: string;
  mode?: string;
}

export interface FunctionResult {
  success: boolean;
  result?: any;
  error?: Error;
}

export type AppConfig = typeof APP_CONFIG;

export interface ChatMessage {
  role: "user" | "assistant" | "developer";
  content: string;
}

export enum START_MODES {
  SELECT = "select",
  VOICE = "voice",
  AI_TASKS = "aiTasks",
  EDITOR = "editor",
  WRITE = "write",
}

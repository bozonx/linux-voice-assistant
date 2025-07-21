import { AppConfig, START_MODES } from "../../../electron/types/types";
import { UserConfig } from "../../../electron/types/UserConfig";
import { PluginContext } from "./PluginContext";

export interface InitParams {
  windowId: string | null;
  selectedText: string | null;
  mode: START_MODES;
  userConfig: UserConfig;
  appConfig: AppConfig;
  NODE_ENV: string;
  isWindowShown: boolean;
}

export interface IpcResult {
  success: boolean;
  error?: string;
  result?: any;
}

// TODO: оже есть в composables/useGlobalEvents.ts
export enum GlobalEvents {
  KEY_UP,
}

export enum AI_TASKS {
  TRANSLATE = "translate",
  VOICE_CORRECTION = "voiceCorrection",
  CORRECTION = "correction",
  AI_TASKS = "aiTasks",
  CHAT = "chat",
}

export const PRESETS_KEYS = [
  "q",
  "w",
  "e",
  "r",
  "t",

  "a",
  "s",
  "d",
  "f",
  "g",

  "z",
  "x",
  "c",
  "v",
  "b",
];

export type PluginIndex = (ctx: PluginContext) => void;

export interface InputConfigItem {
  type: "text" | "textarea" | "select" | "checkbox";
  name: string;
  label: string;
  value?: any;
  defaultValue?: any;
  options?: {
    id: string;
    name: string;
  }[];
}

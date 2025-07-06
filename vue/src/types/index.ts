import { AppConfig } from "../../../electron/types/types";
import { UserConfig } from "../../../electron/types/UserConfig";
import { PluginContext } from "./PluginContext";

export enum START_MODES {
  SELECT = "select",
  VOICE = "voice",
  EDIT = "edit",
  WRITE = "write",
}

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

export enum GlobalEvents {
  KEY_UP,
}

export enum AI_TASKS {
  TRANSLATE = "translate",
  VOICE_CORRECTION = "voiceCorrection",
  INTENTION_RECOGNITION = "intentionRecognition",
  CORRECTION = "correction",
  AI_TASKS = "aiTasks",
  ASK_AI = "askAi",
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
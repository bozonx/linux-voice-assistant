import { AppConfig } from "../../../electron/types/types";
import { UserConfig } from "../../../electron/types/UserConfig";

export enum START_MODES {
  SELECT = "select",
  VOICE = "voice",
  EDIT = "edit",
  WRITE = "write",
  EMOJI = "emoji",
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
  DEEP_EDIT = "deepEdit",
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
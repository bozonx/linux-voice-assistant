import { AppConfig } from "../../../electron/types/types";
import { UserConfig } from "../../../electron/types/UserConfig";

export enum START_MODES {
  SELECT = "select",
  VOICE = "voice",
  EDIT = "edit",
  // CORRECT = "correct",
  WRITE = "write",
}

export interface InitParams {
  windowId: string | null;
  selectedText: string | null;
  mode: START_MODES;
  userConfig: UserConfig;
  appConfig: AppConfig;
  NODE_ENV: string;
}

export interface IpcResult {
  success: boolean;
  error?: string;
  result?: any;
}

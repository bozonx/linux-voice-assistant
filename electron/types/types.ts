import { UserConfig } from "./UserConfig";

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

export interface InitialData {
  windowId: string;
  selectedText: string;
  mode: string;
  userConfig: UserConfig;
  appConfig: AppConfig;
  NODE_ENV: string;
}

export interface AppConfig {
  windowWidth: number;
  windowHeight: number;
  devServerUrl: string;
  indexHtmlPath: string;
  // AI instructions
  aiInstructions: {
    clearResult: string;
  };
}

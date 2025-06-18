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

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
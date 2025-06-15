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

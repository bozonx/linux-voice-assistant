export enum START_MODES {
  SELECT = "select",
  VOICE = "voice",
  EDIT = "edit",
}

export interface InitParams {
  windowId: string | null;
  selectedText: string | null;
  mode: START_MODES;
}

export interface IpcResult {
  success: boolean;
  error?: string;
  result?: any;
}

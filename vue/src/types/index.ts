export enum Modes {
  SELECT = "select",
  VOICE = "voice",
  EDIT = "edit",
}

export interface InitParams {
  windowId: string | null;
  selectedText: string | null;
  mode: Modes;
}

export interface IpcResult {
  success: boolean;
  error?: string;
  result?: any;
}

import { EditItem } from "../stores/edditMenu";
import { ActionItem } from "../stores/actionMenu";
import { MenuModals } from "../stores/menuModals";
import { DEFAULT_PARAMS } from "../stores/navPanel";
import { IpcResult } from "./index";

export interface PluginContext {
  registerActionsItems(actions: ActionItem[]): void;
  registerEditItems(edit: EditItem[]): void;
  getMainInputValue(): string;
  getMainInputSelectedText(): string;
  setMainInputValue(value: string): void;
  setMainInputValueAtCursor(value: string): void;
  setMainInputFocus(): void;
  nextModal(modal: MenuModals, params: Record<string, any>): void;
  backModal(): void;
  closeAllModals(): void;
  setPendingModal(params: Record<string, any>): void;
  clearPendingModal(): void;
  navPanelSetParams(params: Partial<typeof DEFAULT_PARAMS>): void;
  toEditor(text?: string): void;
  toast(message: string, type: "success" | "error" | "warn" | "info"): void;
  callApiFunction(functionName: string, args: any[]): Promise<IpcResult>;
}

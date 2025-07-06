import { EditItem } from "src/stores/edditMenu";
import { ActionItem } from "../stores/actionMenu";
import { MenuModals } from "src/stores/menuModals";
import { DEFAULT_PARAMS } from "src/stores/navPanel";

export interface PluginContext {
  registerActionsItems(actions: ActionItem[]): void;
  registerEditItems(edit: EditItem[]): void;
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
}

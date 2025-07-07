import { BrowserWindow, clipboard } from "electron";
import { exec } from "child_process";
import { UserConfig } from "./types/UserConfig";
import { AppConfig } from "./types/types";
import { typeIntoWindow } from "../common/helpers";
import { saveUserConfig } from "./userConfigManager";
import { mainInputStore, mainInputHistoryStore } from "./history";
import VoskVoiceRecognition from "./vosk";
import { CommandLineParams } from "./types/types";

export class Api {
  userConfig?: UserConfig;
  vosk: VoskVoiceRecognition;
  private voskHandler: (text: string) => void;

  constructor(
    private readonly appConfig: AppConfig,
    private readonly args: CommandLineParams,
    private readonly mainWindow: BrowserWindow
  ) {
    // TODO: брать из конфига
    this.vosk = new VoskVoiceRecognition("ws://localhost:2700");
  }

  async init() {}

  $setUserConfig(userConfig: UserConfig): void {
    this.userConfig = userConfig;
  }

  $setVoskHandler(handler: (text: string) => void): void {
    this.voskHandler = handler;
  }

  // Функция для открытия URL в браузере
  async openInBrowserAndClose(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      exec(`xdg-open "${url}"`, (error) => {
        if (error) {
          console.error("Error opening browser:", error);
          reject(error);
          return;
        }
        resolve();
        this.mainWindow.close();
      });
    });
  }

  async typeIntoWindowAndClose(text: string): Promise<void> {
    await typeIntoWindow(this.userConfig!.xdotoolBin, text, this.args.windowId);

    this.closeMainWindow();
  }

  async putIntoClipboardAndClose(text: string): Promise<void> {
    clipboard.writeText(text);

    setTimeout(() => {
      this.closeMainWindow();
    }, 300);
  }

  async closeMainWindow(): Promise<void> {
    if (this.mainWindow) this.mainWindow.close();
  }

  async startVoiceRecognition(): Promise<void> {
    this.vosk.start((text) => {
      this.voskHandler(text);
    });
  }

  async stopVoiceRecognition(): Promise<void> {
    this.vosk.stop();
  }

  async saveUserConfig(userConfig: string): Promise<void> {
    const userConfigObj = JSON.parse(userConfig) as UserConfig;
    await saveUserConfig(userConfigObj);
    this.userConfig = userConfigObj;
  }

  async saveMainInput(value: string): Promise<void> {
    try {
      mainInputStore.set("value", value);
      mainInputStore.set("lastSaved", new Date().toISOString());
    } catch (error) {
      console.error("Error saving main input:", error);
      throw error;
    }
  }

  async getMainInputHistory(): Promise<string[]> {
    try {
      return mainInputHistoryStore.get("history", []) as string[];
    } catch (error) {
      console.error("Error getting main input history:", error);
      return [];
    }
  }

  // Очистка истории main input
  async clearMainInputHistory(): Promise<void> {
    try {
      mainInputHistoryStore.set("history", []);
    } catch (error) {
      console.error("Error clearing main input history:", error);
      throw error;
    }
  }

  async removeFromMainInputHistory(value: string): Promise<void> {
    try {
      const history = mainInputHistoryStore.get("history", []) as string[];
      const filteredHistory = history.filter((item) => item !== value);
      mainInputHistoryStore.set("history", filteredHistory);
    } catch (error) {
      console.error("Error removing from main input history:", error);
      throw error;
    }
  }
}

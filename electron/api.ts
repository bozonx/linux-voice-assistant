//const electron = require("electron");
import { BrowserWindow } from "electron";
import { exec } from "child_process";
import { UserConfig } from "./types/UserConfig";
import { AppConfig } from "./types/types";
import { typeIntoWindow } from "../common/helpers";

export class Api {
  private readonly appConfig: AppConfig;
  private readonly userConfig: UserConfig;
  private readonly mainWindow: BrowserWindow;

  constructor(
    appConfig: AppConfig,
    userConfig: UserConfig,
    mainWindow: BrowserWindow
  ) {
    this.appConfig = appConfig;
    this.userConfig = userConfig;
    this.mainWindow = mainWindow;
  }

  async init() {}

  // Функция для открытия URL в браузере
  async openInBrowserAndClose(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      exec(
        `xdg-open "${this.userConfig.internetSearchUrl}${encodeURIComponent(
          url
        )}"`,
        (error) => {
          if (error) {
            console.error("Error opening browser:", error);
            reject(error);
            return;
          }
          resolve();
          this.mainWindow.close();
        }
      );
    });
  }

  async typeIntoWindowAndClose(text: string, windowId: string): Promise<void> {
    await typeIntoWindow(text, windowId);

    if (this.mainWindow) this.mainWindow.close();
  }

  async closeMainWindow(): Promise<void> {
    if (this.mainWindow) this.mainWindow.close();
  }
}

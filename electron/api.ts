//const electron = require("electron");
import { BrowserWindow } from "electron";
import { exec } from "child_process";
import { UserConfig } from "./types/UserConfig";
import { AppConfig } from "./types/types";
import { typeIntoWindow } from "../common/helpers";
import { saveUserConfig } from "./userConfigManager";

export class Api {
  private readonly appConfig: AppConfig;
  userConfig: UserConfig;
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
    await typeIntoWindow(this.userConfig.xdotoolBin, text, windowId);

    if (this.mainWindow) this.mainWindow.close();
  }

  async closeMainWindow(): Promise<void> {
    if (this.mainWindow) this.mainWindow.close();
  }

  async saveUserConfig(userConfig: string): Promise<void> {
    const userConfigObj = JSON.parse(userConfig) as UserConfig;
    await saveUserConfig(userConfigObj);
    this.userConfig = userConfigObj;
  }

  async saveMainInput(value: string): Promise<void> {
    console.log("Saving main input", value);
  }
}

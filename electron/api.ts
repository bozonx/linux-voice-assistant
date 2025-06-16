//const electron = require("electron");
import { BrowserWindow } from "electron";
import { exec } from "child_process";
import { UserConfig } from "./types/UserConfig";
import { AppConfig } from "./types/types";

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

  async init() {
  }

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
    return new Promise<void>((resolve, reject) => {
      // Сначала активируем окно
      exec(
        `${this.userConfig.xdotoolBin} windowactivate ${windowId}`,
        (error) => {
          if (error) {
            console.error("Error activating window:", error);
            reject(error);
            return;
          }

          // Затем вводим текст
          exec(`${this.userConfig.xdotoolBin} type "${text}"`, (error) => {
            if (error) {
              console.error("Error typing text:", error);
              reject(error);
              return;
            }
            // Закрываем окно после ввода текста
            if (this.mainWindow) {
              this.mainWindow.close();
            }
            resolve();
          });
        }
      );
    });
  }

  async closeMainWindow(): Promise<void> {
    this.mainWindow.close();
  }
}

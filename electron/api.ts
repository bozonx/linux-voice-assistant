//const electron = require("electron");
import { BrowserWindow } from "electron";
import { exec } from "child_process";
import { APP_CONFIG } from "./appConfig";
import { UserConfig } from "./types/UserConfig";
import { AI } from "./ai";

export class Api {
  private readonly appConfig: typeof APP_CONFIG;
  private readonly userConfig: UserConfig;
  private readonly ai: AI;

  constructor(appConfig: typeof APP_CONFIG, userConfig: UserConfig) {
    this.appConfig = appConfig;
    this.userConfig = userConfig;
    this.ai = new AI();
  }

  async init() {
    await this.ai.init();
  }

  // Функция для открытия URL в браузере
  async openInBrowserAndClose(
    mainWindow: BrowserWindow,
    url: string
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      exec(`xdg-open "${url}"`, (error) => {
        if (error) {
          console.error("Error opening browser:", error);
          reject(error);
          return;
        }
        resolve();
        mainWindow.close();
      });
    });
  }

  async typeIntoWindowAndClose(
    mainWindow: BrowserWindow,
    text: string,
    windowId: string
  ): Promise<void> {
    // Сначала активируем окно
    return new Promise<void>((resolve, reject) => {
      exec(`${config.xdotoolBin} windowactivate ${windowId}`, (error) => {
        if (error) {
          console.error("Error activating window:", error);
          reject(error);
          return;
        }

        // Затем вводим текст
        exec(`${config.xdotoolBin} type "${text}"`, (error) => {
          if (error) {
            console.error("Error typing text:", error);
            reject(error);
            return;
          }
          // Закрываем окно после ввода текста
          if (mainWindow) {
            mainWindow.close();
          }
          resolve();
        });
      });
    });
  }

  async closeMainWindow(mainWindow: BrowserWindow): Promise<void> {
    mainWindow.close();
  }

  async translateTextAndInsert(
    mainWindow: BrowserWindow,
    text: string,
    sourceLang: string,
    targetLang: string,
    windowId: string
  ): Promise<void> {
    const translatedText = await translateText(
      mainWindow,
      text,
      sourceLang,
      targetLang
    );

    await typeIntoWindowAndClose(mainWindow, translatedText, windowId);
  }
}

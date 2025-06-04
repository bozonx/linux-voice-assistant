//const electron = require("electron");
import { BrowserWindow } from "electron";
import { exec } from "child_process";
import { config } from "./config";
// const Vosk = require("./vosk");

// const voiceRecognition = new Vosk((text) => {
//   console.log(text);
// }, config.voskWsUrl);

// Интерфейсы для типизации
interface TranslationResult {
  text: string;
  error?: string;
}

interface ExternalFunctions {
  translateText: (
    mainWindow: BrowserWindow,
    text: string,
    sourceLang: string,
    targetLang: string
  ) => Promise<string>;
  openInBrowserAndClose: (
    mainWindow: BrowserWindow,
    url: string
  ) => Promise<void>;
  typeIntoWindowAndClose: (
    mainWindow: BrowserWindow,
    text: string,
    windowId: string
  ) => Promise<void>;
  translateTextAndInsert: (
    mainWindow: BrowserWindow,
    text: string,
    sourceLang: string,
    targetLang: string,
    windowId: string
  ) => Promise<void>;
}

// Функция для открытия URL в браузере
async function openInBrowserAndClose(
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

// Функция для перевода текста
async function translateText(
  mainWindow: BrowserWindow,
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<string> {
  const argosPath = config.argostranslateBin;
  const command = `${argosPath} --from ${sourceLang} --to ${targetLang} "${text}"`;

  return new Promise<string>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Translation error: ${error.message}`));
        return;
      }
      if (stderr) {
        reject(new Error(`Translation stderr: ${stderr}`));
        return;
      }

      resolve(stdout.trim());
    });
  });
}

async function typeIntoWindowAndClose(
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

// Экспортируем функции
export const functions: ExternalFunctions = {
  translateText,
  openInBrowserAndClose,
  typeIntoWindowAndClose,

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
  },
};

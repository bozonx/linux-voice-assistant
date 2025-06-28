import { app, BrowserWindow, ipcMain, Tray } from "electron";
import path from "path";
import { Api } from "./api";
import { getCommandLineArgs } from "../common/helpers";
import { CommandLineParams, FunctionResult } from "./types/types.js";
import { APP_CONFIG } from "./appConfig.js";
import { createOrReadConfig } from "./userConfigManager";
import { makeInputHistoryOnStart } from "./history";
import { manageTray } from "./Tray";

// let mainWindow: BrowserWindow | null = null;
// let tray: Tray | null = null;

// Отключаем предупреждения о безопасности
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

// process.env.DIST = path.join(__dirname, "../..");
// process.env.VITE_PUBLIC = app.isPackaged
//   ? process.env.DIST
//   : path.join(process.env.DIST, "public");

async function configure(app, mainWindow: BrowserWindow) {
  const args: CommandLineParams = getCommandLineArgs();
  const userConfig = await createOrReadConfig(app.getPath("userData"));
  const api = new Api(APP_CONFIG, userConfig, mainWindow);

  await api.init();
  await makeInputHistoryOnStart();

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(APP_CONFIG.devServerUrl);
  } else {
    mainWindow.loadFile(path.join(__dirname, APP_CONFIG.indexHtmlPath));
  }

  // Отправляем параметры в renderer процесс после загрузки страницы
  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow?.webContents.send("init-params", {
      ...args,
      NODE_ENV: process.env.NODE_ENV,
      appConfig: APP_CONFIG,
      userConfig,
    });
  });

  // Open DevTools in development mode
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }

  ipcMain.handle(
    "call-function",
    async (event, funcName: string, args: any[]): Promise<FunctionResult> => {
      try {
        const result = await (api[funcName as keyof Api] as any)(...args);
        return { success: true, result };
      } catch (error) {
        console.error("Error executing function in window:", error);
        return { success: false, error: error as Error };
      }
    }
  );

  api.$setVoskHandler((text) => {
    mainWindow?.webContents.send("vosk-text", text);
  });
}

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: APP_CONFIG.windowWidth,
    height: APP_CONFIG.windowHeight,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Создаем иконку в трее
  // tray = new Tray(path.join(__dirname, "icon.png"));
  const tray = new Tray(
    "/mnt/disk2/workspace/linux-voice-assistant/electron/icon.png"
  );

  configure(app, mainWindow);
  manageTray(app, mainWindow, tray);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      configure(app, mainWindow);
      manageTray(app, mainWindow, tray);
    }
  });
});

app.on("open-url", (event, urlString) => {
  event.preventDefault();
  const parsedUrl = new URL(urlString);
  const page = parsedUrl.searchParams.get("page"); // Извлекаем параметр page

  console.log("urlString", urlString, page, parsedUrl);
  // if (mainWindow) {
  //   mainWindow.show(); // Показываем окно
  //   if (page) {
  //     // Загружаем нужную страницу
  //     mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}#${page}`);
  //   }
  // }
});

// xdg-open myapp://open?page=aa

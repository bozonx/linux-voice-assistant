import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { Api } from "./api";
import { getCommandLineArgs } from "./helpers";
import { CommandLineParams, FunctionResult } from "./types/types.js";
import { APP_CONFIG } from "./appConfig.js";
import { createOrReadConfig } from "./config";

let mainWindow: BrowserWindow | null = null;

// Отключаем предупреждения о безопасности
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

// process.env.DIST = path.join(__dirname, "../..");
// process.env.VITE_PUBLIC = app.isPackaged
//   ? process.env.DIST
//   : path.join(process.env.DIST, "public");

async function createWindow() {
  const params: CommandLineParams = getCommandLineArgs();
  const userConfig = await createOrReadConfig();
  const api = new Api(APP_CONFIG, userConfig);
  
  await api.init();

  mainWindow = new BrowserWindow({
    width: APP_CONFIG.windowWidth,
    height: APP_CONFIG.windowHeight,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(APP_CONFIG.devServerUrl);
  } else {
    mainWindow.loadFile(APP_CONFIG.indexHtmlPath);
  }

  // Отправляем параметры в renderer процесс после загрузки страницы
  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow?.webContents.send("init-params", {
      ...params,
      NODE_ENV: process.env.NODE_ENV,
      appConfig: APP_CONFIG,
      userConfig,
    });
  });

  // Open DevTools in development mode
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    mainWindow = null;
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.handle(
  "call-function",
  async (event, funcName: string, args: any[]): Promise<FunctionResult> => {
    try {
      const func = functions[funcName as keyof typeof functions];
      type FuncType = typeof func;
      const result = await (func as Function)(mainWindow, ...args);
      return { success: true, result };
    } catch (error) {
      console.error("Error executing function in window:", error);
      return { success: false, error: error as Error };
    }
  }
);

import { app, BrowserWindow, ipcMain, Tray } from "electron";
import path from "path";
import { Api } from "./api";
import { getCommandLineArgs } from "../common/helpers";
import { CommandLineParams, FunctionResult } from "./types/types.js";
import { APP_CONFIG } from "./appConfig.js";
import { createOrReadConfig } from "./userConfigManager";
import { manageTray } from "./Tray";
import { handleExternalCommands } from "./ExternalCommands";
import { moveInputToHistory } from "./history";

// Отключаем предупреждения о безопасности
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

let mainWindow: BrowserWindow | null = null;

if (!app.requestSingleInstanceLock()) {
  app.quit();
}

async function onClose() {
  await moveInputToHistory();
}

async function configure() {
  mainWindow = new BrowserWindow({
    width: APP_CONFIG.windowWidth,
    height: APP_CONFIG.windowHeight,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const tray = new Tray(path.join(__dirname, "assets/tray-icon.png"));
  const args: CommandLineParams = getCommandLineArgs();
  const api = new Api(APP_CONFIG, args, mainWindow);

  await api.init();

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(APP_CONFIG.devServerUrl);
  } else {
    mainWindow.loadFile(path.join(__dirname, APP_CONFIG.indexHtmlPath));
  }

  // Отправляем параметры в renderer процесс после загрузки страницы
  mainWindow.webContents.on("did-finish-load", async () => {
    const userConfig = await createOrReadConfig(app.getPath("userData"));

    api.$setUserConfig(userConfig);

    mainWindow?.webContents.send("params", {
      ...args,
      NODE_ENV: process.env.NODE_ENV,
      appConfig: APP_CONFIG,
      userConfig,
      isWindowShown: true,
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

  mainWindow.on("show", () => {
    mainWindow?.webContents.send("params", {
      isWindowShown: true,
    });
  });

  mainWindow.on("hide", () => {
    mainWindow?.webContents.send("params", {
      isWindowShown: false,
    });
  });

  manageTray(app, mainWindow, tray, onClose);
  handleExternalCommands(mainWindow);
}

// Обработка полного выхода из приложения
app.on("before-quit", () => {
  // @ts-ignore
  app.isQuitting = true;
  onClose();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.whenReady().then(() => {
  configure();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      configure();
    }
  });
});

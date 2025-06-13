import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { functions } from "./functions";

let mainWindow: BrowserWindow | null = null;

// Интерфейс для параметров командной строки
interface CommandLineParams {
  windowId?: string;
  selectedText?: string;
  mode?: string;
}

// Получаем аргументы командной строки
const getCommandLineArgs = (): CommandLineParams => {
  const args: string[] = process.argv.slice(2);
  const params: CommandLineParams = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--window-id" && i + 1 < args.length) {
      params.windowId = args[i + 1];
      i++;
    } else if (args[i] === "--selected-text" && i + 1 < args.length) {
      params.selectedText = args[i + 1];
      i++;
    } else if (args[i] === "--mode" && i + 1 < args.length) {
      params.mode = args[i + 1];
      i++;
    }
  }

  return params;
};

// Отключаем предупреждения о безопасности
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

process.env.DIST = path.join(__dirname, "../..");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "public");

function createWindow() {
  const params: CommandLineParams = getCommandLineArgs();

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../vue/dist/index.html"));
  }

  // Отправляем параметры в renderer процесс после загрузки страницы
  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow?.webContents.send("init-params", params);
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

// Интерфейс для результата выполнения функции
interface FunctionResult {
  success: boolean;
  result?: any;
  error?: Error;
}

// Обработчики IPC
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

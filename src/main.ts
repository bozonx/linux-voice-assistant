import { app, BrowserWindow, ipcMain } from "electron";
import { functions } from "./helper-external";

const DEBUG: boolean = true;

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

function createWindow(): void {
  const params: CommandLineParams = getCommandLineArgs();

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (!mainWindow) return;

  mainWindow.loadFile("src/index.html");

  // Отправляем параметры в renderer процесс после загрузки страницы
  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow?.webContents.send("init-params", params);
  });

  // Open DevTools in development mode
  if (DEBUG) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// Интерфейс для результата выполнения функции
interface FunctionResult {
  success: boolean;
  result?: any;
  error?: Error;
}

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

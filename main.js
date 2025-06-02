const { app, BrowserWindow, ipcMain } = require("electron");
const { functions } = require("./helper-external");
const { exec } = require("child_process");

const DEBUG = true;

let mainWindow = null;

// Получаем аргументы командной строки
const getCommandLineArgs = () => {
  const args = process.argv.slice(2);
  const params = {};

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

function createWindow() {
  const params = getCommandLineArgs();

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadFile("index.html");

  // Отправляем параметры в renderer процесс после загрузки страницы
  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.webContents.send("init-params", params);
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

ipcMain.handle("call-function", async (event, funcName, args) => {
  try {
    const result = await functions[funcName](mainWindow, ...args);

    return { success: true, result };
  } catch (error) {
    console.error("Error executing function in window:", error);
    return { success: false, error: error };
  }
});

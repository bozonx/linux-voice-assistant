import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main
// │ │ │   └── index.js
// │ │ └── preload
// │ │   └── index.js
// │
process.env.DIST = path.join(__dirname, "../..");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
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

// Обработчики IPC
ipcMain.handle("call-function", async (event, functionName, args) => {
  try {
    // Здесь будет реализация вызова функций
    return { success: true, result: null };
  } catch (error) {
    return { success: false, error: String(error) };
  }
});

ipcMain.handle(
  "execute-in-window",
  async (event, { windowId, functionCode }) => {
    try {
      // Здесь будет реализация выполнения кода в окне
      return { success: true, result: null };
    } catch (error) {
      return { success: false, error: String(error) };
    }
  }
);

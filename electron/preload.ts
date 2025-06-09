import { contextBridge, ipcRenderer } from "electron";

// Предоставляем безопасный доступ к ipcRenderer
contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    // Метод для вызова функций в main процессе
    invoke: (channel: string, ...args: any[]) =>
      ipcRenderer.invoke(channel, ...args),

    // Метод для подписки на события
    on: (channel: string, func: (...args: any[]) => void) => {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    },

    // Метод для отписки от событий
    removeListener: (channel: string, func: (...args: any[]) => void) => {
      ipcRenderer.removeListener(channel, func);
    },
  },
});

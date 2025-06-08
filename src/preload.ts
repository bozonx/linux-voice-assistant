import { contextBridge, ipcRenderer } from "electron";

// // Expose protected methods that allow the renderer process to use
// // the ipcRenderer without exposing the entire object
// contextBridge.exposeInMainWorld("electron", {
//   ipcRenderer: {
//     invoke: (channel: string, ...args: any[]) =>
//       ipcRenderer.invoke(channel, ...args),
//     on: (channel: string, func: (...args: any[]) => void) => {
//       ipcRenderer.on(channel, (event, ...args) => func(...args));
//     },
//     removeListener: (channel: string, func: (...args: any[]) => void) => {
//       ipcRenderer.removeListener(channel, func);
//     },
//   },
// });

// Экспортируем API в renderer процесс
contextBridge.exposeInMainWorld('electron', {
  // Здесь можно добавить методы для взаимодействия с main процессом
  // Например:
  // sendMessage: (message: string) => ipcRenderer.send('message', message),
  // onMessage: (callback: (message: string) => void) => {
  //   ipcRenderer.on('message', (_event, message) => callback(message));
  // }
});

interface IpcRenderer {
  invoke(channel: string, ...args: any[]): Promise<any>;
  on(channel: string, func: (...args: any[]) => void): void;
  removeListener(channel: string, func: (...args: any[]) => void): void;
}

interface Electron {
  ipcRenderer: IpcRenderer;
}

interface Window {
  electron: Electron;
}

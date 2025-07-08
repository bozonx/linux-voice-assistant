import { BrowserWindow } from "electron";

export class ParamsManager {
  private params: Record<string, any> = {};

  constructor(private readonly mainWindow: BrowserWindow) {}

  getParams() {
    return this.params;
  }

  /**
   * Set params on server and client
   * @param params
   */
  setParams(params: Record<string, any>) {
    this.params = { ...this.params, ...params };

    this.mainWindow?.webContents.send("params", this.params);
  }
}

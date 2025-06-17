import { exec } from "child_process";
import { CommandLineParams } from "../electron/types/types.js";

export function getCommandLineArgs(): CommandLineParams {
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
}

export async function typeIntoWindow(
  xdotoolBin: string,
  text: string,
  windowId: string
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    // Сначала активируем окно
    exec(`${xdotoolBin} windowactivate ${windowId}`, (error) => {
      if (error) {
        console.error("Error activating window:", error);
        reject(error);
        return;
      }

      // Затем вводим текст
      exec(`${xdotoolBin} type "${text}"`, (error) => {
        if (error) {
          console.error("Error typing text:", error);
          reject(error);
          return;
        }

        resolve();
      });
    });
  });
}

const { contextBridge } = require("electron");

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

const params = getCommandLineArgs();

contextBridge.exposeInMainWorld("INIT_PARAMS", getCommandLineArgs());

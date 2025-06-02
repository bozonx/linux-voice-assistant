//const electron = require("electron");
const { exec } = require("child_process");
const { config } = require("./config");

//const { ipcRenderer } = electron;

// Функция для отправки текста в main процесс
// function sendTextToMain(text) {
//   if (windowId) {
//     ipcRenderer.send("type-text-to-window", { text, windowId });
//   }
// }

// Обработчик для выполнения xdotool команды
// Вызывается из браузера чтобы выполнить внешнюю команду
// ipcMain.on("type-text-to-window", (event, { text, windowId }) => {
//   typeIntoWindow(text, windowId, mainWindow);
// });

module.exports.functions = {
  translateText,
  openInBrowserAndClose,
  typeIntoWindowAndClose,

  async translateTextAndInsert(
    mainWindow,
    text,
    sourceLang,
    targetLang,
    windowId
  ) {
    const translatedText = await translateText(
      mainWindow,
      text,
      sourceLang,
      targetLang
    );

    await typeIntoWindowAndClose(mainWindow, translatedText, windowId);
  },
};

// Функция для открытия URL в браузере
async function openInBrowserAndClose(mainWindow, url) {
  return new Promise((resolve, reject) => {
    exec(`xdg-open "${url}"`, (error) => {
      if (error) {
        console.error("Error opening browser:", error);
        reject(error);
      }
      resolve();
      mainWindow.close();
    });
  });
}

// Функция для перевода текста
async function translateText(mainWindow, text, sourceLang, targetLang) {
  const argosPath = config.argostranslateBin;
  const command = `${argosPath} --from ${sourceLang} --to ${targetLang} "${text}"`;

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject("Translation error:", error);
        return;
      }
      if (stderr) {
        reject("Translation stderr:", stderr);
        return;
      }

      resolve(stdout.trim());
    });
  });
}

async function typeIntoWindowAndClose(mainWindow, text, windowId) {
  // Сначала активируем окно
  return new Promise((resolve, reject) => {
    exec(`${config.xdotoolBin} windowactivate ${windowId}`, (error) => {
      if (error) {
        console.error("Error activating window:", error);
        reject(error);
        return;
      }

      // Затем вводим текст
      exec(`${config.xdotoolBin} type "${text}"`, (error) => {
        if (error) {
          console.error("Error typing text:", error);
          reject(error);
          return;
        }
        // Закрываем окно после ввода текста
        if (mainWindow) {
          mainWindow.close();
        }
        resolve();
      });
    });
  });
}

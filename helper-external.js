const electron = require("electron");
const { exec } = require("child_process");

const { ipcRenderer } = electron;

// Функция для отправки текста в main процесс
function sendTextToMain(text) {
  if (windowId) {
    ipcRenderer.send("type-text-to-window", { text, windowId });
  }
}

// Функция для открытия URL в браузере
function openInBrowser(url) {
  exec(`xdg-open "${url}"`, (error) => {
    if (error) {
      console.error("Error opening browser:", error);
    }
  });
}

// Функция для перевода текста
function translateText(text, sourceLang, targetLang) {
  const argosPath =
    "/home/ivan/.local/opt/argostranslate/argos_env/bin/argos-translate";
  const command = `${argosPath} --from ${sourceLang} --to ${targetLang} "${text}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("Translation error:", error);
      return;
    }
    if (stderr) {
      console.error("Translation stderr:", stderr);
      return;
    }

    // Отправляем переведенный текст в main процесс
    sendTextToMain(stdout.trim());
  });
}

function typeIntoWindow(text, windowId, mainWindow) {
  // Сначала активируем окно
  exec(`xdotool windowactivate ${windowId}`, (error) => {
    if (error) {
      console.error("Error activating window:", error);
      return;
    }

    // Затем вводим текст
    exec(`xdotool type "${text}"`, (error) => {
      if (error) {
        console.error("Error typing text:", error);
      }
      // Закрываем окно после ввода текста
      if (mainWindow) {
        mainWindow.close();
      }
    });
  });
}

const { ipcRenderer } = require("electron");
const { exec } = require("child_process");

export const MODES = {
  write: "write",
  select: "select",
};

// Функция для отправки текста в main процесс
export function sendTextToMain(text) {
  if (windowId) {
    ipcRenderer.send("type-text-to-window", { text, windowId });
  }
}

// Функция для открытия URL в браузере
export function openInBrowser(url) {
  exec(`xdg-open "${url}"`, (error) => {
    if (error) {
      console.error("Error opening browser:", error);
    }
  });
}

// Функция для перевода текста
export function translateText(text, sourceLang, targetLang) {
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

// Получаем текст из textarea
export function getInputText() {
  const textarea = document.getElementById("inputText");

  return textarea.value;
}

export function typeIntoWindow(text, windowId, mainWindow) {
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

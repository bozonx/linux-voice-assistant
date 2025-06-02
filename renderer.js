// This file contains the frontend logic for your application
const { ipcRenderer } = require("electron");

let windowId = null;
let selectedText = null;
let mode = null;

document.addEventListener("DOMContentLoaded", () => {
  console.log("Application started");

  // Устанавливаем фокус на textarea
  const textarea = document.getElementById("inputText");
  textarea.focus();

  // Получаем параметры инициализации
  ipcRenderer.on("init-params", (event, params) => {
    windowId = params.windowId;
    selectedText = params.selectedText;
    mode = params.mode;

    console.log("Received params:", params);

    // Если есть выбранный текст, вставляем его в textarea
    if (mode === MODES.select && selectedText) {
      textarea.value = selectedText;
      // Устанавливаем курсор в конец текста
      textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
    }
  });

  // Обработчики для кнопок
  document.getElementById("createNoteInsert").addEventListener("click", () => {
    console.log("Создание заметки:", getInputText());
  });

  document.getElementById("correctTextInsert").addEventListener("click", () => {
    console.log("Корректировка текста:", getInputText());
  });

  document.getElementById("editTextInsert").addEventListener("click", () => {
    console.log("Редактура текста:", getInputText());
  });

  document
    .getElementById("searchTextInsert")
    .addEventListener("click", async () => {
      const searchText = getInputText();
      const result = await ipcRenderer.invoke(
        "call-function",
        "openInBrowserAndClose",
        [`https://duckduckgo.com/?q=${encodeURIComponent(searchText)}`]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("translateEnToRuInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const result = await ipcRenderer.invoke(
        "call-function",
        "translateTextAndInsert",
        [text, "en", "ru", windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("translateEnToRuText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const result = await ipcRenderer.invoke(
        "call-function",
        "translateText",
        [text, "en", "ru"]
      );

      if (!result.success) {
        console.error(result.error);
      }

      textarea.value = result.result;
      textarea.focus();
    });

  document
    .getElementById("translateRuToEnInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (text.trim()) {
        const result = await ipcRenderer.invoke(
          "call-function",
          "translateTextAndInsert",
          [text, "ru", "en", windowId]
        );

        if (!result.success) {
          console.error(result.error);
        }
      }
    });

  document
    .getElementById("translateRuToEnText")
    .addEventListener("click", async () => {
      const text = getInputText();

      if (!text.trim()) return;

      const result = await ipcRenderer.invoke(
        "call-function",
        "translateText",
        [text, "ru", "en"]
      );

      if (!result.success) {
        console.error(result.error);
      }

      textarea.value = result.result;
      textarea.focus();
    });

  document
    .getElementById("translateRuToEsInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const result = await ipcRenderer.invoke(
        "call-function",
        "translateTextAndInsert",
        [text, "ru", "es", windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("translateRuToEsText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const result = await ipcRenderer.invoke(
        "call-function",
        "translateText",
        [text, "ru", "es"]
      );

      if (!result.success) {
        console.error(result.error);
      }

      textarea.value = result.result;
      textarea.focus();
    });

  document
    .getElementById("translateEsToRuInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const result = await ipcRenderer.invoke(
        "call-function",
        "translateTextAndInsert",
        [text, "es", "ru", windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("translateEsToRuText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const result = await ipcRenderer.invoke(
        "call-function",
        "translateText",
        [text, "es", "ru"]
      );

      if (!result.success) {
        console.error(result.error);
      }

      textarea.value = result.result;
      textarea.focus();
    });

  document
    .getElementById("toCapitalizeInsert")
    .addEventListener("click", async () => {
      const text = getInputText();

      if (!text.trim()) return;

      const resultText = capitalizeFirstLetter(text);

      const result = await ipcRenderer.invoke(
        "call-function",
        "typeIntoWindowAndClose",
        [resultText, windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document.getElementById("toUppercaseInsert").addEventListener("click", () => {
    const text = getInputText();
    const result = text.toUpperCase();
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document.getElementById("toLowercaseInsert").addEventListener("click", () => {
    const text = getInputText();
    const result = text.toLowerCase();
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document.getElementById("toCamelCaseInsert").addEventListener("click", () => {
    const text = getInputText();
    const result = text
      .split(/[\s-_]+/)
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("");
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document
    .getElementById("toPascalCaseInsert")
    .addEventListener("click", () => {
      const text = getInputText();
      const result = text
        .split(/[\s-_]+/)
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("");
      textarea.value = result;
      sendTextToMain(result);
      textarea.focus();
    });

  document.getElementById("toSnakeCaseInsert").addEventListener("click", () => {
    const text = getInputText();
    const result = text
      .split(/[\s-_]+/)
      .map((word) => word.toLowerCase())
      .join("_");
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document.getElementById("toKebabCaseInsert").addEventListener("click", () => {
    const text = getInputText();
    const result = text
      .split(/[\s-_]+/)
      .map((word) => word.toLowerCase())
      .join("-");
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });
});

// Функция для выполнения кода в окне и получения результата
async function executeInWindow(functionCode) {
  try {
    if (!windowId) {
      throw new Error('Window ID is not set');
    }

    const result = await ipcRenderer.invoke('execute-in-window', {
      windowId,
      functionCode
    });

    if (!result.success) {
      throw new Error(result.error);
    }

    return result.result;
  } catch (error) {
    console.error('Error executing function in window:', error);
    throw error;
  }
}

// Пример использования:
// document.getElementById('someButton').addEventListener('click', async () => {
//   try {
//     const result = await executeInWindow('someFunction()');
//     console.log('Function result:', result);
//   } catch (error) {
//     console.error('Failed to execute function:', error);
//   }
// }); 
// This file contains the frontend logic for your application
const { ipcRenderer } = require("electron");

let windowId = null;
let selectedText = null;
let mode = null;


document.addEventListener("DOMContentLoaded", () => {
  console.log("Application started");

  const mainInput = document.getElementById("inputText");

  // Получаем параметры инициализации
  ipcRenderer.on("init-params", async (event, params) => {
    windowId = params.windowId;
    selectedText = params.selectedText;
    mode = params.mode;

    console.log("Received params:", params);

    // Режим выбора текста в предыдущем окне
    if (mode === MODES.select && selectedText) {
      mainInput.value = selectedText;
      // Выбираем весь текст в textarea
      mainInput.select();
      mainInput.focus();

      // Устанавливаем курсор в конец текста
      //textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
    }
    // Режим голосового ввода - сразу запускаем распознавание голоса
    else if (mode === MODES.voice) {
      await ipcRenderer.invoke("call-function", "startVoiceRecognition", []);
      document.getElementById("voiceInput").classList.add("mini-btn-pressed");
      document
        .getElementById("voice-recognition-process")
        .classList.add("active");
    }
  });

  ipcRenderer.on("voice-recognition", (event, data) => {
    mainInput.value = data;
    mainInput.focus();
  });

  document.getElementById("voiceInput").addEventListener("click", async () => {
    const btn = document.getElementById("voiceInput");

    if (btn.classList.contains("mini-btn-pressed")) {
      await ipcRenderer.invoke("call-function", "stopVoiceRecognition", []);
      btn.classList.remove("mini-btn-pressed");
      document
        .getElementById("voice-recognition-process")
        .classList.remove("active");
      return;
    }

    btn.classList.add("mini-btn-pressed");
    document
      .getElementById("voice-recognition-process")
      .classList.add("active");

    await ipcRenderer.invoke("call-function", "startVoiceRecognition", []);
  });

  document
    .getElementById("stopVoiceRecognition")
    .addEventListener("click", async () => {
      await ipcRenderer.invoke("call-function", "stopVoiceRecognition", []);
      document
        .getElementById("voiceInput")
        .classList.remove("mini-btn-pressed");
      document
        .getElementById("voice-recognition-process")
        .classList.remove("active");
      mainInput.focus();
    });

  document.getElementById("createNote").addEventListener("click", () => {
    console.log("Создание заметки:", getInputText());
  });

  document.getElementById("toCalendar").addEventListener("click", () => {
    console.log("Дело в календарь:", getInputText());
  });

  document.getElementById("correctTextInsert").addEventListener("click", () => {
    console.log("Корректировка текста:", getInputText());
  });

  document.getElementById("editTextInsert").addEventListener("click", () => {
    console.log("Редактура текста:", getInputText());
  });

  document.getElementById("searchText").addEventListener("click", async () => {
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

      mainInput.value = result.result;
      mainInput.focus();
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

      mainInput.value = result.result;
      mainInput.focus();
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

      mainInput.value = result.result;
      mainInput.focus();
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

      mainInput.value = result.result;
      mainInput.focus();
    });

  document
    .getElementById("TextIntoWindowInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const result = await ipcRenderer.invoke(
        "call-function",
        "typeIntoWindowAndClose",
        [text, windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
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

  document
    .getElementById("toCapitalizeText")
    .addEventListener("click", async () => {
      const text = getInputText();

      if (!text.trim()) return;

      const resultText = capitalizeFirstLetter(text);

      mainInput.value = resultText;
      mainInput.focus();
    });

  document
    .getElementById("toUppercaseInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toUppercase(text);

      const result = await ipcRenderer.invoke(
        "call-function",
        "typeIntoWindowAndClose",
        [resultText, windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("toUppercaseText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toUppercase(text);

      mainInput.value = resultText;
      mainInput.focus();
    });

  document
    .getElementById("toLowercaseInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toLowercase(text);

      const result = await ipcRenderer.invoke(
        "call-function",
        "typeIntoWindowAndClose",
        [resultText, windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("toLowercaseText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toLowercase(text);

      textarea.value = resultText;
      textarea.focus();
    });

  document
    .getElementById("toCamelCaseInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toCamelCase(text);

      const result = await ipcRenderer.invoke(
        "call-function",
        "typeIntoWindowAndClose",
        [resultText, windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("toCamelCaseText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toCamelCase(text);

      textarea.value = resultText;
      textarea.focus();
    });

  document
    .getElementById("toPascalCaseInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toPascalCase(text);

      const result = await ipcRenderer.invoke(
        "call-function",
        "typeIntoWindowAndClose",
        [resultText, windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("toPascalCaseText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toPascalCase(text);

      textarea.value = resultText;
      textarea.focus();
    });

  document
    .getElementById("toSnakeCaseInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toSnakeCase(text);

      const result = await ipcRenderer.invoke(
        "call-function",
        "typeIntoWindowAndClose",
        [resultText, windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("toSnakeCaseText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toSnakeCase(text);

      textarea.value = resultText;
      textarea.focus();
    });

  document
    .getElementById("toKebabCaseInsert")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toKebabCase(text);

      const result = await ipcRenderer.invoke(
        "call-function",
        "typeIntoWindowAndClose",
        [resultText, windowId]
      );

      if (!result.success) {
        console.error(result.error);
      }
    });

  document
    .getElementById("toKebabCaseText")
    .addEventListener("click", async () => {
      const text = getInputText();
      if (!text.trim()) return;

      const resultText = toKebabCase(text);

      textarea.value = resultText;
      textarea.focus();
    });
});

// Функция для выполнения кода в окне и получения результата
async function executeInWindow(functionCode) {
  try {
    if (!windowId) {
      throw new Error("Window ID is not set");
    }

    const result = await ipcRenderer.invoke("execute-in-window", {
      windowId,
      functionCode,
    });

    if (!result.success) {
      throw new Error(result.error);
    }

    return result.result;
  } catch (error) {
    console.error("Error executing function in window:", error);
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

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
  document.getElementById("createNote").addEventListener("click", () => {
    console.log("Создание заметки:", getInputText());
  });

  document.getElementById("correctText").addEventListener("click", () => {
    console.log("Корректировка текста:", getInputText());
  });

  document.getElementById("editText").addEventListener("click", () => {
    console.log("Редактура текста:", getInputText());
  });

  document.getElementById("searchText").addEventListener("click", () => {
    const searchText = getInputText();
    if (searchText.trim()) {
      const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(
        searchText
      )}`;
      openInBrowser(searchUrl);
      window.close();
    }
  });

  document.getElementById("translateEnToRu").addEventListener("click", () => {
    const text = getInputText();
    if (text.trim()) {
      translateText(text, "en", "ru");
    }
  });

  document.getElementById("translateRuToEn").addEventListener("click", () => {
    const text = getInputText();
    if (text.trim()) {
      translateText(text, "ru", "en");
    }
  });

  document.getElementById("translateRuToEs").addEventListener("click", () => {
    const text = getInputText();
    if (text.trim()) {
      translateText(text, "ru", "es");
    }
  });

  document.getElementById("translateEsToRu").addEventListener("click", () => {
    const text = getInputText();
    if (text.trim()) {
      translateText(text, "es", "ru");
    }
  });

  document.getElementById("toCapitalize").addEventListener("click", () => {
    const text = getInputText();
    const result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document.getElementById("toUppercase").addEventListener("click", () => {
    const text = getInputText();
    const result = text.toUpperCase();
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document.getElementById("toLowercase").addEventListener("click", () => {
    const text = getInputText();
    const result = text.toLowerCase();
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document.getElementById("toCamelCase").addEventListener("click", () => {
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

  document.getElementById("toPascalCase").addEventListener("click", () => {
    const text = getInputText();
    const result = text
      .split(/[\s-_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document.getElementById("toSnakeCase").addEventListener("click", () => {
    const text = getInputText();
    const result = text
      .split(/[\s-_]+/)
      .map((word) => word.toLowerCase())
      .join("_");
    textarea.value = result;
    sendTextToMain(result);
    textarea.focus();
  });

  document.getElementById("toKebabCase").addEventListener("click", () => {
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
const MODES = {
  write: "write",
  select: "select",
};

// Получаем текст из textarea
function getInputText() {
  const textarea = document.getElementById("inputText");

  return textarea.value;
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function toUppercase(text) {
  return text.toUpperCase();
}

function toLowercase(text) {
  return text.toLowerCase();
}

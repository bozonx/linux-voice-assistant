const MODES = {
  write: "write",
  select: "select",
};

// получаем текст из textarea
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

function toCamelCase(text) {
  return text
    .split(/[\s-_]+/)
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}

function toPascalCase(text) {
  return text
    .split(/[\s-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function toSnakeCase(text) {
  return text
    .split(/[\s-_]+/)
    .map((word) => word.toLowerCase())
    .join("_");
}

function toKebabCase(text) {
  return text
    .split(/[\s-_]+/)
    .map((word) => word.toLowerCase())
    .join("-");
}
const MODES = {
  write: "write",
  select: "select",
};

// Получаем текст из textarea
function getInputText() {
  const textarea = document.getElementById("inputText");

  return textarea.value;
}

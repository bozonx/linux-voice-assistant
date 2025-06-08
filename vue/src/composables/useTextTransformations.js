// Функции для работы с текстом
export function useTextTransformations() {
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const toUppercase = (text) => {
    return text.toUpperCase();
  };

  const toLowercase = (text) => {
    return text.toLowerCase();
  };

  const toCamelCase = (text) => {
    return text
      .split(/[\s-_]+/)
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("");
  };

  const toPascalCase = (text) => {
    return text
      .split(/[\s-_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  };

  const toSnakeCase = (text) => {
    return text
      .split(/[\s-_]+/)
      .map((word) => word.toLowerCase())
      .join("_");
  };

  const toKebabCase = (text) => {
    return text
      .split(/[\s-_]+/)
      .map((word) => word.toLowerCase())
      .join("-");
  };

  return {
    capitalizeFirstLetter,
    toUppercase,
    toLowercase,
    toCamelCase,
    toPascalCase,
    toSnakeCase,
    toKebabCase,
  };
}

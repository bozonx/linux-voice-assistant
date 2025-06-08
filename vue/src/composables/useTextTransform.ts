export function useTextTransform() {
  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const toUppercase = (text: string): string => {
    return text.toUpperCase();
  };

  const toLowercase = (text: string): string => {
    return text.toLowerCase();
  };

  const toCamelCase = (text: string): string => {
    return text
      .split(/[\s-_]+/)
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("");
  };

  const toPascalCase = (text: string): string => {
    return text
      .split(/[\s-_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  };

  const toSnakeCase = (text: string): string => {
    return text
      .split(/[\s-_]+/)
      .map((word) => word.toLowerCase())
      .join("_");
  };

  const toKebabCase = (text: string): string => {
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

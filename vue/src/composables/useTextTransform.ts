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

  const makeRusStress = (text: string): string => {
    // Словарь соответствия обычных гласных и гласных с ударением
    const stressMap: Record<string, string> = {
      а: "а́",
      е: "е́",
      и: "и́",
      о: "о́",
      у: "у́",
      ы: "ы́",
      э: "э́",
      ю: "ю́",
      я: "я́",
      А: "А́",
      Е: "Е́",
      И: "И́",
      О: "О́",
      У: "У́",
      Ы: "Ы́",
      Э: "Э́",
      Ю: "Ю́",
      Я: "Я́",
    };

    // Заменяем каждую гласную на соответствующую ей букву с ударением,
    // пропуская буквы, которые уже имеют ударение
    return text.replace(/[аеиоуыэюяАЕИОУЫЭЮЯ]/g, (match) => {
      // Проверяем, есть ли после текущей буквы символ ударения
      const nextChar = text.charAt(text.indexOf(match) + 1);
      if (nextChar === "́") {
        return match; // Пропускаем букву, если у неё уже есть ударение
      }
      return stressMap[match] || match;
    });
  };

  return {
    capitalizeFirstLetter,
    toUppercase,
    toLowercase,
    toCamelCase,
    toPascalCase,
    toSnakeCase,
    toKebabCase,
    makeRusStress,
  };
}

import * as prettier from "prettier/standalone";
import hljs from "highlight.js";
import beautify from "js-beautify";

export const useCodeFormatter = () => {
  const formatMd = async (text: string) => {
    return await prettier.format(text, { parser: "babel" });
  };

  const formatSomeCode = async (text: string): Promise<string> => {
    const result = hljs.highlightAuto(text);

    if (["css", "scss", "less"].includes(result.language ?? "")) {
      return beautify.css(text, { indent_size: 2 });
    } else if (["html", "xml"].includes(result.language ?? "")) {
      return beautify.html(text, { indent_size: 2 });
    } else {
      // javascript, typescript, json and other
      return beautify.js(text, { indent_size: 2 });
    }
  };

  return {
    formatMd,
    formatSomeCode,
  };
};

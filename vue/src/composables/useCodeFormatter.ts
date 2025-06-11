import * as prettier from "prettier/standalone";
// import typescriptPlugin from "@prettier/plugin-typescript";
import prettierPluginTypescript from "prettier/plugins/typescript";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";
import prettierPluginHtml from "prettier/plugins/html";
import prettierPluginXml from "@prettier/plugin-xml";
import prettierPluginPostcss from "prettier/plugins/postcss";
import hljs from "highlight.js";

export const useCodeFormatter = () => {
  const formatMd = async (text: string) => {
    return await prettier.format(text, { parser: "babel" });
  };

  const formatSomeCode = async (text: string): Promise<string> => {
    const result = hljs.highlightAuto(text);

    console.log(result.language);
    // notify({
    //   title: "Resolved language",
    //   text: `Language: ${result.language}`,
    // });

    switch (result.language) {
      case "javascript":
        return await formatJs(text);
      case "typescript":
        return await formatTs(text);
      case "css":
        return await formatCss(text);
      case "html":
        return await formatHtml(text);
      case "xml":
        return await formatXml(text);
      default:
        return text;
    }
  };

  const formatJs = async (text: string) => {
    return await prettier.format(text, {
      semi: false,
      singleQuote: true,
      trailingComma: "all",
      bracketSpacing: false,
      arrowParens: "avoid",
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      parser: "babel",
      plugins: [prettierPluginEstree, prettierPluginBabel],
    });
  };

  const formatTs = async (text: string) => {
    return await prettier.format(text, {
      parser: "typescript",
      plugins: [prettierPluginTypescript, prettierPluginEstree],
    });
  };

  const formatJson = async (text: string) => {
    return await prettier.format(text, { parser: "json" });
  };

  const formatCss = async (text: string) => {
    return await prettier.format(text, {
      parser: "css",
      plugins: [prettierPluginPostcss],
    });
  };

  const formatHtml = async (text: string) => {
    return await prettier.format(text, {
      parser: "html",
      plugins: [prettierPluginHtml],
    });
  };

  const formatXml = async (text: string) => {
    return await prettier.format(text, {
      parser: "xml",
      plugins: [prettierPluginXml],
    });
  };

  return {
    formatMd,
    formatJs,
    formatTs,
    formatJson,
    formatCss,
    formatHtml,
    formatXml,
    formatSomeCode,
  };
};

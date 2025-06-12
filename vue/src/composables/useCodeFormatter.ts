import * as prettier from "prettier/standalone";
import * as markdown from "prettier/plugins/markdown";
import hljs from "highlight.js";
import beautify from "js-beautify";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import type { Node } from "unist";

// Функция для удаления точек и запятых в конце текста
const removeEndingPunctuation = (text: string): string => {
  return text.replace(/[.,]$/, "");
};

const removePunctuationRemarkPlugin = () => {
  return (tree: Node) => {
    // Обрабатываем заголовки (heading)
    visit(tree, "heading", (node: any) => {
      if (node.children && node.children.length > 0) {
        const lastChild = node.children[node.children.length - 1];
        if (lastChild.type === "text") {
          lastChild.value = removeEndingPunctuation(lastChild.value);
        }
      }
    });

    // Обрабатываем элементы списка (listItem)
    visit(tree, "listItem", (node: any) => {
      if (node.children && node.children.length > 0) {
        const paragraph = node.children[0];
        if (paragraph.type === "paragraph" && paragraph.children) {
          const lastChild = paragraph.children[paragraph.children.length - 1];
          if (lastChild.type === "text") {
            lastChild.value = removeEndingPunctuation(lastChild.value);
          }
        }
      }
    });
  };
};

export const useCodeFormatter = () => {
  const formatMdAndStyle = async (text: string): Promise<string> => {
    const processed = await remark()
      .use(removePunctuationRemarkPlugin)
      .process(text);

    return await prettier.format(processed.toString(), {
      parser: "markdown",
      plugins: [markdown],
    });
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
    formatMdAndStyle,
    formatSomeCode,
  };
};

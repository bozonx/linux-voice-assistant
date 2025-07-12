import { PluginContext } from "../../types/PluginContext";


export default function pluginIndex(ctx: PluginContext) {
  ctx.registerActionsItems([
    {
      name: "Search in Internet",
      action: async (text: string) => {
        if (!text?.trim()) {
          ctx.toast("Текст не выбран", "error");
          return;
        }

        const baseUrl = ctx.getUserConfig().plugins?.SearchInInternet?.url;

        if (!baseUrl) {
          ctx.toast("No base URL for search in internet", "warn");
          return;
        }

        const url = baseUrl + encodeURIComponent(text);

        await ctx.callApiFunction("openInBrowserAndClose", [url]);
      },
    },
  ]);

  ctx.registerPluginConfig({
    pluginName: "SearchInInternet",
    label: "Search in Internet",
    fields: [
      {
        type: "text",
        name: "url",
        label: "Internet Search URL",
        defaultValue: "https://duckduckgo.com/?q=",
      },
    ],
  });
}
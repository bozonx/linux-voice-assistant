import { PluginContext } from "../../types/PluginContext";


export default function pluginIndex(ctx: PluginContext) {
  ctx.registerActionsItems([
    {
      name: "Search in Internet",
      action: async (text: string) => {
        await ctx.callApiFunction("openInBrowserAndClose", [text]);
      },
    },
  ]);

  ctx.registerPluginConfig({
    pluginName: "SearchInInternet",
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
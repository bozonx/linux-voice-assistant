import { PluginContext } from "../../types/PluginContext";


export default function pluginIndex(ctx: PluginContext) {
  ctx.registerActionsItems([
    {
      name: "Search in Internet",
      action: async () => {
        let value = ctx.getMainInputValue();

        if (ctx.getMainInputSelectedText()) {
          value = ctx.getMainInputSelectedText();
        }

        if (!value?.trim()) {
          ctx.toast("Текст не выбран", "warn");
          return;
        }

        await ctx.callApiFunction("openInBrowserAndClose", [value]);
      },
    },
  ]);
}

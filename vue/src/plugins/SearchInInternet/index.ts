import { PluginContext } from "../../types/PluginContext";

export default function pluginIndex(ctx: PluginContext) {
  console.log(ctx);
  // ctx.registerActionsItems([
  //   {
  //     name: "Search in Internet",
  //     action: async (text: string) => {
  //       console.log(text);
  //     },
  //   },
  // ]);
}

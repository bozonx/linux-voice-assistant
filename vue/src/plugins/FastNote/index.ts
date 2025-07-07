import { PluginContext } from "src/types/PluginContext";

export default function pluginIndex(ctx: PluginContext) {
  ctx.registerActionsItems([
    {
      name: "Быстрая заметка",
      action: async (text: string) => {
        console.log("Fast Note", text);
      },
    },
  ]);

  ctx.registerPluginConfig({
    pluginName: "FastNote",
    fields: [
      {
        type: "text",
        name: "pathToNotes",
        label: "Путь к папке с заметками",
        defaultValue: "",
      },
    ],
  });
}

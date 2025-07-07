import { defineStore } from "pinia";
import { PluginConfig } from "src/types/PluginContext";

export const usePluginsStore = defineStore("plugins", () => {
  const pluginConfig = ref<PluginConfig[]>([]);

  function registerPluginConfig(config: PluginConfig) {
    pluginConfig.value.push(config);
  }

  return {
    pluginConfig,
    registerPluginConfig,
  };
});

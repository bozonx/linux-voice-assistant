import usePluginContext from "./composables/usePluginContext";
import SearchInInternet from "./plugins/SearchInInternet";
import RussianStress from "./plugins/RussionStress";
import FastNote from "./plugins/FastNote";

export const usePlugins = () => {
  const { use } = usePluginContext();

  use(SearchInInternet);
  use(RussianStress);
  use(FastNote);
};

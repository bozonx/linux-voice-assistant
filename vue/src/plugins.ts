import usePluginContext from "./composables/usePluginContext";
import SearchInInternet from "./plugins/SearchInInternet";
import RussianStress from "./plugins/RussionStress";

export default function usePlugins() {
  const { use } = usePluginContext();

  use(SearchInInternet);
  use(RussianStress);
}

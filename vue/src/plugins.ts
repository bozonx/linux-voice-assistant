import usePluginContext from "./composables/usePluginContext";
import SearchInInternet from "./plugins/SearchInInternet";

export default function usePlugins() {
  const { use } = usePluginContext();

  use(SearchInInternet);
}

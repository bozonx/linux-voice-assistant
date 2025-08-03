import usePluginContext from './composables/usePluginContext'
import FastNote from './plugins/FastNote'
import RussianStress from './plugins/RussianStress'
import SearchInInternet from './plugins/SearchInInternet'

export const usePlugins = () => {
  const { use } = usePluginContext()

  use(SearchInInternet)
  use(RussianStress)
  use(FastNote)
}

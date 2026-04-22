import type { InputConfigItem } from 'src/types'

import { useI18n } from '../../composables/useI18n'
import { PluginContext } from '../../types/plugins'

export default function pluginIndex() {
  const { t } = useI18n()

  return {
    name: 'SearchInInternet',
    label: t('action.searchInInternet'),
    defaultConfig: {
      fields: [
        {
          type: 'text',
          name: 'url',
          label: t('plugin.internetSearchUrl'),
          defaultValue: 'https://duckduckgo.com/?q=',
        } as InputConfigItem,
      ],
    },
    init: (ctx: PluginContext) => {
      ctx.registerActionsItems([
        {
          name: t('action.searchInInternet'),
          action: async (text: string) => {
            if (!text?.trim()) {
              ctx.toast(t('toast.textNotSelected'), 'error')
              return
            }

            const baseUrl = ctx.getUserConfig().plugins?.SearchInInternet?.url

            if (!baseUrl) {
              ctx.toast(t('toast.noSearchBaseUrl'), 'warn')
              return
            }

            const url = baseUrl + encodeURIComponent(text)

            await ctx.callApiFunction('openInBrowserAndClose', [url])
          },
        },
      ])
    },
  }
}

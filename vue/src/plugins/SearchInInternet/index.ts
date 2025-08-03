import { InputConfigItem } from 'src/types'

import { PluginContext } from '../../types/plugins'

export default function pluginIndex() {
  return {
    name: 'SearchInInternet',
    label: 'Поиск в интернете',
    defaultConfig: {
      fields: [
        {
          type: 'text',
          name: 'url',
          label: 'Internet Search URL',
          defaultValue: 'https://duckduckgo.com/?q=',
        } as InputConfigItem,
      ],
    },
    init: (ctx: PluginContext) => {
      ctx.registerActionsItems([
        {
          name: 'Search in Internet',
          action: async (text: string) => {
            if (!text?.trim()) {
              ctx.toast('Текст не выбран', 'error')
              return
            }

            const baseUrl = ctx.getUserConfig().plugins?.SearchInInternet?.url

            if (!baseUrl) {
              ctx.toast('No base URL for search in internet', 'warn')
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

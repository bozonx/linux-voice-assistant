import { InputConfigItem } from 'src/types'
import { PluginContext } from 'src/types/plugins'

export default function pluginIndex() {
  return {
    name: 'FastNote',
    label: 'Быстрая заметка',
    defaultConfig: {
      fields: [
        {
          type: 'text',
          name: 'pathToNotes',
          label: 'Путь к папке с заметками',
          defaultValue: '',
        } as InputConfigItem,
      ],
    },
    init: (ctx: PluginContext) => {
      ctx.registerActionsItems([
        {
          name: 'Быстрая заметка',
          action: async (text: string) => {
            console.log('Fast Note', text)
          },
        },
      ])
    },
  }
}

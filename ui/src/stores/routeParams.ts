import { defineStore } from 'pinia'
import { ref } from 'vue'

import { appNavigation } from '../lib/navigation/navigation'
import { useEditorInputStore } from './editorInput'
import { useMenuModalsStore } from './menuModals'

export const useRouteParams = defineStore('routeParams', () => {
  const params = ref<Record<string, any>>({})
  const menuModalsStore = useMenuModalsStore()
  const editorInputStore = useEditorInputStore()

  function setParams(value: Record<string, any>) {
    params.value = value
  }

  function toEditor(text?: string) {
    if (typeof text !== 'undefined') {
      params.value = { text }
      editorInputStore.setValue(text)
    }
    menuModalsStore.closeAll()
    void appNavigation.push('/editor')
  }

  function isEditorPage() {
    return appNavigation.currentPath() === '/editor'
  }

  return {
    params,
    setParams,
    toEditor,
    isEditorPage,
  }
})

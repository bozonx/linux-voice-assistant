<template>
  <ContentPadding>
    <Editor v-if="ipcStore.params">
      <div class="mt-4 flex flex-row gap-2 text-xs">
        <RouterLink to="/write">{{ t('mode.write') }}</RouterLink>
        <RouterLink to="/voice">{{ t('mode.voice') }}</RouterLink>
        <RouterLink to="/aiTasks">{{ t('mode.aiTasks') }}</RouterLink>
        <RouterLink to="/select">{{ t('mode.select') }}</RouterLink>
      </div>
    </Editor>
  </ContentPadding>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { useEditorInputStore } from '../stores/editorInput'
import { useIpcStore } from '../stores/ipc'
import { MenuModals, useMenuModalsStore } from '../stores/menuModals'
import { useNavPanelStore } from '../stores/navPanel'

const ipcStore = useIpcStore()
const navPanelStore = useNavPanelStore()
const menuModalsStore = useMenuModalsStore()
const editorInputStore = useEditorInputStore()
const { t } = useI18n()

navPanelStore.resetNavParams({
  escBtnAction: () => {
    menuModalsStore.nextModal(MenuModals.INSERT, {
      text: editorInputStore.value,
    })
  },
  escBtnLabelKey: 'menu.insert',
})
</script>

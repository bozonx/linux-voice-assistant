<template>
  <div class="navbar bg-base-300 text-neutral-content shadow-sm panel">
    <div class="flex-1 flex flex-row gap-2 min-w-0">
      <Button
        v-if="navPanelStore.params.escBtnAction"
        sm
        neutral
        @click="navPanelStore.params.escBtnAction"
        >{{ escBtnText }}</Button
      >
    </div>
    <div
      class="flex flex-row gap-1 items-center"
      v-if="navPanelStore.params.rightPanelVisible"
    >
      <Button
        :disabled="router.currentRoute.value.path === '/editor'"
        sm
        neutral
        @click="routeParamsStore.toEditor()"
      >
        <Icon icon="mdi:pencil" height="16" />
        {{ t('nav.editor') }}
      </Button>
      <Button
        :disabled="router.currentRoute.value.path === '/chat'"
        sm
        neutral
        @click="openChat"
      >
        <Icon icon="mdi:chat-processing-outline" height="16" />
        {{ t('nav.aiChat') }}
      </Button>
      <Button
        :disabled="router.currentRoute.value.path === '/history'"
        sm
        neutral
        @click="openHistory"
      >
        <Icon icon="mdi:history" height="16" />
        {{ t('nav.history') }}
      </Button>
      <Button
        :disabled="router.currentRoute.value.path === '/config'"
        sm
        neutral
        square
        @click="openSettings"
        :title="t('nav.settings')"
      >
        <Icon icon="mdi:cog" height="24" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { useI18n } from '../composables/useI18n'
import { useMenuModalsStore } from '../stores/menuModals'
import { useNavPanelStore } from '../stores/navPanel'
import { useRouteParams } from '../stores/routeParams'
import { Icon } from '@iconify/vue'

const router = useRouter()
const routeParamsStore = useRouteParams()
const navPanelStore = useNavPanelStore()
const menuModalsStore = useMenuModalsStore()
const { t } = useI18n()

const escBtnText = computed(() => {
  const baseText = navPanelStore.params.escBtnLabelKey
    ? t(navPanelStore.params.escBtnLabelKey)
    : navPanelStore.params.escBtnText || ''

  return baseText + t('nav.escSuffix')
})

function openSettings() {
  menuModalsStore.closeAll()
  router.push('/config')
}

function openChat() {
  menuModalsStore.closeAll()
  router.push('/chat')
}

function openHistory() {
  menuModalsStore.closeAll()
  router.push('/history')
}
</script>

<style scoped>
.panel {
  min-height: 44px;
  padding: 0.375rem var(--space-lg);
}
</style>

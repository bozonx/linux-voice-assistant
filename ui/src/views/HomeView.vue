<template>
  <div class="mt-4 flex flex-row gap-2 text-xs">
    <RouterLink to="/write">{{ t('mode.write') }}</RouterLink>
    <RouterLink to="/voice">{{ t('mode.voice') }}</RouterLink>
    <RouterLink to="/aiTasks">{{ t('mode.aiTasks') }}</RouterLink>
    <RouterLink to="/select">{{ t('mode.select') }}</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

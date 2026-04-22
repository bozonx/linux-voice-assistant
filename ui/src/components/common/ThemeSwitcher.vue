<template>
  <FieldSelect
    :value="props.value"
    :options="themeOptions"
    @update:value="handleThemeChange"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import FieldSelect from './FieldSelect.vue'
import { useI18n } from '../../composables/useI18n'
import type { ThemeMode } from '../../lib/theme/theme-controller'

const props = defineProps<{
  value: ThemeMode
}>()

const emit = defineEmits<{
  (e: 'update:value', value: ThemeMode): void
}>()

const { t } = useI18n()

const themeOptions = computed(() => [
  { id: 'auto', name: t('theme.auto') },
  { id: 'light', name: t('theme.light') },
  { id: 'dark', name: t('theme.dark') },
])

function handleThemeChange(value: number | string | undefined) {
  if (value !== 'auto' && value !== 'light' && value !== 'dark') {
    return
  }

  emit('update:value', value)
}
</script>

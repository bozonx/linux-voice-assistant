<template>
  <FieldSelect
    :value="themeStore.themeMode"
    :options="themeOptions"
    @update:value="handleThemeChange"
  />
</template>

<script setup lang="ts">
import FieldSelect from './FieldSelect.vue'
import { useThemeStore } from '../../stores/theme'

const themeStore = useThemeStore()

const themeOptions = [
  { id: 'auto', name: 'Авто' },
  { id: 'light', name: 'Светлая' },
  { id: 'dark', name: 'Темная' },
] as const

function handleThemeChange(value: number | string | undefined) {
  if (value !== 'auto' && value !== 'light' && value !== 'dark') {
    return
  }

  themeStore.setThemeMode(value)
}
</script>

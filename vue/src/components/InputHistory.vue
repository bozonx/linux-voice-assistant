<template>
  <div class="main-input-history">
    <History :items="historyStore.history" />
  </div>
</template>

<script setup lang="ts">
import { useMainInputHistoryStore } from '../stores/mainInputHistory'

const historyStore = useMainInputHistoryStore()
</script>
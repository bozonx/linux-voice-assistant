<template>
  <div>
    <ProgressIndicator />

    <div>
      <MainInput ref="mainInput"/>

      <TextEditToolbar/>
    </div>

    <h2 class="section-title">Действия</h2>

    <ActionsMenu />

    <h2 class="section-title">Трансформирование и вставка</h2>

    <TransformAndInsertMenu />
  </div>
</template>

<script setup lang="ts">
</script>
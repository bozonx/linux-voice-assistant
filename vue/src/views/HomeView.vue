<template>
  <div>
    <Overlays />

    <div>
      <MainInput ref="mainInput"/>

      <TextEditToolbar/>
    </div>

    

    <h2 class="section-title">Действия</h2>

    <ActionsMenu />

    <h2 class="section-title">Трансформирование и вставка</h2>

    <TransformAndInsertMenu />

    <div class="havigation">
      <RouterLink to="/history">История</RouterLink>
      <RouterLink to="/config">Настройки</RouterLink>
      <RouterLink to="/write">Режим написания</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
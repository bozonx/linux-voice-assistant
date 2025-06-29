<template>
  <div>
    <h1>Correction</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

        // if (!text?.trim()) return;
        // if (text.length < appConfig.minCorrectionLength) {
        //   miniToastr.warn("Слишком короткий текст для коррекции");
        //   return;
        // }
        // overlayStore.showCorrection();
        // const newText = await correctText(mainInputStore.value);
        // overlayStore.showDiff(newText);
</script>
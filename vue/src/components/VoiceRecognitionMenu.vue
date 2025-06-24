<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.CORRECTING">
    <InProgressMessage :correcting="true" />
  </OverlayOneColumn>

  <div>
    <InProgressMessage :recognition="true" />
  </div>

  <div @keyup.prevent="handleShortCutKeyUp" class="shortcuts-list">
    <div>Esc - <button @click="cancel">прервать</button></div>
    <div>Ctrl + q - <button ref="inFocusButton" @click="closeWindow">закрыть программу</button></div>
  </div>
</template>

<script setup lang="ts">
import { useCallAi } from "../composables/useCallAi";
import { useCallApi } from "../composables/useCallApi";

enum OverlayMode {
  CORRECTING = "correcting",
  NONE = "none",
}

const overlayMode = ref<OverlayMode>(OverlayMode.NONE);
const { startVoiceRecognition, stopVoiceRecognition } = useCallAi();
const { closeWindow } = useCallApi();
const emit = defineEmits(["close"]);

const handleShortCutKeyUp = async (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    await stopVoiceRecognition();
    emit("close");
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    await stopVoiceRecognition();

    setTimeout(async () => {
      await closeWindow();
    }, 500);
  }
};

const cancel = async () => {
  await stopVoiceRecognition();
};

onMounted(async () => {
  await startVoiceRecognition();
});
</script>   
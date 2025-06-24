<template>
  <OverlayOneColumn v-if="overlayMode === OverlayMode.RECOGNITION">
    
  </OverlayOneColumn>
  
  <OverlayOneColumn v-if="overlayMode === OverlayMode.EDIT_PRESETS">
    <EditPresets @close="toShortcuts" :text="inputText" />
  </OverlayOneColumn>

  <div>
    <textarea ref="textareaRef" v-model="inputText" @keyup="handleVoiceModeKeyUp" class="textarea"></textarea>
  </div>

  <div>
    <InsertShortCuts :text="inputText" @back="toVoiceMode" @editPresets="toEditPresets" />
  </div>
</template>

<script setup lang="ts">
import { useCallApi } from '../composables/useCallApi';

enum OverlayMode {
  RECOGNITION = "recognition",
  EDIT_PRESETS = "edit-presets",
  NONE = "none",
}

const { closeWindow } = useCallApi();
const inputText = ref('');
const textareaRef = ref<HTMLTextAreaElement>();
const overlayMode = ref(OverlayMode.NONE);

onMounted(() => {
    if (textareaRef.value) {
      focusTextarea();
    }
})

function focusTextarea() {
  nextTick(() => {
    textareaRef.value?.focus();
  })
}

function toShortcuts() {
  overlayMode.value = OverlayMode.SHORTCUTS;
}

function toEditPresets() {
  overlayMode.value = OverlayMode.EDIT_PRESETS;
}

function toVoiceMode() {
  overlayMode.value = OverlayMode.NONE;
  focusTextarea();
}

const handleVoiceModeKeyUp = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    toShortcuts();
  }
  else if (event.code === "KeyQ" && event.ctrlKey) {
    closeWindow();
  }
}
</script>

<style scoped>
.textarea {
  width: 100%;
  height: 150px;
}
</style>
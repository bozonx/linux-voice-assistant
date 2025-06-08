import { ref } from "vue";

export function useVoiceRecognition() {
  const isVoiceRecognitionActive = ref(false);

  const startVoiceRecognition = async () => {
    isVoiceRecognitionActive.value = true;
    // TODO: Implement voice recognition start
  };

  const stopVoiceRecognition = () => {
    isVoiceRecognitionActive.value = false;
    // TODO: Implement voice recognition stop
  };

  const toggleVoiceRecognition = () => {
    if (isVoiceRecognitionActive.value) {
      stopVoiceRecognition();
    } else {
      startVoiceRecognition();
    }
  };

  return {
    isVoiceRecognitionActive,
    startVoiceRecognition,
    stopVoiceRecognition,
    toggleVoiceRecognition,
  };
}

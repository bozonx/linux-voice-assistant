import { ref } from "vue";
import { useIpcRenderer } from "./useIpcRenderer";

export function useVoiceRecognition() {
  const isRecording = ref(false);
  const error = ref(null);
  const { callFunction } = useIpcRenderer();

  const startVoiceRecognition = async () => {
    try {
      isRecording.value = true;
      error.value = null;
      await callFunction("startVoiceRecognition", []);
    } catch (err) {
      error.value = err.message;
      isRecording.value = false;
    }
  };

  const stopVoiceRecognition = async () => {
    try {
      await callFunction("stopVoiceRecognition", []);
      isRecording.value = false;
      error.value = null;
    } catch (err) {
      error.value = err.message;
    }
  };

  const onVoiceRecognitionResult = (callback) => {
    window.ipcRenderer.on("voice-recognition", (event, data) => {
      callback(data);
    });
  };

  return {
    isRecording,
    error,
    startVoiceRecognition,
    stopVoiceRecognition,
    onVoiceRecognitionResult,
  };
}

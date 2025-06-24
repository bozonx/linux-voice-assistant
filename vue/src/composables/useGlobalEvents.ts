import { IndexedEventEmitter } from "squidlet-lib";

const globalEvents = new IndexedEventEmitter();

export enum GlobalEvents {
  VOICE_RECOGNITION = "voice-recognition",
}

export const useGlobalEvents = () => {
  return {
    globalEvents,
  };
};

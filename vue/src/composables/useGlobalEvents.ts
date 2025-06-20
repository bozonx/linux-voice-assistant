import { IndexedEventEmitter } from "squidlet-lib";

const globalEvents = new IndexedEventEmitter();

export const useGlobalEvents = () => {
  return {
    globalEvents,
  };
};

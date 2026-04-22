declare module 'vue' {
  export function createApp(rootComponent: any): any
  export function ref<T>(value: T): { value: T }
  export function computed<T>(getter: () => T): { readonly value: T }
  export function nextTick(): Promise<void>
  export type WatchSource<T> = T | (() => T)
  export interface WatchOptions {
    immediate?: boolean
    deep?: boolean
  }
  export function watch<T>(
    source: WatchSource<T>,
    callback: (newValue: T, oldValue: T) => void
  ): void
  export function watch<T>(
    source: WatchSource<T>,
    callback: (newValue: T, oldValue: T) => void,
    options: WatchOptions
  ): void
  export function watchEffect(callback: () => void): void
  export function onMounted(callback: () => void): void
  export function onUnmounted(callback: () => void): void
  export function defineProps<T>(): T
  export function defineEmits<T>(): T
}

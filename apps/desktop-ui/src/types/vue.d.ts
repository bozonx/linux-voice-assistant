declare module 'vue' {
  export function createApp(rootComponent: any): any
  export function ref<T>(value: T): { value: T }
  export function computed<T>(getter: () => T): { readonly value: T }
  export function watch<T>(
    source: T,
    callback: (newValue: T, oldValue: T) => void
  ): void
  export function onMounted(callback: () => void): void
  export function defineProps<T>(): T
  export function defineEmits<T>(): T
}

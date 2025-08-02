import { defineStore } from 'pinia'
import { DebounceCallIncreasing } from 'squidlet-lib'

import { useHistoryStore } from './history'

export const useEditorInputStore = defineStore('editorInput', () => {
  const value = ref<string>('')
  const focusCount = ref<number>(0)
  const selectAllCount = ref<number>(0)
  const selectedText = ref<string>('')
  const selectionStart = ref<number>(0)
  const selectionEnd = ref<number>(0)

  const debounced = new DebounceCallIncreasing()
  const historyStore = useHistoryStore()

  // replace value
  const setValue = (newText: string): void => {
    value.value = newText

    debounced.invoke(() => {
      // TODO: может отдельное хранилище для каждого интута
      historyStore.saveMainInputTmp(newText)
    }, 600)
  }

  // replace only selected text
  const replaceSelection = (newText: string): void => {
    // Получаем текст до и после выделения
    const beforeSelection = value.value.substring(0, selectionStart.value)
    const afterSelection = value.value.substring(selectionEnd.value)
    // Формируем новый текст
    const newValue = beforeSelection + newText + afterSelection
    // Обновляем значение
    value.value = newValue
    // Обновляем позиции выделения
    const newEnd = selectionStart.value + newText.length
    setSelection(newText, selectionStart.value, newEnd)

    historyStore.saveMainInputTmp(newText)
  }

  const clear = (): void => {
    value.value = ''

    historyStore.clearMainInputTmp()
  }

  const focus = (): void => {
    focusCount.value++
  }

  const selectAll = (): void => {
    selectAllCount.value++
  }

  const setSelection = (text: string, start: number, end: number): void => {
    selectedText.value = text
    selectionStart.value = start
    selectionEnd.value = end
  }

  return {
    value,
    focusCount,
    selectAllCount,
    selectedText,
    selectionStart,
    selectionEnd,
    setValue,
    focus,
    selectAll,
    setSelection,
    replaceSelection,
    clear,
  }
})

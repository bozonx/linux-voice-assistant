<template>
  <div class="diff-container">
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    <div v-else-if="diff.length === 0" class="no-diff">
      No differences found
    </div>
    <div v-else class="diff-content">
      <span 
        v-for="(part, index) in diff" 
        :key="`diff-${index}-${part.added}-${part.removed}`"
        :class="getPartClass(part)"
      >
        {{ part.value }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { diffChars } from 'diff';

// Определяем интерфейс для части diff
interface DiffPart {
  value: string;
  added?: boolean;
  removed?: boolean;
}

const props = defineProps<{
  oldText: string;
  newText: string;
}>();

// Состояние для обработки ошибок
const error = ref<string | null>(null);

// Вычисляем diff с обработкой ошибок
const diff = computed<DiffPart[]>(() => {
  try {
    error.value = null;
    
    // Проверяем входные данные
    if (typeof props.oldText !== 'string' || typeof props.newText !== 'string') {
      throw new Error('Both oldText and newText must be strings');
    }
    
    // Вычисляем diff
    const result = diffChars(props.oldText, props.newText);
    return result;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred';
    return [];
  }
});

// Функция для определения CSS класса части diff
const getPartClass = (part: DiffPart): string => {
  if (part.added) return 'added';
  if (part.removed) return 'removed';
  return 'unchanged';
};

// Логируем результат для отладки
watch(diff, (newDiff) => {
  if (newDiff.length > 0 && !error.value) {
    console.log('Diff result:', newDiff);
  }
}, { immediate: true });
</script>

<style scoped>
.diff-container {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  background-color: #fafafa;
}

.diff-content {
  display: inline;
}

.error-message {
  color: #d32f2f;
  background-color: #ffebee;
  padding: 8px 12px;
  border-radius: 4px;
  border-left: 4px solid #d32f2f;
  font-weight: 500;
}

.no-diff {
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 20px;
}

.added {
  background-color: #c8e6c9;
  color: #2e7d32;
  padding: 2px 4px;
  border-radius: 2px;
  font-weight: 500;
}

.removed {
  background-color: #ffcdd2;
  color: #c62828;
  padding: 2px 4px;
  border-radius: 2px;
  text-decoration: line-through;
  font-weight: 500;
}

.unchanged {
  color: #333;
}

/* Улучшенные стили для лучшей читаемости */
.added::before {
  content: '+';
  margin-right: 2px;
  font-weight: bold;
}

.removed::before {
  content: '-';
  margin-right: 2px;
  font-weight: bold;
}
</style>
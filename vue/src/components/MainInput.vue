<template>
  <div class="text-edit-container">
    <textarea
      id="inputText"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      placeholder="Введите текст с которым хотите работать"
    ></textarea>

    <ul class="text-edit-toolbar">
      <li>
        <button
          class="mini-button"
          :class="{ 'mini-btn-pressed': isVoiceRecognitionActive }"
          @click="$emit('toggleVoiceRecognition')"
        >
          Голосовой ввод
        </button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('correctText')">Коррекция</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('editText')">Редактировать</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('translateText', 'en', 'ru')">EN ➡️ RU</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('translateText', 'ru', 'en')">RU ➡️ EN</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('translateText', 'ru', 'es')">RU ➡️ ES</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('translateText', 'es', 'ru')">ES ➡️ RU</button>
      </li>
    </ul>

    <ul class="text-edit-toolbar">
      <li>
        <button class="mini-button" @click="$emit('transformText', 'capitalize')">Capitalize</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'uppercase')">UPPERCASE</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'lowercase')">lowercase</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'camelCase')">camelCase</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'pascalCase')">PascalCase</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'snakeCase')">snake_case</button>
      </li>
      <li>
        <button class="mini-button" @click="$emit('transformText', 'kebabCase')">kebab-case</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  isVoiceRecognitionActive: boolean;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'toggleVoiceRecognition'): void;
  (e: 'correctText'): void;
  (e: 'editText'): void;
  (e: 'translateText', from: string, to: string): void;
  (e: 'transformText', type: string): void;
}>();
</script>

<style scoped>
.text-edit-container {
  margin-bottom: 16px;
}

#inputText {
  width: 100%;
  min-height: 100px;
  padding: 6px;
  margin-bottom: 0px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
}

#inputText:focus {
  outline: none;
  border-color: #2196F3;
}

.text-edit-toolbar {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 2px;
  list-style: none;
  padding: 0;
  margin: 0 0 2px 0;
}

.mini-button {
  background-color: #1b72b7;
  color: white;
  border: none;
  padding: 2px 6px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
}

.mini-button:hover {
  background-color: #1976D2;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.mini-btn-pressed {
  background-color: #19528b;
  color: white;
}
</style> 
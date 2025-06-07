<template>
  <div class="container">
    <div id="voice-recognition-process" :class="{ active: isVoiceRecognitionActive }">
      <div>Распознавание голоса...</div>
      <div>
        <button class="mini-button" @click="stopVoiceRecognition">Остановить</button>
      </div>
    </div>

    <div class="text-edit-container">
      <textarea
        id="inputText"
        v-model="inputText"
        placeholder="Введите текст с которым хотите работать"
      ></textarea>

      <ul class="text-edit-toolbar">
        <li>
          <button
            class="mini-button"
            :class="{ 'mini-btn-pressed': isVoiceRecognitionActive }"
            @click="toggleVoiceRecognition"
          >
            Голосовой ввод
          </button>
        </li>
        <li>
          <button class="mini-button" @click="correctText">Коррекция</button>
        </li>
        <li>
          <button class="mini-button" @click="editText">Редактировать</button>
        </li>
        <li>
          <button class="mini-button" @click="translateText('en', 'ru')">EN ➡️ RU</button>
        </li>
        <li>
          <button class="mini-button" @click="translateText('ru', 'en')">RU ➡️ EN</button>
        </li>
        <li>
          <button class="mini-button" @click="translateText('ru', 'es')">RU ➡️ ES</button>
        </li>
        <li>
          <button class="mini-button" @click="translateText('es', 'ru')">ES ➡️ RU</button>
        </li>
      </ul>

      <ul class="text-edit-toolbar">
        <li>
          <button class="mini-button" @click="transformText('capitalize')">Capitalize</button>
        </li>
        <li>
          <button class="mini-button" @click="transformText('uppercase')">UPPERCASE</button>
        </li>
        <li>
          <button class="mini-button" @click="transformText('lowercase')">lowercase</button>
        </li>
        <li>
          <button class="mini-button" @click="transformText('camelCase')">camelCase</button>
        </li>
        <li>
          <button class="mini-button" @click="transformText('pascalCase')">PascalCase</button>
        </li>
        <li>
          <button class="mini-button" @click="transformText('snakeCase')">snake_case</button>
        </li>
        <li>
          <button class="mini-button" @click="transformText('kebabCase')">kebab-case</button>
        </li>
      </ul>
    </div>

    <h2 class="section-title">Действия</h2>

    <ul class="text-insert-buttons">
      <li>
        <button class="button" @click="createNote">Создать быструю заметку</button>
      </li>
      <li>
        <button class="button" @click="addToCalendar">Дело в календарь</button>
      </li>
      <li>
        <button class="button" @click="searchText">Поиск выбранного текста в интернете</button>
      </li>
      <li>
        <button class="button" @click="insertIntoWindow">Вставить в окно</button>
      </li>
    </ul>

    <h2 class="section-title">Трансформирование и вставка</h2>

    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="correctAndInsert">Коррекция</button>
      </li>
      <li>
        <button class="button" @click="editAndInsert">Редактировать</button>
      </li>
    </ul>

    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="translateAndInsert('en', 'ru')">EN ➡️ RU</button>
      </li>
      <li>
        <button class="button" @click="translateAndInsert('ru', 'en')">RU ➡️ EN</button>
      </li>
      <li>
        <button class="button" @click="translateAndInsert('ru', 'es')">RU ➡️ ES</button>
      </li>
      <li>
        <button class="button" @click="translateAndInsert('es', 'ru')">ES ➡️ RU</button>
      </li>
    </ul>

    <ul class="big-buttons-toolbar">
      <li>
        <button class="button" @click="transformAndInsert('capitalize')">Capitalize</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('uppercase')">UPPERCASE</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('lowercase')">lowercase</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('camelCase')">camelCase</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('pascalCase')">PascalCase</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('snakeCase')">snake_case</button>
      </li>
      <li>
        <button class="button" @click="transformAndInsert('kebabCase')">kebab-case</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIpc } from './composables/useIpc';
import { useTextTransform } from './composables/useTextTransform';
import { Modes } from './types';

const { windowId, selectedText, mode, callFunction, initParams } = useIpc();
const {
  capitalizeFirstLetter,
  toUppercase,
  toLowercase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase
} = useTextTransform();

const inputText = ref('');
const isVoiceRecognitionActive = ref(false);

onMounted(() => {
  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('init-params', async (event: any, params: any) => {
    initParams(params);

    if (mode.value === Modes.SELECT && selectedText.value) {
      inputText.value = selectedText.value;
    } else if (mode.value === Modes.VOICE) {
      await startVoiceRecognition();
    }
  });

  // @ts-ignore - electron types
  window.electron.ipcRenderer.on('voice-recognition', (event: any, data: string) => {
    inputText.value = data;
  });
});

const startVoiceRecognition = async () => {
  const result = await callFunction('startVoiceRecognition', []);
  if (result.success) {
    isVoiceRecognitionActive.value = true;
  }
};

const stopVoiceRecognition = async () => {
  const result = await callFunction('stopVoiceRecognition', []);
  if (result.success) {
    isVoiceRecognitionActive.value = false;
  }
};

const toggleVoiceRecognition = async () => {
  if (isVoiceRecognitionActive.value) {
    await stopVoiceRecognition();
  } else {
    await startVoiceRecognition();
  }
};

const createNote = () => {
  console.log('Создание заметки:', inputText.value);
};

const addToCalendar = () => {
  console.log('Дело в календарь:', inputText.value);
};

const searchText = async () => {
  const result = await callFunction('openInBrowserAndClose', [
    `https://duckduckgo.com/?q=${encodeURIComponent(inputText.value)}`
  ]);
  if (!result.success) {
    console.error(result.error);
  }
};

const insertIntoWindow = async () => {
  if (!inputText.value.trim()) return;
  const result = await callFunction('typeIntoWindowAndClose', [inputText.value, windowId.value]);
  if (!result.success) {
    console.error(result.error);
  }
};

const translateText = async (from: string, to: string) => {
  if (!inputText.value.trim()) return;
  const result = await callFunction('translateText', [inputText.value, from, to]);
  if (result.success) {
    inputText.value = result.result;
  } else {
    console.error(result.error);
  }
};

const translateAndInsert = async (from: string, to: string) => {
  if (!inputText.value.trim()) return;
  const result = await callFunction('translateTextAndInsert', [
    inputText.value,
    from,
    to,
    windowId.value
  ]);
  if (!result.success) {
    console.error(result.error);
  }
};

const transformText = (type: string) => {
  if (!inputText.value.trim()) return;
  switch (type) {
    case 'capitalize':
      inputText.value = capitalizeFirstLetter(inputText.value);
      break;
    case 'uppercase':
      inputText.value = toUppercase(inputText.value);
      break;
    case 'lowercase':
      inputText.value = toLowercase(inputText.value);
      break;
    case 'camelCase':
      inputText.value = toCamelCase(inputText.value);
      break;
    case 'pascalCase':
      inputText.value = toPascalCase(inputText.value);
      break;
    case 'snakeCase':
      inputText.value = toSnakeCase(inputText.value);
      break;
    case 'kebabCase':
      inputText.value = toKebabCase(inputText.value);
      break;
  }
};

const transformAndInsert = async (type: string) => {
  if (!inputText.value.trim()) return;
  let transformedText = inputText.value;
  
  switch (type) {
    case 'capitalize':
      transformedText = capitalizeFirstLetter(inputText.value);
      break;
    case 'uppercase':
      transformedText = toUppercase(inputText.value);
      break;
    case 'lowercase':
      transformedText = toLowercase(inputText.value);
      break;
    case 'camelCase':
      transformedText = toCamelCase(inputText.value);
      break;
    case 'pascalCase':
      transformedText = toPascalCase(inputText.value);
      break;
    case 'snakeCase':
      transformedText = toSnakeCase(inputText.value);
      break;
    case 'kebabCase':
      transformedText = toKebabCase(inputText.value);
      break;
  }

  const result = await callFunction('typeIntoWindowAndClose', [transformedText, windowId.value]);
  if (!result.success) {
    console.error(result.error);
  }
};

const correctText = () => {
  console.log('Корректировка текста:', inputText.value);
};

const editText = () => {
  console.log('Редактура текста:', inputText.value);
};

const correctAndInsert = () => {
  console.log('Корректировка текста:', inputText.value);
};

const editAndInsert = () => {
  console.log('Редактура текста:', inputText.value);
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

li {
  margin: 0;
}

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

.text-insert-buttons {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4px;
}

.big-buttons-toolbar {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4px;
}

.button {
  width: 100%;
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  text-align: left;
}

.button:hover {
  background-color: #1976D2;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

.section-title {
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 14px;
}

#voice-recognition-process {
  display: none;
}

#voice-recognition-process.active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style> 
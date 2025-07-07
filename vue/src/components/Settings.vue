<template>
  <div>
    <div class="flex flex-row gap-1 mb-4">
      <Button @click="currentTab = 0" :active="currentTab === 0">Основные</Button>
      <Button @click="currentTab = 1" :active="currentTab === 1">Модели</Button>
      <Button @click="currentTab = 2" :active="currentTab === 2">AI rules</Button>
      <Button @click="currentTab = 3" :active="currentTab === 3">Ваши задачи для AI</Button>
      <Button @click="currentTab = 4" :active="currentTab === 4">Плагины</Button>
    </div>

    <div v-show="currentTab === 0"> 
      <FieldRow label="Xdotool Bin">
        <FieldInput v-model:value="userSettings.xdotoolBin" />
      </FieldRow>
      <FieldRow label="App Language">
        <FieldInput v-model:value="userSettings.appLanguage" />
      </FieldRow>
      <FieldRow label="User Language">
        <FieldInput v-model:value="userSettings.userLanguage" />
      </FieldRow>
      <FieldRow label="To Translate Languages">
        <FieldItems
          :items="translateLanguagesItems"
          @update:items="updateTranslateLanguages"
        >
          <template #item="{ item, index }">
            <div class="flex flex-row gap-2 w-full">
              <KeyButton :index="index" />
              <FieldInput class="flex-1" v-model:value="item.value" />
            </div>
          </template>
        </FieldItems>
      </FieldRow>
    </div>

    <div v-show="currentTab === 1"> 
      <FieldRow label="LLM Models">
        <FieldItems :items="llmModels" @update:items="updateLLMModels">
          <template #item="{ item }">
            <FieldRow label="Id" vertical>
              <FieldInput v-model:value="item.id" />
            </FieldRow>
            <FieldRow label="Model" vertical>
              <FieldInput v-model:value="item.model" />
            </FieldRow>
            <FieldRow label="Description" vertical>
              <FieldInput v-model:value="item.description" />
            </FieldRow>
            <FieldRow label="Base URL" vertical>
              <FieldInput v-model:value="item.baseUrl" />
            </FieldRow>
            <FieldRow label="API Key" vertical>
              <FieldInput v-model:value="item.apiKey" />
            </FieldRow>
            <FieldRow label="Tags" vertical>
              <FieldInput v-model:value="item.tags" />
            </FieldRow>
          </template>
        </FieldItems>
      </FieldRow>

      <FieldRow label="STT Models">
        <FieldItems :items="sttModels" @update:items="updateSTTModels">
          <template #item="{ item }">
            <FieldRow label="Id" vertical>
              <FieldInput v-model:value="item.id" />
            </FieldRow>
            <FieldRow label="Model" vertical>
              <FieldInput v-model:value="item.model" />
            </FieldRow>
            <FieldRow label="Description" vertical>
              <FieldInput v-model:value="item.description" />
            </FieldRow>
            <FieldRow label="Base URL" vertical>
              <FieldInput v-model:value="item.baseUrl" />
            </FieldRow>
            <FieldRow label="API Key" vertical>
              <FieldInput v-model:value="item.apiKey" />
            </FieldRow>
          </template>
        </FieldItems>
      </FieldRow>

      <FieldRow label="TTS Models">
        <FieldItems :items="ttsModels" @update:items="updateTTSModels">
          <template #item="{ item }">
            <FieldRow label="Id" vertical>
              <FieldInput v-model:value="item.id" />
            </FieldRow>
            <FieldRow label="Model" vertical>
              <FieldInput v-model:value="item.model" />
            </FieldRow>
            <FieldRow label="Description" vertical>
              <FieldInput v-model:value="item.description" />
            </FieldRow>
            <FieldRow label="Base URL" vertical>
              <FieldInput v-model:value="item.baseUrl" />
            </FieldRow>
            <FieldRow label="API Key" vertical>
              <FieldInput v-model:value="item.apiKey" />
            </FieldRow> 
          </template>
        </FieldItems>
      </FieldRow>

      <h2>AI Model Usage</h2>
      <FieldRow label="Speech to Text">
        <Dropdown v-model:value="userSettings.aiModelUsage.stt" :options="sttModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Text to Speech">
        <Dropdown v-model:value="userSettings.aiModelUsage.tts" :options="ttsModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Translate">
        <Dropdown v-model:value="userSettings.aiModelUsage.translate" :options="llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Voice Correction">
        <Dropdown v-model:value="userSettings.aiModelUsage.voiceCorrection" :options="llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Correction">
        <Dropdown v-model:value="userSettings.aiModelUsage.correction" :options="llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="AI Tasks">
        <Dropdown v-model:value="userSettings.aiModelUsage.aiTasks" :options="llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Ask AI">
        <Dropdown v-model:value="userSettings.aiModelUsage.askAI" :options="llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
    </div>

    <div v-show="currentTab === 2"> 
      <h2>AI rules</h2>
      <FieldRow label="Общие правила для всех задач">
        <FieldTextArea v-model:value="userSettings.aiRules.base" />
      </FieldRow>
      <FieldRow label="Быстрый перевод">
        <FieldTextArea v-model:value="userSettings.aiRules.translate" />
      </FieldRow>
      <FieldRow label="Исправление пунктуации и коррекция после распознавания голоса">
        <FieldTextArea v-model:value="userSettings.aiRules.voiceCorrection" />
      </FieldRow>
      <FieldRow label="Коррекция текста">
        <FieldTextArea v-model:value="userSettings.aiRules.correction" />
      </FieldRow>
      <FieldRow label="Быстрый запрос к AI">
        <FieldTextArea v-model:value="userSettings.aiRules.askAiShort" />
      </FieldRow>
      <FieldRow label="Запрос к AI по тексту">
        <FieldTextArea v-model:value="userSettings.aiRules.askAiForText" />
      </FieldRow>
    </div>

    <div v-show="currentTab === 3">
      <FieldRow label="AI Tasks">
        <FieldItems :items="aiTasksItems" @update:items="updateAiTasks">
          <template #item="{ item, index }">
            <div class="flex flex-row gap-2 w-full">
              <div>
                <KeyButton :index="index" />
              </div>
              <div class="flex-1">
                <FieldRow label="Name" vertical>
                  <FieldInput v-model:value="item.name" />
                </FieldRow>
                <FieldRow label="Description" vertical>
                  <FieldTextArea v-model:value="item.description" />
                </FieldRow>
                <FieldRow label="Context" vertical>
                  <FieldTextArea v-model:value="item.context" />
                </FieldRow>
              </div>
            </div>
          </template>
        </FieldItems>
      </FieldRow>
    </div>

    <div v-show="currentTab === 4">
      <!-- <FieldRow label="Internet Search URL">
        <FieldInput v-model:value="userSettings.internetSearchUrl" />
      </FieldRow> -->
      <template v-for="pluginCfg in pluginsStore.pluginConfig">
        <h2>{{ pluginCfg.pluginName }}</h2>
        <FieldsByCfg :config="pluginCfg.fields" />
      </template>

      <FieldRow label="Добавление в календарь">
        <FieldTextArea v-model:value="userSettings.aiRules.toCalendar" />
      </FieldRow>
      <FieldRow label="Помощник">
        <FieldTextArea v-model:value="userSettings.aiRules.assistant" />
      </FieldRow>

      <FieldRow label="Intention Recognition">
        <Dropdown v-model:value="userSettings.aiModelUsage.intentionRecognition" :options="llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
    </div>

    <div class="flex flex-row gap-2 mt-4">
      <Button @click="saveSettings">Save</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useIpcStore } from "../stores/ipc";
  import { usePluginsStore } from "../stores/plugins";

  const ipcStore = useIpcStore();
  const pluginsStore = usePluginsStore();
  const userSettings = ref(ipcStore.params!.userConfig);
  const currentTab = ref(0);
  const llmModels = computed(() => {
    return userSettings.value.llmModels;
  });
  const sttModels = computed(() => {
    return userSettings.value.sttModels;
  });
  const ttsModels = computed(() => {
    return userSettings.value.ttsModels;
  });
  const aiTasksItems = computed(() => {
    return userSettings.value.aiTasks.map((item) => ({
      name: item.name,
      description: item.description,
      context: item.context,
    }));
  });

  const saveSettings = () => {
    ipcStore.saveUserConfig(userSettings.value);
  };

  const translateLanguagesItems = computed(() => {
    return (userSettings.value.toTranslateLanguages || []).map((lang) => ({ value: lang }));
  });

  const updateTranslateLanguages = (items: Record<string, any>[]) => {
    userSettings.value.toTranslateLanguages = items.map((item: Record<string, any>) => item.value);
  };

  const updateLLMModels = (items: any[]) => {
    userSettings.value.llmModels = items;
  };

  const updateSTTModels = (items: any[]) => {
    userSettings.value.sttModels = items;
  };

  const updateTTSModels = (items: any[]) => {
    userSettings.value.ttsModels = items;
  };

  const updateAiTasks = (items: Record<string, any>[]) => {
    userSettings.value.aiTasks = items.map((item) => ({
      name: item.name,
      description: item.description,
      context: item.context,
    }));
  };
</script>
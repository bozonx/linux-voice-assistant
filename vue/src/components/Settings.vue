<template>
  <div>
    <div class="flex flex-row gap-1 mb-4">
      <Button @click="currentTab = 0">Основные</Button>
      <Button @click="currentTab = 1">Модели</Button>
      <Button @click="currentTab = 2">AI rules</Button>
      <Button @click="currentTab = 3">Deep edit</Button>
      <Button @click="currentTab = 4">Plugins</Button>
    </div>

    <div v-if="currentTab === 0"> 
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

    <div v-if="currentTab === 1"> 
      <h2>Models</h2>

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
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.stt"
          :options="llmModels.map((model) => model.model)"
          label="Speech to Text"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.tts"
          :options="llmModels.map((model) => model.model)"
          label="Text to Speech"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.translate"
          :options="llmModels.map((model) => model.model)"
          label="Translate"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.voiceCorrection"
          :options="llmModels.map((model) => model.model)"
          label="Voice Correction"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.intentionRecognition"
          :options="llmModels.map((model) => model.model)"
          label="Intention Recognition"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.correction"
          :options="llmModels.map((model) => model.model)"
          label="Correction"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.aiTasks"
          :options="llmModels.map((model) => model.model)"
          label="AI Tasks"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.askAI"
          :options="llmModels.map((model) => model.model)"
          label="Ask AI"
        />
    </div>

    <div v-if="currentTab === 2"> 
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
    </div>

    <div v-if="currentTab === 3"> 
      <ItemsFieldRow :items="aiTasksItems" label="AI Tasks" @update:items="updateAiTasks">
          <template #item="{ item }">
            <FormRow label="Description">
              <FormInput v-model:value="item.description" label="Description" />
            </FormRow>
            <FormRow label="Context">
              <FormTextArea v-model:value="item.context" />
            </FormRow>
          </template>
        </ItemsFieldRow>
    </div>

    <div v-if="currentTab === 4"> 
      <h2>Plugins</h2>
      <FieldRow label="Internet Search URL">
        <FieldInput v-model:value="userSettings.internetSearchUrl" />
      </FieldRow>


      <FieldRow label="Добавление в календарь">
        <FieldTextArea v-model:value="userSettings.aiRules.toCalendar" />
      </FieldRow>
      <FieldRow label="Помощник">
        <FieldTextArea v-model:value="userSettings.aiRules.assistant" />
      </FieldRow>
      <FieldRow label="Быстрый запрос к AI">
        <FieldTextArea v-model:value="userSettings.aiRules.askAiShort" />
      </FieldRow>
      <FieldRow label="Запрос к AI по тексту">
        <FieldTextArea v-model:value="userSettings.aiRules.askAiForText" />
      </FieldRow>
    </div>

    <div class="buttons">
      <button @click="back">Back</button>
      <button @click="saveSettings">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useIpcStore } from "../stores/ipc";
  import { useRouter } from "vue-router";
  import { PRESETS_KEYS } from "../types";

  const ipcStore = useIpcStore();
  const router = useRouter();

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
      description: item.description,
      context: item.context,
    }));
  });

  const back = () => {
    router.push("/");
  };

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
      description: item.description,
      context: item.context,
    }));
  };
</script>
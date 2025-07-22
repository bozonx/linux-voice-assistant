<template>
  <div>
    <Tabs
      :tabs="tabs" 
      v-model="currentTab"
      class="mb-4"
    />

    <div v-show="currentTab === 0">
      <FieldRow label="Theme">
        <ThemeSwitcher />
      </FieldRow>
      <FieldRow label="Xdotool Bin">
        <FieldInput v-model:value="userConfig.xdotoolBin" />
      </FieldRow>
      <FieldRow label="App Language">
        <FieldInput v-model:value="userConfig.appLanguage" />
      </FieldRow>
      <FieldRow label="User Language">
        <FieldInput v-model:value="userConfig.userLanguage" />
      </FieldRow>
      <FieldRow label="To Translate Languages">
        <FieldItems
          :items="translateLanguagesItems"
          @update:items="updateTranslateLanguages"
        >
          <template #item="{ item, index }">
            <div class="flex flex-row gap-2 w-full">
              <KeyButton>{{ PRESETS_KEYS[index] }}</KeyButton>
              <FieldInput class="flex-1" v-model:value="item.value" />
            </div>
          </template>
        </FieldItems>
      </FieldRow>
    </div>

    <div v-show="currentTab === 1"> 
      <FieldRow label="LLM Models">
        <FieldItems :items="userConfig.llmModels" @update:items="updateLLMModels">
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
        <FieldItems :items="userConfig.sttModels" @update:items="updateSTTModels">
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
        <FieldItems :items="userConfig.ttsModels" @update:items="updateTTSModels">
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
        <Dropdown v-model:value="userConfig.aiModelUsage.stt" :options="userConfig.sttModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Text to Speech">
        <Dropdown v-model:value="userConfig.aiModelUsage.tts" :options="userConfig.ttsModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Translate">
        <Dropdown v-model:value="userConfig.aiModelUsage.translate" :options="userConfig.llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Voice Correction">
        <Dropdown v-model:value="userConfig.aiModelUsage.voiceCorrection" :options="userConfig.llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Correction">
        <Dropdown v-model:value="userConfig.aiModelUsage.correction" :options="userConfig.llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="AI Tasks">
        <Dropdown v-model:value="userConfig.aiModelUsage.aiTasks" :options="userConfig.llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
      <FieldRow label="Chat">
        <Dropdown v-model:value="userConfig.aiModelUsage.chat" :options="userConfig.llmModels.map((model) => ({ id: model.id, name: model.id }))" />
      </FieldRow>
    </div>

    <div v-show="currentTab === 2"> 
      <h2>AI rules</h2>
      <FieldRow label="Общие правила для всех задач">
        <FieldTextArea v-model:value="userConfig.aiRules.base" />
      </FieldRow>
      <FieldRow label="Быстрый перевод">
        <FieldTextArea v-model:value="userConfig.aiRules.translate" />
      </FieldRow>
      <FieldRow label="Исправление пунктуации и коррекция после распознавания голоса">
        <FieldTextArea v-model:value="userConfig.aiRules.voiceCorrection" />
      </FieldRow>
      <FieldRow label="Коррекция текста">
        <FieldTextArea v-model:value="userConfig.aiRules.correction" />
      </FieldRow>
    </div>

    <div v-show="currentTab === 3">
      <FieldRow label="AI Tasks">
        <FieldItems :items="userConfig.aiTasks" @update:items="updateAiTasks">
          <template #item="{ item, index }">
            <div class="flex flex-row gap-2 w-full">
              <div>
                <KeyButton>{{ PRESETS_KEYS[index] }}</KeyButton>
              </div>
              <div class="flex-1">
                <FieldRow label="Name" vertical>
                  <FieldInput v-model:value="item.name" />
                </FieldRow>
                <FieldRow label="Rule" vertical>
                  <FieldTextArea v-model:value="item.rule" />
                </FieldRow>
              </div>
            </div>
          </template>
        </FieldItems>
      </FieldRow>
    </div>

    <div v-show="currentTab === 4">
      <FieldRow label="Роли чата">
        <FieldItems :items="userConfig.chatRoles" @update:items="updateChatRoles">
          <template #item="{ item, index }">
            <div class="flex flex-row gap-2 w-full">
              <div>
                <KeyButton>{{ PRESETS_KEYS[index] }}</KeyButton>
              </div>
              <div class="flex-1">
                <FieldRow label="Name" vertical>
                  <FieldInput v-model:value="item.name" />
                </FieldRow>
                <FieldRow label="Rule" vertical>
                  <FieldTextArea v-model:value="item.rule" />
                </FieldRow>
              </div>
            </div>
          </template>
        </FieldItems>
      </FieldRow>
    </div>

    <div v-show="currentTab === 5">
      <template v-for="plugin of plugins" :key="plugin.pluginName">
        <h2>{{ plugin.label }}</h2>
        <FieldsByCfg :config="plugin.fields" @update:values="updatePluginConfig(plugin.pluginName, $event)" />
      </template>
    </div>

    <div class="flex flex-row gap-2 mt-4">
      <Button @click="saveSettings">Save</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useIpcStore } from "../stores/ipc";
  import { usePluginsStore } from "../stores/plugins";
  import useToast from "../composables/useToast";
  import { PRESETS_KEYS } from "../types";
  
  const ipcStore = useIpcStore();
  const pluginsStore = usePluginsStore();
  const {toast} = useToast();
  
  const userConfig = ref(ipcStore.params!.userConfig);
  const currentTab = ref(0);
  const tabs = [
    { text: "Основные", key: 0 },
    { text: "Модели", key: 1 },
    { text: "AI rules", key: 2 },
    { text: "Задания для AI", key: 3 },
    { text: "Роли чата", key: 4 },
  ]

  onMounted(() => {
    userConfig.value = ipcStore.params!.userConfig;
    // fill default values for plugins which are not in userConfig.plugins
    for (const pluginCfg of pluginsStore.pluginConfig) {
      if (!userConfig.value.plugins[pluginCfg.pluginName]) {
        userConfig.value.plugins[pluginCfg.pluginName] = {};

        for (const field of pluginCfg.fields) {
          userConfig.value.plugins[pluginCfg.pluginName][field.name] = field.defaultValue;
        }
      }
    }
  });

  const plugins = computed(() => {
    return Object.keys(userConfig.value.plugins || {}).map((pluginName) => {
      const pluginCfg = pluginsStore.pluginConfig.find((plugin) => plugin.pluginName === pluginName);
      
      if (!pluginCfg) {
        return null;
      }

      return {
        ...pluginCfg,
        fields: pluginCfg.fields.map((field) => ({
          ...field,
          value: userConfig.value.plugins[pluginName][field.name],
        })),
      }
    }).filter((plugin) => plugin !== null);
  });

  const saveSettings = () => {
    ipcStore.saveUserConfig(userConfig.value);
    toast("Settings saved", "success");
  };

  const translateLanguagesItems = computed(() => {
    return (userConfig.value.toTranslateLanguages || []).map((lang) => ({ value: lang }));
  });

  const updateTranslateLanguages = (items: Record<string, any>[]) => {
    userConfig.value.toTranslateLanguages = items.map((item: Record<string, any>) => item.value);
  };

  const updateLLMModels = (items: any[]) => {
    userConfig.value.llmModels = items;
  };

  const updateSTTModels = (items: any[]) => {
    userConfig.value.sttModels = items;
  };

  const updateTTSModels = (items: any[]) => {
    userConfig.value.ttsModels = items;
  };

  const updateAiTasks = (items: any[]) => {
    userConfig.value.aiTasks = items
  };

  const updateChatRoles = (items: any[]) => {
    userConfig.value.chatRoles = items;
  };

  const updatePluginConfig = (pluginName: string, values: Record<string, any>) => {
    userConfig.value.plugins[pluginName] = values;
  };
</script>
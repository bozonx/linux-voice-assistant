<template>
  <div>
    <h1>Settings</h1>
    <div class="flex flex-row gap-2 mb-4">
      <Button @click="currentTab = 0">Основные</Button>
      <Button @click="currentTab = 1">Модели</Button>
      <Button @click="currentTab = 2">AI Model Usage</Button>
      <Button @click="currentTab = 3">AI rules</Button>
      <Button @click="currentTab = 4">Deep edit</Button>
    </div>

    <div v-if="currentTab === 0"> 
      <FormRow label="Xdotool Bin">
        <FormInput v-model:value="userSettings.xdotoolBin" />
      </FormRow>
      <FormRow label="App Language">
        <FormInput v-model:value="userSettings.appLanguage" />
      </FormRow>
      <FormRow label="User Language">
        <FormInput v-model:value="userSettings.userLanguage" />
      </FormRow>
      <!-- <CheckboxRow v-model:value="userSettings.useDiffWithCorrection" label="Use Diff With Correction" /> -->
      <ItemsFieldRow
        :items="translateLanguagesItems"
        label="To Translate Languages"
        @update:items="updateTranslateLanguages"
      >
        <template #item="{ item }">
          <FormInput v-model:value="item.value" />
        </template>
      </ItemsFieldRow>
      <FormRow label="Internet Search URL">
        <FormInput v-model:value="userSettings.internetSearchUrl" />
      </FormRow>
    </div>

    <div v-if="currentTab === 1"> 
      <h2>Models</h2>
      <FormRow label="OpenRouter Default API Key">
        <FormInput v-model:value="userSettings.openrouterDefaultApiKey" />
      </FormRow>
      <FormRow label="OpenRouter Default Base URL">
        <FormInput v-model:value="userSettings.openrouterDefaultBaseUrl" />
      </FormRow>
      <ItemsFieldRow :items="models" label="Models" @update:items="updateModels">
      <template #item="{ item }">
        <FormInput v-model:value="item.id" label="Id" />
        <FormInput v-model:value="item.model" label="Model" />
        <FormInput v-model:value="item.description" label="Description" />
        <FormInput v-model:value="item.baseUrl" label="Base URL" />
        <FormInput v-model:value="item.apiKey" label="API Key" />
        <FormInput v-model:value="item.tags" label="Tags" />
      </template>
    </ItemsFieldRow>
    </div>

    <div v-if="currentTab === 2"> 

      <h2>AI Model Usage</h2>
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.voiceRecognition"
          :options="models.map((model) => model.model)"
          label="Voice Recognition"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.translate"
          :options="models.map((model) => model.model)"
          label="Translate"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.voiceCorrection"
          :options="models.map((model) => model.model)"
          label="Voice Correction"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.intentionRecognition"
          :options="models.map((model) => model.model)"
          label="Intention Recognition"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.correction"
          :options="models.map((model) => model.model)"
          label="Correction"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.deepEdit"
          :options="models.map((model) => model.model)"
          label="Deep Edit"
        />
        <DropdownRow
          v-model:value="userSettings.aiModelUsage.askAI"
          :options="models.map((model) => model.model)"
          label="Ask AI"
        />

    </div>

    <div v-if="currentTab === 3"> 
      <h2>AI rules</h2>
        <FormRow label="Base">
          <FormTextArea v-model:value="userSettings.aiRules.base" />
        </FormRow>
        <FormRow label="Translate">
          <FormTextArea v-model:value="userSettings.aiRules.translate" />
        </FormRow>
        <FormRow label="Voice Correction">
          <FormTextArea v-model:value="userSettings.aiRules.voiceCorrection" />
        </FormRow>
        <FormRow label="To Calendar">
          <FormTextArea v-model:value="userSettings.aiRules.toCalendar" />
        </FormRow>
        <FormRow label="Assistant">
          <FormTextArea v-model:value="userSettings.aiRules.assistant" />
        </FormRow>
        <FormRow label="Correction">
          <FormTextArea v-model:value="userSettings.aiRules.correction" />
        </FormRow>
        <FormRow label="Ask AI Short">
          <FormTextArea v-model:value="userSettings.aiRules.askAiShort" />
        </FormRow>
        <FormRow label="Ask AI For Text">
          <FormTextArea v-model:value="userSettings.aiRules.askAiForText" />
        </FormRow>
    </div>

    <div v-if="currentTab === 4"> 
      <ItemsFieldRow :items="deepEditItems" label="Deep edit" @update:items="updateDeepEdit">
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

    <div class="buttons">
      <button @click="back">Back</button>
      <button @click="saveSettings">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useIpcStore } from "../stores/ipc";
  import { useRouter } from "vue-router";

  const ipcStore = useIpcStore();
  const router = useRouter();

  const userSettings = ref(ipcStore.params!.userConfig);

  const currentTab = ref(0);

  const models = computed(() => {
    return userSettings.value.models;
  });

  const deepEditItems = computed(() => {
    return userSettings.value.aiRules.deepEdit.map((item) => ({
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

  const updateModels = (items: any[]) => {
    userSettings.value.models = items;
  };

  const updateDeepEdit = (items: Record<string, any>[]) => {
    userSettings.value.aiRules.deepEdit = items.map((item) => ({
      description: item.description,
      context: item.context,
    }));
  };
</script>
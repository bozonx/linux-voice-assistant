<template>
  <div>
    <InputRow
      v-model:value="userSettings.openrouterDefaultApiKey"
      label="OpenRouter Default API Key"
    />
    <InputRow
      v-model:value="userSettings.openrouterDefaultBaseUrl"
      label="OpenRouter Default Base URL"
    />
    <InputRow v-model:value="userSettings.xdotoolBin" label="Xdotool Bin" />
    <InputRow v-model:value="userSettings.appLanguage" label="App Language" />
    <InputRow v-model:value="userSettings.userLanguage" label="User Language" />
    <ItemsField
      :items="translateLanguagesItems"
      label="To Translate Languages"
      @update:items="updateTranslateLanguages"
    >
      <template #item="{ item }">
        <InputRow v-model:value="item.value" />
      </template>
    </ItemsField>
    <InputRow
      v-model:value="userSettings.internetSearchUrl"
      label="Internet Search URL"
    />

    <h2>Models</h2>
    <ItemsField :items="models" label="Models" @update:items="updateModels">
      <template #item="{ item }">
        <InputRow v-model:value="item.id" label="Id" />
        <InputRow v-model:value="item.model" label="Model" />
        <InputRow v-model:value="item.description" label="Description" />
        <InputRow v-model:value="item.baseUrl" label="Base URL" />
        <InputRow v-model:value="item.apiKey" label="API Key" />
        <InputRow v-model:value="item.tags" label="Tags" />
      </template>
    </ItemsField>

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
      v-model:value="userSettings.aiModelUsage.completion"
      :options="models.map((model) => model.model)"
      label="Completion"
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

    <h2>AI rules</h2>
    <TextArea
      v-model:value="userSettings.aiRules.base"
      label="Base"
    />
    <TextArea
      v-model:value="userSettings.aiRules.translate"
      label="Translate"
    />
    <TextArea v-model:value="userSettings.aiRules.completion" label="Completion" />
    <TextArea v-model:value="userSettings.aiRules.toCalendar" label="To Calendar" />
    <TextArea
      v-model:value="userSettings.aiRules.assistant"
      label="Assistant"
    />
    <TextArea
      v-model:value="userSettings.aiRules.correction"
      label="Correction"
    />
    <TextArea
      v-model:value="userSettings.aiRules.askAiShort"
      label="Ask AI Short"
    />
    <TextArea v-model:value="userSettings.aiRules.askAiForText" label="Ask AI For Text" />
    
    <ItemsField :items="deepEditItems" label="Deep edit" @update:items="updateDeepEdit">
      <template #item="{ item }">
        <InputRow v-model:value="item.description" label="Description" />
        <TextArea v-model:value="item.context" label="Context" />
      </template>
    </ItemsField>

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

  const userSettings = ref(ipcStore.data!.userConfig);

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

<style scoped></style>
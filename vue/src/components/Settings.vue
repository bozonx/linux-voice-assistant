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
      <template #item="{ item, index }">
        <InputRow v-model:value="item.value" label="Language" />
      </template>
    </ItemsField>
    <InputRow
      v-model:value="userSettings.internetSearchUrl"
      label="Internet Search URL"
    />
    <!-- <InputRow v-model:value="userSettings.models" /> -->

    <h2>AI Model Usage</h2>
    <DropdownRow
      v-model:value="userSettings.aiModelUsage.voiceRecognition"
      :options="models"
      label="Voice Recognition"
    />
    <DropdownRow
      v-model:value="userSettings.aiModelUsage.translate"
      :options="models"
      label="Translate"
    />
    <DropdownRow
      v-model:value="userSettings.aiModelUsage.completion"
      :options="models"
      label="Completion"
    />
    <DropdownRow
      v-model:value="userSettings.aiModelUsage.intentionRecognition"
      :options="models"
      label="Intention Recognition"
    />
    <DropdownRow
      v-model:value="userSettings.aiModelUsage.correction"
      :options="models"
      label="Correction"
    />
    <DropdownRow
      v-model:value="userSettings.aiModelUsage.deepEdit"
      :options="models"
      label="Deep Edit"
    />
    <DropdownRow
      v-model:value="userSettings.aiModelUsage.askAI"
      :options="models"
      label="Ask AI"
    />

    <h2>AI Tasks</h2>
    <TextArea
      v-model:value="userSettings.aiTasks.translate"
      label="Translate"
    />
    <TextArea v-model:value="userSettings.aiTasks.completion" label="Completion" />
    <TextArea v-model:value="userSettings.aiTasks.toCalendar" label="To Calendar" />
    <TextArea
      v-model:value="userSettings.aiTasks.assistant"
      label="Assistant"
    />
    <TextArea
      v-model:value="userSettings.aiTasks.correction"
      label="Correction"
    />
    <TextArea
      v-model:value="userSettings.aiTasks.askAiShort"
      label="Ask AI Short"
    />
    <TextArea v-model:value="userSettings.aiTasks.askAiForText" label="Ask AI For Text" />
    <!-- <InputRow v-model:value="userSettings.aiTasks.deepEdit" /> -->

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
    return Object.keys(userSettings.value.models);
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
</script>

<style scoped></style>
<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <Tabs :tabs="tabs" v-model:value="currentTab" />

    <div class="flex-1 overflow-y-auto">
      <div v-show="currentTab === 0" class="fields-col">
        <FieldRow :label="t('settings.theme')">
          <ThemeSwitcher v-model:value="userConfig.theme" />
        </FieldRow>
        <FieldRow :label="t('settings.appLanguage')">
          <FieldSelect
            v-model:value="userConfig.appLanguage"
            :options="appLanguageOptions"
          />
        </FieldRow>
        <FieldRow :label="t('settings.userLanguage')">
          <FieldSelect
            v-model:value="userConfig.userLanguage"
            :options="userLanguageOptions"
          />
        </FieldRow>
        <FieldRow :label="t('settings.xdotoolBin')">
          <FieldInput v-model:value="userConfig.xdotoolBin" />
        </FieldRow>

        <FieldRow :label="t('settings.editorHistoryMaxItems')">
          <FieldInput
            type="number"
            v-model:value="userConfig.editorHistoryMaxItems"
          />
        </FieldRow>
        <FieldRow :label="t('settings.transformHistoryMaxItems')">
          <FieldInput
            type="number"
            v-model:value="userConfig.transformHistoryMaxItems"
          />
        </FieldRow>
        <FieldRow :label="t('settings.chatHistoryMaxItems')">
          <FieldInput
            type="number"
            v-model:value="userConfig.chatHistoryMaxItems"
          />
        </FieldRow>
      </div>

      <div v-show="currentTab === 1" class="fields-col">
        <FieldRow :label="t('settings.translateLanguages')">
          <FieldItems
            :items="translateLanguagesItems"
            @update:items="updateTranslateLanguages"
          >
            <template #item="{ item, index }">
              <div class="flex flex-row gap-2 w-full">
                <KeyButton>{{ PRESETS_KEYS[index] }}</KeyButton>
                <FieldSelect
                  class="flex-1"
                  v-model:value="item.value"
                  :options="translateLanguageOptions"
                />
              </div>
            </template>
          </FieldItems>
        </FieldRow>
      </div>

      <div v-show="currentTab === 2">
        <FieldRow :label="t('settings.llmModels')">
          <FieldItems
            :items="userConfig.llmModels"
            @update:items="updateLLMModels"
          >
            <template #item="{ item }">
              <FieldRow :label="t('settings.id')" vertical>
                <FieldInput v-model:value="item.id" />
              </FieldRow>
              <FieldRow :label="t('settings.model')" vertical>
                <FieldInput v-model:value="item.model" />
              </FieldRow>
              <FieldRow :label="t('settings.description')" vertical>
                <FieldInput v-model:value="item.description" />
              </FieldRow>
              <FieldRow :label="t('settings.baseUrl')" vertical>
                <FieldInput v-model:value="item.baseUrl" />
              </FieldRow>
              <FieldRow :label="t('settings.apiKey')" vertical>
                <FieldInput v-model:value="item.apiKey" />
              </FieldRow>
              <FieldRow :label="t('settings.tags')" vertical>
                <FieldInput v-model:value="item.tags" />
              </FieldRow>
            </template>
          </FieldItems>
        </FieldRow>

        <FieldRow :label="t('settings.sttModels')">
          <FieldItems
            :items="userConfig.sttModels"
            @update:items="updateSTTModels"
          >
            <template #item="{ item }">
              <FieldRow :label="t('settings.id')" vertical>
                <FieldInput v-model:value="item.id" />
              </FieldRow>
              <FieldRow :label="t('settings.model')" vertical>
                <FieldInput v-model:value="item.model" />
              </FieldRow>
              <FieldRow :label="t('settings.description')" vertical>
                <FieldInput v-model:value="item.description" />
              </FieldRow>
              <FieldRow :label="t('settings.baseUrl')" vertical>
                <FieldInput v-model:value="item.baseUrl" />
              </FieldRow>
              <FieldRow :label="t('settings.apiKey')" vertical>
                <FieldInput v-model:value="item.apiKey" />
              </FieldRow>
            </template>
          </FieldItems>
        </FieldRow>

        <FieldRow :label="t('settings.ttsModels')">
          <FieldItems
            :items="userConfig.ttsModels"
            @update:items="updateTTSModels"
          >
            <template #item="{ item }">
              <FieldRow :label="t('settings.id')" vertical>
                <FieldInput v-model:value="item.id" />
              </FieldRow>
              <FieldRow :label="t('settings.model')" vertical>
                <FieldInput v-model:value="item.model" />
              </FieldRow>
              <FieldRow :label="t('settings.description')" vertical>
                <FieldInput v-model:value="item.description" />
              </FieldRow>
              <FieldRow :label="t('settings.baseUrl')" vertical>
                <FieldInput v-model:value="item.baseUrl" />
              </FieldRow>
              <FieldRow :label="t('settings.apiKey')" vertical>
                <FieldInput v-model:value="item.apiKey" />
              </FieldRow>
            </template>
          </FieldItems>
        </FieldRow>

        <h2>{{ t('settings.aiModelUsage') }}</h2>
        <FieldRow :label="t('settings.speechToText')">
          <FieldSelect
            v-model:value="userConfig.aiModelUsage.stt"
            :options="
              userConfig.sttModels.map((model: any) => ({
                id: model.id,
                name: model.id,
              }))
            "
          />
        </FieldRow>
        <FieldRow :label="t('settings.textToSpeech')">
          <FieldSelect
            v-model:value="userConfig.aiModelUsage.tts"
            :options="
              userConfig.ttsModels.map((model: any) => ({
                id: model.id,
                name: model.id,
              }))
            "
          />
        </FieldRow>
        <FieldRow :label="t('settings.translate')">
          <FieldSelect
            v-model:value="userConfig.aiModelUsage.translate"
            :options="
              userConfig.llmModels.map((model: any) => ({
                id: model.id,
                name: model.id,
              }))
            "
          />
        </FieldRow>
        <FieldRow :label="t('settings.voiceCorrection')">
          <FieldSelect
            v-model:value="userConfig.aiModelUsage.voiceCorrection"
            :options="
              userConfig.llmModels.map((model: any) => ({
                id: model.id,
                name: model.id,
              }))
            "
          />
        </FieldRow>
        <FieldRow :label="t('settings.correction')">
          <FieldSelect
            v-model:value="userConfig.aiModelUsage.correction"
            :options="
              userConfig.llmModels.map((model: any) => ({
                id: model.id,
                name: model.id,
              }))
            "
          />
        </FieldRow>
        <FieldRow :label="t('settings.aiTasks')">
          <FieldSelect
            v-model:value="userConfig.aiModelUsage.aiTasks"
            :options="
              userConfig.llmModels.map((model: any) => ({
                id: model.id,
                name: model.id,
              }))
            "
          />
        </FieldRow>
        <FieldRow :label="t('settings.chat')">
          <FieldSelect
            v-model:value="userConfig.aiModelUsage.chat"
            :options="
              userConfig.llmModels.map((model: any) => ({
                id: model.id,
                name: model.id,
              }))
            "
          />
        </FieldRow>
      </div>

      <div v-show="currentTab === 3">
        <h2>{{ t('settings.aiRules') }}</h2>
        <FieldRow :label="t('settings.baseRules')">
          <FieldTextArea v-model:value="userConfig.aiRules.base" />
        </FieldRow>
        <FieldRow :label="t('settings.quickTranslation')">
          <FieldTextArea v-model:value="userConfig.aiRules.translate" />
        </FieldRow>
        <FieldRow
          :label="t('settings.voiceCorrectionRules')"
        >
          <FieldTextArea v-model:value="userConfig.aiRules.voiceCorrection" />
        </FieldRow>
        <FieldRow :label="t('settings.textCorrection')">
          <FieldTextArea v-model:value="userConfig.aiRules.correction" />
        </FieldRow>
      </div>

      <div v-show="currentTab === 4">
        <FieldRow :label="t('settings.aiTasks')">
          <FieldItems :items="userConfig.aiTasks" @update:items="updateAiTasks">
            <template #item="{ item, index }">
              <div class="flex flex-row gap-2 w-full">
                <div>
                  <KeyButton>{{ PRESETS_KEYS[index] }}</KeyButton>
                </div>
                <div class="flex-1">
                  <FieldRow :label="t('settings.name')" vertical>
                    <FieldInput v-model:value="item.name" />
                  </FieldRow>
                  <FieldRow :label="t('settings.rule')" vertical>
                    <FieldTextArea v-model:value="item.rule" />
                  </FieldRow>
                </div>
              </div>
            </template>
          </FieldItems>
        </FieldRow>
      </div>

      <div v-show="currentTab === 5">
        <FieldRow :label="t('settings.chatRoles')">
          <FieldItems
            :items="userConfig.chatRoles"
            @update:items="updateChatRoles"
          >
            <template #item="{ item, index }">
              <div class="flex flex-row gap-2 w-full">
                <div>
                  <KeyButton>{{ PRESETS_KEYS[index] }}</KeyButton>
                </div>
                <div class="flex-1">
                  <FieldRow :label="t('settings.name')" vertical>
                    <FieldInput v-model:value="item.name" />
                  </FieldRow>
                  <FieldRow :label="t('settings.rule')" vertical>
                    <FieldTextArea v-model:value="item.rule" />
                  </FieldRow>
                </div>
              </div>
            </template>
          </FieldItems>
        </FieldRow>
      </div>

      <div v-show="currentTab === 6">
        <template v-for="plugin of plugins" :key="plugin.pluginName">
          <h2>{{ plugin.label }}</h2>
          <FieldsByCfg
            :config="plugin.fields"
            @update:values="updatePluginConfig(plugin.pluginName, $event)"
          />
        </template>
      </div>
    </div>

    <div class="flex flex-row gap-2">
      <Button @click="saveSettings">{{ t('common.save') }}</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEFAULT_USER_CONFIG } from '@shared'
import { computed, onMounted, ref, watchEffect } from 'vue'

import { useI18n } from '../composables/useI18n'
import { pluginIndexes } from '../plugins'
import useToast from '../composables/useToast'
import {
  AUTO_LANGUAGE_VALUE,
  buildLanguageOptions,
  DEFAULT_LANGUAGE,
} from '../lib/locale/language'
import { useThemeStore } from '../stores/theme'
import { useIpcStore } from '../stores/ipc'
import { PRESETS_KEYS } from '../types'

const ipcStore = useIpcStore()
const { toast } = useToast()
const themeStore = useThemeStore()
const { t } = useI18n()

const userConfig = ref(JSON.parse(JSON.stringify(ipcStore.params.userConfig || DEFAULT_USER_CONFIG)))
const currentTab = ref(0)
const tabs = computed(() => [
  { text: t('settings.generalTab'), key: 0 },
  { text: t('settings.translationsTab'), key: 1 },
  { text: t('settings.modelsTab'), key: 2 },
  { text: t('settings.rulesTab'), key: 3 },
  { text: t('settings.tasksTab'), key: 4 },
  { text: t('settings.rolesTab'), key: 5 },
  { text: t('settings.pluginsTab'), key: 6 },
])

const pluginConfigs = pluginIndexes
  .map((pluginIndex) => pluginIndex())
  .filter((plugin) => plugin.defaultConfig)
  .map((plugin) => ({
    pluginName: plugin.name,
    label: plugin.label,
    fields: plugin.defaultConfig!.fields,
  }))

watchEffect(() => {
  userConfig.value = JSON.parse(JSON.stringify(ipcStore.params.userConfig || DEFAULT_USER_CONFIG))
  ensurePluginDefaults()
  normalizeLanguageConfig()
})

onMounted(() => {
  ensurePluginDefaults()
  normalizeLanguageConfig()
})

const plugins = computed(() => {
  return Object.keys(userConfig.value.plugins || {})
    .map((pluginName) => {
      const pluginCfg = pluginConfigs.find(
        (plugin: any) => plugin.pluginName === pluginName
      )

      if (!pluginCfg) {
        return null
      }

      return {
        ...pluginCfg,
        fields: pluginCfg.fields.map((field: any) => ({
          ...field,
          value: userConfig.value.plugins[pluginName][field.name],
        })),
      }
    })
    .filter((plugin) => plugin !== null)
})

function ensurePluginDefaults() {
  if (!userConfig.value.plugins) {
    userConfig.value.plugins = {}
  }

  for (const pluginCfg of pluginConfigs) {
    if (!userConfig.value.plugins[pluginCfg.pluginName]) {
      userConfig.value.plugins[pluginCfg.pluginName] = {}
    }

    for (const field of pluginCfg.fields) {
      if (userConfig.value.plugins[pluginCfg.pluginName][field.name] === undefined) {
        userConfig.value.plugins[pluginCfg.pluginName][field.name] =
          field.defaultValue
      }
    }
  }
}

function normalizeLanguageConfig() {
  userConfig.value.theme = userConfig.value.theme || themeStore.themeMode
  userConfig.value.appLanguage =
    userConfig.value.appLanguage || AUTO_LANGUAGE_VALUE
  userConfig.value.userLanguage =
    userConfig.value.userLanguage || AUTO_LANGUAGE_VALUE
  userConfig.value.toTranslateLanguages =
    (userConfig.value.toTranslateLanguages || []).map(
      (lang: string) => lang || DEFAULT_LANGUAGE
    )
}

const saveSettings = () => {
  ipcStore.saveUserConfig(userConfig.value)
  toast(t('settings.saved'), 'success')
}

const appLanguageOptions = computed(() =>
  buildLanguageOptions([userConfig.value.appLanguage], true, t)
)

const userLanguageOptions = computed(() =>
  buildLanguageOptions([userConfig.value.userLanguage], true, t)
)

const translateLanguageOptions = computed(() =>
  buildLanguageOptions(userConfig.value.toTranslateLanguages || [], false, t)
)

const translateLanguagesItems = computed(() => {
  return (userConfig.value.toTranslateLanguages || []).map((lang: string) => ({
    value: lang,
  }))
})

const updateTranslateLanguages = (items: Record<string, any>[]) => {
  userConfig.value.toTranslateLanguages = items.map(
    (item: Record<string, any>) => item.value
  )
}

const updateLLMModels = (items: any[]) => {
  userConfig.value.llmModels = items
}

const updateSTTModels = (items: any[]) => {
  userConfig.value.sttModels = items
}

const updateTTSModels = (items: any[]) => {
  userConfig.value.ttsModels = items
}

const updateAiTasks = (items: any[]) => {
  userConfig.value.aiTasks = items
}

const updateChatRoles = (items: any[]) => {
  userConfig.value.chatRoles = items
}

const updatePluginConfig = (
  pluginName: string,
  values: Record<string, any>
) => {
  userConfig.value.plugins[pluginName] = values
}
</script>

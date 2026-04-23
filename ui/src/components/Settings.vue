<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <Tabs :tabs="tabs" v-model:value="currentTab" />

    <div class="flex-1 overflow-y-auto">
      <div v-show="currentTab === 0" class="fields-col">
        <FieldRow :label="t('settings.theme')">
          <ThemeSwitcher v-model:value="userConfig.theme" />
        </FieldRow>
        <FieldRow :label="t('settings.userLanguage')">
          <FieldSelect
            v-model:value="userConfig.userLanguage"
            :options="userLanguageOptions"
          />
        </FieldRow>
        <FieldRow :label="t('settings.appLanguage')">
          <div class="flex items-center gap-2 w-full">
            <FieldSelect
              class="flex-1"
              :value="effectiveAppLanguage"
              :options="appLanguageOptions"
              :disabled="!isAppLanguageManual"
              @update:value="updateAppLanguage"
            />
            <button
              type="button"
              class="text-sm underline underline-offset-2 disabled:no-underline opacity-80 hover:opacity-100"
              @click="toggleAppLanguageMode"
            >
              {{
                isAppLanguageManual
                  ? t('settings.appLanguageAuto')
                  : t('settings.appLanguageManual')
              }}
            </button>
          </div>
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
        <FieldRow :label="t('settings.voiceCorrectionRules')">
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
          <h2>{{ plugin.labelKey ? t(plugin.labelKey) : plugin.label }}</h2>
          <FieldsByCfg
            :config="plugin.fields"
            @update:values="updatePluginConfig(plugin.pluginName, $event)"
          />
        </template>
      </div>
    </div>

    <div class="flex flex-row justify-end">
      <span class="text-sm text-muted">
        {{ saveStatusLabel }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'

import { useI18n } from '../composables/useI18n'
import { syncI18nLocale } from '../lib/i18n'
import {
  AUTO_LANGUAGE_VALUE,
  DEFAULT_LANGUAGE,
  SUPPORTED_UI_LANGUAGE_OPTIONS,
  buildLanguageOptions,
  getNavigatorLanguages,
  normalizeLocale,
  resolveUiLanguagePreference,
} from '../lib/locale/language'
import { pluginIndexes } from '../plugins'
import { useIpcStore } from '../stores/ipc'
import { useThemeStore } from '../stores/theme'
import { PRESETS_KEYS } from '../types'
import { DEFAULT_USER_CONFIG } from '@shared'

const ipcStore = useIpcStore()
const themeStore = useThemeStore()
const { t, locale } = useI18n()

const SAVE_DEBOUNCE_MS = 500

type SaveState = 'idle' | 'saving' | 'saved'

const pluginConfigs = pluginIndexes
  .map((pluginIndex) => pluginIndex())
  .filter((plugin) => plugin.defaultConfig)
  .map((plugin) => ({
    pluginName: plugin.name,
    labelKey: plugin.labelKey,
    label: plugin.label,
    fields: plugin.defaultConfig!.fields,
  }))

const currentTab = ref(0)
const userConfig = ref(createPreparedUserConfig(ipcStore.params.userConfig))
const saveState = ref<SaveState>('idle')
const lastPersistedConfig = ref(serializeUserConfig(userConfig.value))
let isComponentActive = true
let skipNextAutosave = false
let saveTimer: ReturnType<typeof setTimeout> | null = null

const tabs = computed(() => [
  { text: t('settings.generalTab'), key: 0 },
  { text: t('settings.translationsTab'), key: 1 },
  { text: t('settings.modelsTab'), key: 2 },
  { text: t('settings.rulesTab'), key: 3 },
  { text: t('settings.tasksTab'), key: 4 },
  { text: t('settings.rolesTab'), key: 5 },
  { text: t('settings.pluginsTab'), key: 6 },
])

watch(
  () => ipcStore.params.userConfig,
  (incomingConfig) => {
    const preparedConfig = createPreparedUserConfig(incomingConfig)
    const serializedConfig = serializeUserConfig(preparedConfig)

    if (serializedConfig === lastPersistedConfig.value) {
      return
    }

    skipNextAutosave = true
    userConfig.value = preparedConfig
    lastPersistedConfig.value = serializedConfig
    saveState.value = 'idle'
  },
  { immediate: true }
)

watch(
  userConfig,
  () => {
    if (skipNextAutosave) {
      skipNextAutosave = false
      return
    }

    scheduleAutosave()
  },
  { deep: true }
)

const saveStatusLabel = computed(() => {
  if (saveState.value === 'saving') {
    return t('settings.saving')
  }

  if (saveState.value === 'saved') {
    return t('settings.saved')
  }

  return ''
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

      const pluginValues = userConfig.value.plugins?.[pluginName] || {}

      return {
        ...pluginCfg,
        fields: pluginCfg.fields.map((field: any) => ({
          ...field,
          value: pluginValues[field.name],
        })),
      }
    })
    .filter((plugin) => plugin !== null)
})

function cloneUserConfig(config: unknown) {
  return JSON.parse(JSON.stringify(config || DEFAULT_USER_CONFIG))
}

function createPreparedUserConfig(config: unknown) {
  const nextConfig = cloneUserConfig(config)

  ensurePluginDefaults(nextConfig)
  normalizeLanguageConfig(nextConfig)

  return nextConfig
}

function serializeUserConfig(config: unknown) {
  return JSON.stringify(config)
}

function ensurePluginDefaults(config: Record<string, any>) {
  if (!config.plugins) {
    config.plugins = {}
  }

  for (const pluginCfg of pluginConfigs) {
    if (!config.plugins[pluginCfg.pluginName]) {
      config.plugins[pluginCfg.pluginName] = {}
    }

    for (const field of pluginCfg.fields) {
      if (config.plugins[pluginCfg.pluginName][field.name] === undefined) {
        config.plugins[pluginCfg.pluginName][field.name] = field.defaultValue
      }
    }
  }
}

function normalizeLanguageConfig(config: Record<string, any>) {
  config.theme = config.theme || themeStore.themeMode
  config.appLanguage = config.appLanguage || AUTO_LANGUAGE_VALUE
  config.userLanguage = config.userLanguage || AUTO_LANGUAGE_VALUE
  config.toTranslateLanguages = (
    config.toTranslateLanguages || []
  ).map((lang: string) => lang || DEFAULT_LANGUAGE)
}

const navigatorLanguages = computed(() => getNavigatorLanguages())

const isAppLanguageManual = computed(
  () => userConfig.value.appLanguage !== AUTO_LANGUAGE_VALUE
)

const effectiveAppLanguage = computed(() =>
  resolveUiLanguagePreference(
    userConfig.value.appLanguage,
    userConfig.value.userLanguage,
    navigatorLanguages.value
  )
)

async function persistUserConfig() {
  const preparedConfig = createPreparedUserConfig(userConfig.value)
  const serializedConfig = serializeUserConfig(preparedConfig)
  const previousPersistedConfig = lastPersistedConfig.value

  if (serializedConfig === lastPersistedConfig.value) {
    if (isComponentActive) {
      saveState.value = 'saved'
    }
    return
  }

  if (isComponentActive) {
    saveState.value = 'saving'
  }

  // Mark this snapshot as persisted before the store echoes it back into params.
  lastPersistedConfig.value = serializedConfig
  const result = await ipcStore.saveUserConfig(preparedConfig)

  if (!result.success) {
    lastPersistedConfig.value = previousPersistedConfig

    if (isComponentActive) {
      saveState.value = 'idle'
    }
    return
  }

  if (isComponentActive) {
    saveState.value = 'saved'
  }
}

function scheduleAutosave() {
  if (saveTimer) {
    clearTimeout(saveTimer)
  }

  saveState.value = 'saving'
  saveTimer = setTimeout(() => {
    saveTimer = null
    void persistUserConfig()
  }, SAVE_DEBOUNCE_MS)
}

function flushPendingAutosave() {
  if (!saveTimer) {
    return
  }

  clearTimeout(saveTimer)
  saveTimer = null
  void persistUserConfig()
}

const appLanguageOptions = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  locale.value
  return buildLanguageOptions(
    [effectiveAppLanguage.value, userConfig.value.appLanguage],
    false,
    t,
    SUPPORTED_UI_LANGUAGE_OPTIONS
  )
})

const userLanguageOptions = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  locale.value
  return buildLanguageOptions([userConfig.value.userLanguage], true, t)
})

const translateLanguageOptions = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  locale.value
  return buildLanguageOptions(
    userConfig.value.toTranslateLanguages || [],
    false,
    t
  )
})

watch(
  () => [userConfig.value.appLanguage, userConfig.value.userLanguage],
  ([appLanguage, userLanguage]) => {
    syncI18nLocale(appLanguage, userLanguage)
  }
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

watch(
  () => userConfig.value.userLanguage,
  (userLanguage) => {
    userConfig.value.userLanguage = normalizeLocale(
      userLanguage || AUTO_LANGUAGE_VALUE
    )
  }
)

const updateAppLanguage = (value: number | string | undefined) => {
  if (typeof value !== 'string') {
    return
  }

  userConfig.value.appLanguage = value
}

const toggleAppLanguageMode = () => {
  if (isAppLanguageManual.value) {
    userConfig.value.appLanguage = AUTO_LANGUAGE_VALUE
    return
  }

  userConfig.value.appLanguage = effectiveAppLanguage.value
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
onUnmounted(() => {
  isComponentActive = false
  flushPendingAutosave()
})
</script>

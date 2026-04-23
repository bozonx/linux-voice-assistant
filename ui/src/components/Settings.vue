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

        <FieldRow :label="t('settings.windowInsertion')" vertical>
          <div class="flex flex-col gap-3 w-full">
            <Tabs
              :tabs="windowInsertionTabs"
              :value="userConfig.windowInsertion.method"
              @update:value="updateWindowInsertionMethod"
            />
            <FieldInput
              v-show="userConfig.windowInsertion.method === 'xdotool'"
              v-model:value="userConfig.windowInsertion.xdotoolBin"
            />
            <FieldInput
              v-show="userConfig.windowInsertion.method === 'ydotool'"
              v-model:value="userConfig.windowInsertion.ydotoolBin"
            />
          </div>
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

      <div v-show="currentTab === 2" class="fields-col">
        <FieldRow :label="t('settings.sttProvider')" vertical>
          <Tabs :tabs="sttProviderTabs" v-model:value="currentSttProvider" />
        </FieldRow>

        <div v-show="currentSttProvider === 'whisper-local'">
          <FieldRow :label="t('settings.whisperLocal')" vertical>
            <div class="flex flex-col gap-3 w-full">
              <FieldRow :label="t('settings.whisperLocalModel')" vertical>
                <FieldSelect
                  :value="whisperLocalModel"
                  :options="WHISPER_LOCAL_MODELS"
                  @update:value="setWhisperLocalModel"
                />
              </FieldRow>
              <div class="flex flex-col gap-2 text-sm">
                <div>
                  {{
                    isWhisperModelDownloaded
                      ? t('settings.whisperLocalDownloaded')
                      : t('settings.whisperLocalNotDownloaded')
                  }}
                </div>
                <div class="text-xs text-muted">
                  {{ t('settings.whisperLocalStorageHint') }}
                </div>
                <div
                  v-if="downloadState.error"
                  class="text-error text-xs whitespace-pre-wrap"
                >
                  {{ downloadState.error }}
                </div>
                <div
                  v-if="downloadState.loading"
                  class="flex flex-col gap-1 text-xs text-muted"
                >
                  <div class="flex justify-between gap-2">
                    <span>{{ downloadState.status }}: {{ downloadState.file }}</span>
                    <span>{{ Math.round(downloadState.progress) }}%</span>
                  </div>
                  <progress
                    class="progress progress-primary w-full"
                    :value="downloadState.progress"
                    max="100"
                  />
                </div>
                <Button
                  v-if="!isWhisperModelDownloaded || downloadState.loading"
                  sm
                  :disabled="downloadState.loading"
                  @click="downloadWhisperModel"
                >
                  {{ t('settings.whisperLocalDownload') }}
                </Button>
                <span v-else class="text-success">
                  {{ t('settings.whisperLocalReady') }}
                </span>
                <Button
                  v-if="isWhisperModelDownloaded && !downloadState.loading"
                  sm
                  neutral
                  @click="deleteWhisperModel"
                >
                  {{ t('settings.whisperLocalDelete') }}
                </Button>
              </div>
            </div>
          </FieldRow>
        </div>

        <div v-show="currentSttProvider === 'vosk'">
          <FieldRow :label="t('settings.voskWsUrl')">
            <FieldInput
              :value="voskWsUrl"
              placeholder="ws://localhost:2700"
              @update:value="setVoskWsUrl"
            />
          </FieldRow>
        </div>
      </div>

      <div v-show="currentTab === 3">
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

        <h2>{{ t('settings.aiModelUsage') }}</h2>
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

      <div v-show="currentTab === 4">
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

      <div v-show="currentTab === 5">
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

      <div v-show="currentTab === 6">
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

      <div v-show="currentTab === 7">
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
import {
  DEFAULT_WHISPER_LOCAL_MODEL,
  WHISPER_LOCAL_MODELS,
  deleteModel,
  downloadModel,
  isModelDownloaded,
  type ModelDownloadProgress,
} from '../utils/stt/model-storage'

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
const currentSttProvider = ref<'vosk' | 'whisper-local'>('vosk')
const userConfig = ref(createPreparedUserConfig(ipcStore.params.userConfig))
const saveState = ref<SaveState>('idle')
const lastPersistedConfig = ref(serializeUserConfig(userConfig.value))
const isWhisperModelDownloaded = ref(false)
const downloadState = ref({
  loading: false,
  progress: 0,
  file: '',
  status: '',
  error: '',
})
let isComponentActive = true
let skipNextAutosave = false
let saveTimer: ReturnType<typeof setTimeout> | null = null

const tabs = computed(() => [
  { text: t('settings.generalTab'), key: 0 },
  { text: t('settings.translationsTab'), key: 1 },
  { text: t('settings.sttTab'), key: 2 },
  { text: t('settings.llmTab'), key: 3 },
  { text: t('settings.rulesTab'), key: 4 },
  { text: t('settings.tasksTab'), key: 5 },
  { text: t('settings.rolesTab'), key: 6 },
  { text: t('settings.pluginsTab'), key: 7 },
])

const sttProviderTabs = computed(() => [
  { text: 'Whisper local', key: 'whisper-local' },
  { text: 'Vosk', key: 'vosk' },
])

const windowInsertionTabs = computed(() => [
  { text: 'xdotool', key: 'xdotool' },
  { text: 'ydotool', key: 'ydotool' },
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

watch(
  () => userConfig.value.aiModelUsage?.stt,
  () => {
    currentSttProvider.value = resolveCurrentSttProvider(userConfig.value)
  },
  { immediate: true }
)

watch(
  () => currentSttProvider.value,
  (provider) => {
    if (provider === resolveCurrentSttProvider(userConfig.value)) {
      return
    }

    if (provider === 'whisper-local') {
      const whisperModel = ensureWhisperLocalModel(userConfig.value)
      userConfig.value.aiModelUsage.stt = whisperModel.id
      return
    }

    const voskModel = ensureVoskModel(userConfig.value)
    userConfig.value.aiModelUsage.stt = voskModel.id
  }
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
  normalizeWindowInsertionConfig(nextConfig)
  normalizeSttConfig(nextConfig)

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
  config.toTranslateLanguages = (config.toTranslateLanguages || []).map(
    (lang: string) => lang || DEFAULT_LANGUAGE
  )
}

function normalizeWindowInsertionConfig(config: Record<string, any>) {
  const defaultWindowInsertion = DEFAULT_USER_CONFIG.windowInsertion
  const windowInsertion = config.windowInsertion || {}
  const xdotoolBin =
    windowInsertion.xdotoolBin ||
    config.xdotoolBin ||
    defaultWindowInsertion.xdotoolBin

  config.windowInsertion = {
    method:
      windowInsertion.method === 'ydotool' ||
      windowInsertion.method === 'xdotool'
        ? windowInsertion.method
        : defaultWindowInsertion.method,
    xdotoolBin,
    ydotoolBin: windowInsertion.ydotoolBin || defaultWindowInsertion.ydotoolBin,
  }
  config.xdotoolBin = xdotoolBin
}

function normalizeSttConfig(config: Record<string, any>) {
  if (!Array.isArray(config.sttModels)) {
    config.sttModels = []
  }

  if (!config.aiModelUsage) {
    config.aiModelUsage = {}
  }

  const existingWhisperModel = config.sttModels
    .filter((model: Record<string, any>) => {
      const provider = model.provider || model.model
      return provider === 'whisper-local'
    })[0]
  const existingVoskModel = config.sttModels.find(
    (model: Record<string, any>) => {
      const provider = model.provider || model.model || 'vosk'
      return provider !== 'whisper-local'
    }
  )
  const whisperModel = createWhisperLocalModel(existingWhisperModel)
  const voskModel = createVoskModel(existingVoskModel)
  const activeModel = config.sttModels.find(
    (model: Record<string, any>) => model.id === config.aiModelUsage.stt
  )
  const activeProvider = activeModel?.provider || activeModel?.model

  config.sttModels = [whisperModel, voskModel]
  config.aiModelUsage.stt = activeProvider === 'whisper-local'
    ? whisperModel.id
    : voskModel.id
}

function createWhisperLocalModel(existingModel?: Record<string, any>) {
  return {
    id: existingModel?.id || 'browser-whisper-local',
    model: 'whisper-local',
    provider: 'whisper-local',
    description:
      existingModel?.description || t('settings.whisperLocalDescription'),
    localModel: existingModel?.localModel || DEFAULT_WHISPER_LOCAL_MODEL,
  }
}

function createVoskModel(existingModel?: Record<string, any>) {
  return {
    id: 'system-vosk',
    model: 'vosk',
    provider: 'vosk',
    description:
      existingModel?.description || t('settings.systemVoskDescription'),
    baseUrl: existingModel?.baseUrl || 'ws://localhost:2700',
  }
}

function ensureWhisperLocalModel(config: Record<string, any>) {
  const existingModel = (config.sttModels || []).find(
    (model: Record<string, any>) => model.provider === 'whisper-local'
  )
  const nextModel = createWhisperLocalModel(existingModel)
  const otherModels = (config.sttModels || []).filter(
    (model: Record<string, any>) => model.provider !== 'whisper-local'
  )

  config.sttModels = [nextModel, ...otherModels]
  return nextModel
}

function ensureVoskModel(config: Record<string, any>) {
  const existingModel = (config.sttModels || []).find(
    (model: Record<string, any>) => model.provider === 'vosk'
  )
  const nextModel = createVoskModel(existingModel)
  const otherModels = (config.sttModels || []).filter(
    (model: Record<string, any>) => model.provider !== 'vosk'
  )

  config.sttModels = [...otherModels, nextModel]
  return nextModel
}

function resolveCurrentSttProvider(config: Record<string, any>) {
  const usageId = config.aiModelUsage?.stt
  const model = (config.sttModels || []).find(
    (item: Record<string, any>) => item.id === usageId
  )

  return model?.provider === 'whisper-local' ? 'whisper-local' : 'vosk'
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

const voskWsUrl = computed(() => {
  const voskModel = (userConfig.value.sttModels || []).find(
    (model: Record<string, any>) => model.provider === 'vosk'
  )

  return voskModel?.baseUrl || 'ws://localhost:2700'
})

const whisperLocalConfig = computed(() => {
  return ensureWhisperLocalModel(userConfig.value)
})

const whisperLocalModel = computed(() => {
  return whisperLocalConfig.value.localModel || DEFAULT_WHISPER_LOCAL_MODEL
})

watch(
  whisperLocalModel,
  () => {
    void refreshWhisperModelStatus()
  },
  { immediate: true }
)

const updateTranslateLanguages = (items: Record<string, any>[]) => {
  userConfig.value.toTranslateLanguages = items.map(
    (item: Record<string, any>) => item.value
  )
}

const updateWindowInsertionMethod = (value: string | number) => {
  if (value !== 'xdotool' && value !== 'ydotool') {
    return
  }

  userConfig.value.windowInsertion.method = value
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

const setVoskWsUrl = (baseUrl: string) => {
  const whisperModel = ensureWhisperLocalModel(userConfig.value)
  const nextVoskModel = {
    id: 'system-vosk',
    model: 'vosk',
    provider: 'vosk',
    description: t('settings.systemVoskDescription'),
    baseUrl: baseUrl || 'ws://localhost:2700',
  }

  userConfig.value.sttModels = [whisperModel, nextVoskModel]
  userConfig.value.aiModelUsage.stt = nextVoskModel.id
}

const setWhisperLocalModel = (modelName: string | number | undefined) => {
  if (typeof modelName !== 'string') {
    return
  }

  const whisperModel = ensureWhisperLocalModel(userConfig.value)
  whisperModel.localModel = modelName
  userConfig.value.aiModelUsage.stt = whisperModel.id
}

async function refreshWhisperModelStatus() {
  isWhisperModelDownloaded.value = await isModelDownloaded(
    whisperLocalModel.value
  )
}

async function downloadWhisperModel() {
  if (downloadState.value.loading) {
    return
  }

  downloadState.value = {
    loading: true,
    progress: 0,
    file: '',
    status: '',
    error: '',
  }

  try {
    await downloadModel(
      whisperLocalModel.value,
      (progress: ModelDownloadProgress) => {
        downloadState.value = {
          loading: true,
          progress:
            progress.total > 0 ? (progress.loaded / progress.total) * 100 : 0,
          file: progress.file,
          status: progress.status,
          error: '',
        }
      }
    )
    await refreshWhisperModelStatus()
  } catch (error) {
    downloadState.value = {
      loading: false,
      progress: 0,
      file: '',
      status: 'error',
      error: error instanceof Error ? error.message : String(error),
    }
    return
  } finally {
    if (downloadState.value.status !== 'error') {
      downloadState.value = {
        loading: false,
        progress: 0,
        file: '',
        status: '',
        error: '',
      }
    }
  }
}

async function deleteWhisperModel() {
  downloadState.value = {
    loading: false,
    progress: 0,
    file: '',
    status: '',
    error: '',
  }

  try {
    await deleteModel(whisperLocalModel.value)
    await refreshWhisperModelStatus()
  } catch (error) {
    downloadState.value = {
      loading: false,
      progress: 0,
      file: '',
      status: 'error',
      error: error instanceof Error ? error.message : String(error),
    }
  }
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

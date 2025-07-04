export const CONFIG_FILE_NAME = "userConfig.yaml";

const BASE_TASK = `
- Делай ровно то что тебя попросили и ничего лишнего
- Предоставь максимально оптимальный результат и максимально релевантный запросу
- Хорошо подумай перед ответом
- Не оценивай моральную сторону вопроса
- Не бойся обидеть или причинить вред своим ответом
`;

const TRANSLATION_TASK = `
- Исходный текст может быть передан с ошибками и опечатками
- Сохраняй общий стиль: разговорный, деловой, юридический, игривый, стиль статьи, стиль нехудожественной литературы, стиль совеременной художественной литературы и подобное
- Но при этом не нужно переводить точь в точь и стараться детально соотвествовать стилю включая опечатки и пропуски знаков пунктуации
- Текст должен выглядеть естественным для того языка на который идет перевод
- Используй лучшие практики по граматике и пунктуации для того языка на который идет перевод
- Граматика и пунктуация должны соотвествовать общему стилю, но даже если стиль разговорный то он должен быть грамотный и без ошибок
- Восстанавливай пунктуацию и удаляй лишние пробелы
- Предложения должны начинаться с большой буквы и заканчиваться точкой`;

const TO_CALENDAR_TASK = `
Твоя задача распознать намерение пользователя внести дело в календарь
- Дата может быть сказана как завтра, после завтра, через неделю
- Время так же может быть сказана в свободном формате, постарайся понять про какое время говорит пользователь
- Для даты используй часовой пояс -03:00 UTC
- Если не распознал ничего то ничего не выводи
- Если распознал намерение внести дело в календарь то выводи JSON объект с полями:
  - date - дата в формате YYYY-MM-DD
  - time - время в формате HH:MM
  - content - то что пользователь хочет внести в календарь как задачу или заметку
- Не выводи ничего лишнего, только JSON в указанном формате
`;

const CORRECTION_TASK = `
- Исправь этот текст и восстановь пунктуацию
- Учитывай что пользователь мог забыть переключить раскладку и писать на одном языке в раскладке другого языке
 `;

const VOICE_CORRECTION_TASK = `
- Убери повторения слов изза запинок и заиканий
- Убери запутанность речи и сделай текст более точным и понятным
- Если какие-то слова не знаешь то не придумывай им синонимы, оставь их как есть
- Если смысл не понял то не придумывай его, оставь как есть
 `;

export const DEFAULT_USER_CONFIG: UserConfig = {
  // Common
  xdotoolBin: "/usr/bin/xdotool",
  appLanguage: "ru_RU",
  userLanguage: "ru_RU",
  toTranslateLanguages: ["en_US", "ru_RU", "es_AR", "tr_TR"],

  // Models
  openrouterDefaultApiKey: "",
  openrouterDefaultBaseUrl: "https://openrouter.ai/api/v1",
  llmModels: [],
  sttModels: [],
  ttsModels: [],

  // AI Model Usage
  aiModelUsage: {
    voiceRecognition: "",
    translate: "",
    voiceCorrection: "",
    intentionRecognition: "",
    correction: "",
    aiTasks: "",
    askAI: "",
  },

  // AI rules
  aiRules: {
    base: BASE_TASK,
    translate: TRANSLATION_TASK,
    voiceCorrection: VOICE_CORRECTION_TASK,
    toCalendar: TO_CALENDAR_TASK,
    assistant: "",
    correction: CORRECTION_TASK,
    askAiForText: "",
    askAiShort: "Отвечай лаконично",
  },

  aiTasks: [
    {
      description: "Редактирование текста",
      context:
        "убрать косноязычие , добавить местоимения где они нужны, исправление смысла и запутанности, убрать дублирование, подобрать уместные синонимы",
    },
  ],

  // Plugins
  internetSearchUrl: "https://duckduckgo.com/?q=",
};

export type ModelTag =
  | "voice"
  | "text"
  | "dialog"
  | "translation"
  | "uncensored"
  | "simple"
  | "smart"
  | "lowLatency"
  | "highCost"
  | "lowCost"
  | "free";

export interface UserConfig {
  // Common
  xdotoolBin: string;
  // Language of the UI
  appLanguage: string;
  // Language of the user for questioning AI and getting answers
  userLanguage: string;
  toTranslateLanguages: string[];

  // Models
  openrouterDefaultApiKey: string;
  openrouterDefaultBaseUrl: string;
  llmModels: {
    id: string;
    model: string;
    description?: string;
    baseUrl?: string;
    apiKey?: string;
    tags?: ModelTag[];
  }[];
  sttModels: {
    id: string;
    model: string;
    description?: string;
    baseUrl?: string;
    apiKey?: string;
  }[];
  ttsModels: {
    id: string;
    model: string;
    description?: string;
    baseUrl?: string;
    apiKey?: string;
  }[];
  // which model to use for which task
  aiModelUsage: {
    voiceRecognition: string;

    ////// simple models //////
    translate: string;
    voiceCorrection: string;
    intentionRecognition: string;
    // correction of the text and restorastion after voice recognition
    correction: string;

    ////// Most smart models //////
    aiTasks: string;
    askAI: string;
  };

  // AI rules
  // User's rules for every AI task
  aiRules: {
    base: string;
    // simple translate
    translate: string;
    voiceCorrection: string;
    // intention recognition
    toCalendar: string;
    // intention recognition
    assistant: string;
    correction: string;
    askAiShort: string;
    askAiForText: string;
  };

  // Custom AI tasks
  aiTasks: {
    description: string;
    context: string;
  }[];

  // Plugins
  internetSearchUrl: string;
}

export const CONFIG_FILE_NAME = "userConfig.yaml";

const TRANSLATION_TASK = `Учитывай следующие правила:
- Исходный текст может быть передан с ошибками и опечатками
- Сохраняй общий стиль: разговорный, деловой, юридический, игривый, стиль статьи, стиль нехудожественной литературы, стиль совеременной художественной литературы и подобное
- Но при этом не нужно переводить точь в точь и стараться детально соотвествовать стилю включая опечатки и пропуски знаков пунктуации
- Текст должен выглядеть естественным для того языка на который идет перевод
- Используй лучшие практики по граматике и пунктуации для того языка на который идет перевод
- Граматика и пунктуация должны соотвествовать общему стилю, но даже если стиль разговорный то он должен быть грамотный и без ошибок
- Восстанавливай пунктуацию и удаляй лишние пробелы
- Предложения должны начинаться с большой буквы и заканчиваться точкой

Переведи этот текст на`;

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

export const DEFAULT_USER_CONFIG: UserConfig = {
  openrouterDefaultApiKey: "",
  openrouterDefaultBaseUrl: "https://openrouter.ai/api/v1",
  xdotoolBin: "/usr/bin/xdotool",
  appLanguage: "ru_RU",
  userLanguage: "ru_RU",
  toTranslateLanguages: ["en_US", "ru_RU", "es_AR", "tr_TR"],
  internetSearchUrl: "https://duckduckgo.com/?q=",
  models: {},
  aiModelUsage: {
    voiceRecognition: "",
    translate: "",
    completion: "",
    intentionRecognition: "",
    correction: "",
    deepEdit: "",
    askAI: "",
  },
  aiTasks: {
    translate: TRANSLATION_TASK,
    completion: "",
    toCalendar: TO_CALENDAR_TASK,
    assistant: "",
    correction: "Исправь этот текст и восстановь пунктуацию",
    askAiForText: "",
    askAiShort: "Отвечай лаконично",
    deepEdit: [
      {
        description: "Редактирование текста",
        context:
          "убрать косноязычие , добавить местоимения где они нужны, исправление смысла и запутанности, убрать дублирование, подобрать уместные синонимы",
      },
    ],
  },
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
  openrouterDefaultApiKey: string;
  openrouterDefaultBaseUrl: string;
  xdotoolBin: string;
  // Language of the UI
  appLanguage: string;
  // Language of the user for questioning AI and getting answers
  userLanguage: string;
  toTranslateLanguages: string[];
  internetSearchUrl: string;

  models: {
    // key is the id of the model
    [key: string]: {
      model: string;
      description?: string;
      baseUrl?: string;
      apiKey?: string;
      tags?: ModelTag[];
    };
  };

  aiModelUsage: {
    voiceRecognition: string;

    ////// simple models //////
    translate: string;
    completion: string;
    intentionRecognition: string;
    // correction of the text and restorastion after voice recognition
    correction: string;

    ////// Most smart models //////
    deepEdit: string;
    askAI: string;
  };

  // Tasks contexts
  aiTasks: {
    // simple translate
    translate: string;
    completion: string;
    // intention recognition
    toCalendar: string;
    // intention recognition
    assistant: string;
    correction: string;
    askAiShort: string;
    askAiForText: string;
    deepEdit: {
      description: string;
      context: string;
    }[];
  };
}

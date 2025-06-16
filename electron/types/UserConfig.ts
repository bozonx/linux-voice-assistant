// export const CONFIG_PATHS = {
//   linux: "~/.config/librnet-assistant/userConfig.yaml",
//   windows:
//     "C:\\Users\\ivan\\AppData\\Roaming\\librnet-assistant\\userConfig.yaml",
//   macos: "~/Library/Application Support/librnet-assistant/userConfig.yaml",
// };

export const CONFIG_FILE_NAME = "userConfig.yaml";

export const DEFAULT_USER_CONFIG: UserConfig = {
  openrouterDefaultApiKey: "",
  openrouterDefaultBaseUrl: "https://openrouter.ai/api/v1",
  xdotoolBin: "/usr/bin/xdotool",
  appLanguage: "ru_RU",
  userLanguage: "ru_RU",
  toTranslateLanguages: ["en_US", "ru_RU", "es_AR"],
  internetSearchUrl: "https://duckduckgo.com/?q=",
  models: {},
  aiModelUsage: {
    voiceRecognition: "",
    fastTranslate: "",
    completion: "",
    intentionRecognition: "",
    correction: "",
    deepEdit: "",
    // deepTranslate: "",
    askAI: "",
  },
  aiContexts: {
    fastTranslate: "Переведи этот текст на",
    completion: "",
    toCalendar: "",
    assistant: "",
    correction: "Исправь этот текст и восстановь пунктуацию",
    askAiForText: "",
    askAiShort: "",
    deepEdit: [
      {
        description: "Редактирование текста",
        context:
          "убрать косноязычие , добавить местоимения где они нужны, исправление смысла и запутанности, убрать дублирование, подобрать уместные синонимы",
      },
    ],
    // deepTranslate: [],
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
    fastTranslate: string;
    completion: string;
    intentionRecognition: string;
    // correction of the text and restorastion after voice recognition
    correction: string;

    ////// Most smart models //////
    deepEdit: string;
    // translate for writers purposes
    // deepTranslate: string;
    askAI: string;
  };

  aiContexts: {
    fastTranslate: string;
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
    // deepTranslate: {
    //   description: string;
    //   context: string;
    // }[];
  };
}

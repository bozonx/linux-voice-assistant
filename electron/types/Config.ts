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

export interface Config {
  openrouterDefaultApiKey: string;
  openrouterDefaultBaseUrl: string;
  xdotoolBin: string;
  // Language of the UI
  appLanguage: string;
  // Language of the user for questioning AI and getting answers
  userLanguage: string;
  toTranslateLanguages: string[];
  searchITheInternetProvider: string;

  models: {
    // key is the id of the model
    [key: string]: {
      model: string;
      description?: string;
      baseUrl?: string;
      apiKey?: string;
      tags: ModelTag[];
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
    deepTranslate: string;
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
    askAiForText: string;

    deepEdit: [
      {
        description: string;
        context: string;
      }
    ];
    deepTranslate: [
      {
        description: string;
        context: string;
      }
    ];
  };
}

import OpenAI from "openai";
import { UserConfig } from "../electron/types/UserConfig";
import { AppConfig } from "../electron/types/types";

export class AI {
  private openai: OpenAI;
  private appConfig: AppConfig;
  private userConfig: UserConfig;

  constructor(appConfig: AppConfig, userConfig: UserConfig) {
    this.appConfig = appConfig;
    this.userConfig = userConfig;
  }

  async init() {
    this.openai = new OpenAI({
      // TODO: revew
      baseURL: this.userConfig.llmModels[0].baseUrl,
      apiKey: this.userConfig.llmModels[0].apiKey,
      defaultHeaders: {
        //"HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "Librnet assistant", // Optional. Site title for rankings on openrouter.ai.
      },
    });
  }

  async chatCompletion(
    modelId: string,
    instructions: string,
    userInput: string
  ) {
    const model = this.userConfig.llmModels.find(
      (model) => model.id === modelId
    );

    // TODO: если у модели есть apiKey, baseURL то его нужно передать в заголовке Authorization

    return this.openai.chat.completions.create({
      // model: "deepseek/deepseek-chat-v3-0324:free",
      model: model!.model,
      messages: [
        {
          role: "developer",
          content: instructions,
        },
        {
          role: "user",
          content: userInput,
        },
      ],
    });
  }

  // async responseCreate(model: string, instructions: string, input: string) {
  //   /*
  //       input: [
  //       {
  //           role: "developer",
  //           content: "Talk like a pirate."
  //       },
  //       {
  //           role: "user",
  //           content: "Are semicolons optional in JavaScript?",
  //       },
  //   ],
  //   */
  //   return this.openai.responses.create({
  //     model,
  //     instructions,
  //     input,
  //     // max_output_tokens: 100,
  //     // temperature: 0.2,
  //     // text: { "type": "json_schema" }
  //   });
  // }
}

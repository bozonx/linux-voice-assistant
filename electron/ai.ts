import OpenAI from "openai";
import { APP_CONFIG } from "./appConfig";
import { UserConfig } from "./types/UserConfig";
import client from "openai";

export class AI {
  private openai: OpenAI;
  private appConfig: typeof APP_CONFIG;
  private userConfig: UserConfig;

  constructor(appConfig: typeof APP_CONFIG, userConfig: UserConfig) {
    this.appConfig = appConfig;
    this.userConfig = userConfig;
  }

  async init() {
    this.openai = new OpenAI({
      baseURL: this.userConfig.openrouterDefaultBaseUrl,
      apiKey: this.userConfig.openrouterDefaultApiKey,
      defaultHeaders: {
        //"HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "Librnet assistant", // Optional. Site title for rankings on openrouter.ai.
      },
    });
  }

  async chatCompletion(model: string, content: string) {
    return this.openai.chat.completions.create({
      // model: "deepseek/deepseek-chat-v3-0324:free",
      model,
      messages: [
        {
          // TODO: what is the role?
          role: "user",
          content,
        },
      ],
    });
  }

  async responseCreate(model: string, instructions: string, input: string) {
    /*
        input: [
        {
            role: "developer",
            content: "Talk like a pirate."
        },
        {
            role: "user",
            content: "Are semicolons optional in JavaScript?",
        },
    ],
    */
    return this.openai.responses.create({
      model,
      instructions,
      input,
      // max_output_tokens: 100,
      // temperature: 0.2,
      // text: { "type": "json_schema" }
    });
  }
}

import OpenAI from "openai";
import { APP_CONFIG } from "./appConfig";
import { UserConfig } from "./types/UserConfig";

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

    // test

    await this.translate("ru", "Translate this text to Russian:\n\nUGI: Uncensored General Intelligence. A benchmark measuring both willingness to answer and accuracy in fact-based contentious questions. The test set is made of roughly 100 questions/tasks, covering topics that are commonly difficult to get LLMs to answer. The leaderboard's questions are kept private in order to avoid the common problem of not knowing if a model is intelligent or if it was just trained on the test questions.");
  }

  async translate(to: string, content: string) {
    const completion = await this.openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [
        {
          role: "user",
          content,
        },
      ],
    });

    console.log("translate", completion);
    console.log(completion.choices[0].message);
  }
}

import OpenAI from "openai";

export class AI {
  private openai: OpenAI;

  constructor() {}

  async init() {
    this.openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: "<OPENROUTER_API_KEY>",
      defaultHeaders: {
        //"HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "Librnet assistant", // Optional. Site title for rankings on openrouter.ai.
      },
    });
  }

  async translate(text: string, to: string, content: string) {
    const completion = await this.openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [
        {
          role: "user",
          content,
        },
      ],
    });

    console.log(completion.choices[0].message);
  }
}

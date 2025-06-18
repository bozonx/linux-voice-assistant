import type { UserConfig } from "../electron/types/UserConfig";

export const useAiRequest = () => {
  async function chatCompletion(
    userConfig: UserConfig,
    modelUsage: string,
    developerInstructions: string,
    task: string,
    userInput: string | string[]
  ): Promise<Record<string, any>> {
    console.log(
      "chatCompletion",
      userConfig,
      modelUsage,
      developerInstructions,
      task,
      userInput
    );
    
    const modelId = (userConfig.aiModelUsage as any)[modelUsage];
    const preparedInstructions = developerInstructions.replace(
      "{{LANGUAGE}}",
      userConfig.userLanguage
    );
    const model = userConfig.models[modelId];
    const baseUrl = model.baseUrl || userConfig.openrouterDefaultBaseUrl;
    const apiKey = model.apiKey || userConfig.openrouterDefaultApiKey;
    const result = await fetch(baseUrl + "/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        // "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "Librnet assistant", // Optional. Site title for rankings on openrouter.ai.
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model.model,
        messages: [
          {
            role: "developer",
            content: preparedInstructions,
          },
          {
            role: "user",
            content: task + ":\n\n" + userInput,
          },
        ],
      }),
    });

    if (result.ok) {
      const data = await result.json();

      console.log("result", data);

      return data.choices[0].message;
    }

    const body = await result.text();

    return {
      error: body,
      status: result.status,
      statusText: result.statusText,
    };
  }

  return {
    chatCompletion,
  };
};

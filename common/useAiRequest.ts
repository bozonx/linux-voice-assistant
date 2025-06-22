import { APP_CONFIG } from "../electron/appConfig";
import type { UserConfig } from "../electron/types/UserConfig";
import { ChatMessage } from "../electron/types/types";

export const useAiRequest = () => {
  function prepareAiMessages(
    userConfig: UserConfig,
    taskName: string,
    devInstructions: string,
    userInput: string | ChatMessage[],
    rules?: string
  ) {
    const resolvedRules = rules || userConfig.aiRules[taskName];
    const messages: ChatMessage[] = [];

    messages.push({
      role: "developer",
      content: devInstructions
        .replace("{{LANGUAGE}}", userConfig.userLanguage)
        .trim(),
    });

    if (resolvedRules) {
      messages.push({
        role: "user",
        content: APP_CONFIG.rulePrefix + ":\n\n" + resolvedRules.trim(),
      });
    }

    if (Array.isArray(userInput)) {
      messages.push(...userInput);
    } else {
      messages.push({
        role: "user",
        content: APP_CONFIG.aiTasks[taskName] + ":\n\n" + userInput.trim(),
      });
    }

    return messages;
  }

  async function chatCompletion(
    userConfig: UserConfig,
    taskName: string,
    messages: string | ChatMessage[]
  ): Promise<Record<string, any>> {
    console.log("chatCompletion", userConfig, taskName, messages);

    const modelId = (userConfig.aiModelUsage as any)[taskName];
    const model = userConfig.models.find((model) => model.id === modelId);

    if (!model) {
      throw new Error("Model not found");
    }

    const baseUrl = model.baseUrl || userConfig.openrouterDefaultBaseUrl;
    const apiKey = model.apiKey || userConfig.openrouterDefaultApiKey;
    const modelName = model.model;

    console.log(1, messages, 2, modelId, 3, modelName, 4, baseUrl, 5, apiKey);

    const result = await fetch(baseUrl + "/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        // "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "Librnet assistant", // Optional. Site title for rankings on openrouter.ai.
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: modelName,
        messages,
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
    prepareAiMessages,
  };
};

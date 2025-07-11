import { APP_CONFIG } from "../electron/appConfig";
import type { LlmModel, UserConfig } from "../electron/types/UserConfig";
import { ChatMessage } from "../electron/types/types";

export const useAiRequest = () => {
  function prepareAiMessages(
    userConfig: UserConfig,
    taskName: string,
    userInput: string | ChatMessage[],
    rules?: string,
    devInstructionsData?: Record<string, string>
  ) {
    const resolvedRules = rules || userConfig.aiRules[taskName];
    const messages: ChatMessage[] = [];
    let devInstructions = APP_CONFIG.aiInstructions[taskName];

    if (devInstructionsData) {
      Object.entries(devInstructionsData).forEach(([key, value]) => {
        devInstructions = devInstructions.replace("{{" + key + "}}", value);
      });
    }

    messages.push({
      role: "developer",
      content: devInstructions.trim(),
    });

    if (resolvedRules) {
      messages.push({
        role: "user",
        content: APP_CONFIG.rulePrefix + ":\n\n" + resolvedRules.trim(),
      });
    }

    if (Array.isArray(userInput)) {
      messages.push(
        ...userInput.map((item) => ({
          ...item,
          content: item.content.trim(),
        }))
      );
    } else {
      messages.push({
        role: "user",
        content: userInput.trim(),
      });
    }

    return messages;
  }

  async function chatCompletion(
    model: LlmModel,
    messages: string | ChatMessage[]
  ): Promise<Record<string, any>> {
    console.log("chatCompletion", model, messages);

    const result = await fetch(model.baseUrl + "/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + model.apiKey,
        // "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "Librnet assistant", // Optional. Site title for rankings on openrouter.ai.
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model.model,
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

import { APP_CONFIG } from "../electron/appConfig";
import type { LlmModel } from "../electron/types/UserConfig";
import { ChatMessage } from "../electron/types/types";

export const useAiRequest = () => {
  const prepareDevInstructions = (
    devInstructions: string,
    devInstructionsData?: Record<string, string>
  ) => {
    let result = devInstructions;

    if (devInstructionsData) {
      Object.entries(devInstructionsData).forEach(([key, value]) => {
        result = result.replace("{{" + key + "}}", value);
      });
    }

    return devInstructions;
  };

  function prepareAiMessages(
    rawMessages: string | ChatMessage[],
    rules?: string,
    devInstructions?: string
  ) {
    const messages: ChatMessage[] = [];

    if (devInstructions) {
      messages.push({
        role: "developer",
        content: devInstructions.trim(),
      });
    }

    if (rules) {
      messages.push({
        role: "user",
        content: APP_CONFIG.rulePrefix + ":\n\n" + rules.trim(),
      });
    }

    if (Array.isArray(rawMessages)) {
      messages.push(
        ...rawMessages.map((item) => ({
          ...item,
          content: item.content.trim(),
        }))
      );
    } else {
      messages.push({
        role: "user",
        content: rawMessages.trim(),
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
    prepareDevInstructions,
  };
};

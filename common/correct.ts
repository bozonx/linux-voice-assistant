import path from "path";
import fs from "fs/promises";
import { createOrReadConfig } from "../electron/userConfigManager";
import { getCommandLineArgs, typeIntoWindow } from "./helpers";
import { useAiRequest } from "./useAiRequest";
import { APP_CONFIG } from "../electron/appConfig";

(async () => {
  const args = getCommandLineArgs();
  const appDir = process.env.HOME + "/.config/librnet-assistant";
  const userConfig = await createOrReadConfig(appDir);
  const { chatCompletion, prepareAiMessages } = useAiRequest();

  if (!args.selectedText) {
    console.log("No selected text");
    return;
  } else if (args.selectedText.length < APP_CONFIG.minCorrectionLength) {
    console.log("Selected text is too short");
    return;
  }

  let result;

  const modelId = (userConfig.aiModelUsage as any)["correction"];
  const model = userConfig.llmModels.find((model) => model.id === modelId);
  const rule = userConfig.aiRules["correction"];
  const devInstructions = APP_CONFIG.aiInstructions["correction"];

  if (!model) {
    throw new Error("Model not found");
  }

  try {
    result = await chatCompletion(
      model,
      prepareAiMessages(args.selectedText, rule, devInstructions)
    );

    await fs.appendFile(
      path.join(appDir, "correctionCall.log"),
      new Date().toISOString() +
        " " +
        JSON.stringify({
          content: result.content,
          windowId: args.windowId,
          selectedText: args.selectedText,
        }) +
        "\n"
    );
  } catch (error) {
    await fs.appendFile(
      path.join(appDir, "correctionCall.log"),
      new Date().toISOString() +
        " " +
        JSON.stringify({
          error: error,
          windowId: args.windowId,
          selectedText: args.selectedText,
        }) +
        "\n"
    );
  }

  await typeIntoWindow(userConfig.xdotoolBin, result.content, args.windowId);
})();

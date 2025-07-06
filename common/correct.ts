import path from "path";
import fs from "fs/promises";
import { createOrReadConfig } from "../electron/userConfigManager";
import { getCommandLineArgs, typeIntoWindow } from "./helpers";
import { useAiRequest } from "./useAiRequest";

(async () => {
  const args = getCommandLineArgs();
  const appDir = process.env.HOME + "/.config/librnet-assistant";
  const userConfig = await createOrReadConfig(appDir);
  const { chatCompletion, prepareAiMessages } = useAiRequest();

  let result;

  try {
    result = await chatCompletion(
      userConfig,
      "correction",
      prepareAiMessages(userConfig, "correction", args.selectedText)
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

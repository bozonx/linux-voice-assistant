import path from "path";
import fs from "fs/promises";
import { createOrReadConfig } from "../electron/userConfigManager";
import { getCommandLineArgs, typeIntoWindow } from "./helpers";
import { useAiRequest } from "./useAiRequest";
import { AI_TASKS } from "../vue/src/types";

(async () => {
  const args = getCommandLineArgs();
  const appDir = process.env.HOME + "/.config/librnet-assistant";
  const userConfig = await createOrReadConfig(appDir);
  const { chatCompletion, prepareAiMessages } = useAiRequest();

  const result = await chatCompletion(
    userConfig,
    AI_TASKS.CORRECTION,
    prepareAiMessages(userConfig, AI_TASKS.CORRECTION, args.selectedText)
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

  await typeIntoWindow(userConfig.xdotoolBin, result.content, args.windowId);
})();

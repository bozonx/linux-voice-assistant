import { createOrReadConfig } from "../electron/userConfigManager";
import { getCommandLineArgs, typeIntoWindow } from "./helpers";
import { useAiRequest } from "./useAiRequest";
import { APP_CONFIG } from "../electron/appConfig";

(async () => {
  const args = getCommandLineArgs();
  const userConfig = await createOrReadConfig(
    process.env.HOME + "/.config/librnet-assistant"
  );
  const { chatCompletion } = useAiRequest();

  const result = await chatCompletion(
    userConfig,
    "correction",
    APP_CONFIG.aiInstructions.clearResult,
    userConfig.aiTasks.correction,
    args.selectedText
  );

  console.log(result);

  await typeIntoWindow(userConfig.xdotoolBin, result.result, args.windowId);
})();

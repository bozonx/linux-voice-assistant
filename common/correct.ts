import { createOrReadConfig } from "../electron/userConfigManager";
import { getCommandLineArgs, typeIntoWindow } from "./helpers";
import { CONFIG_FILE_NAME } from "../electron/types/UserConfig";
import { useAiRequest } from "./useAiRequest";

(async () => {
  const args = getCommandLineArgs();
  const userConfig = await createOrReadConfig(
    "~/.config/librnet-assistant/" + CONFIG_FILE_NAME
  );
  const { chatCompletion } = useAiRequest();

  const result = await chatCompletion(
    userConfig,
    "correction",
    appConfig.aiInstructions.clearResult,
    userConfig.aiTasks.correction,
    args.selectedText
  );

  console.log(result);

  await typeIntoWindow(result.result, args.windowId);
})();

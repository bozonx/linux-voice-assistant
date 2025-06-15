import fs from "fs/promises";
import path from "path";
import yaml from "yaml";
import {
  CONFIG_PATHS,
  DEFAULT_USER_CONFIG,
  UserConfig,
} from "./types/UserConfig.js";

export async function createOrReadConfig(): Promise<UserConfig> {
  console.log("initConfig", process.platform);

  const configPath = CONFIG_PATHS[process.platform];

  if (!(await fs.stat(configPath))) {
    await fs.mkdir(path.dirname(configPath), { recursive: true });
    await fs.writeFile(configPath, yaml.stringify(DEFAULT_USER_CONFIG));

    return DEFAULT_USER_CONFIG;
  }

  const fileContent = await fs.readFile(configPath, "utf8");
  const config = yaml.parse(fileContent) as UserConfig;

  return config;
}

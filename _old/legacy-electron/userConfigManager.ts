import fs from "fs/promises";
import path from "path";
import yaml from "yaml";
import {
  CONFIG_FILE_NAME,
  DEFAULT_USER_CONFIG,
  UserConfig,
} from "./types/UserConfig.js";

let APP_DIR: string;

export async function createOrReadConfig(appDir: string): Promise<UserConfig> {
  APP_DIR = appDir;
  const configPath = path.join(appDir, CONFIG_FILE_NAME);

  try {
    await fs.access(configPath, fs.constants.F_OK | fs.constants.R_OK);
    // Если файл существует и доступен для чтения, читаем его
    const fileContent = await fs.readFile(configPath, "utf8");
    const config = yaml.parse(fileContent) as UserConfig;
    return config;
  } catch (error) {
    // Если файл не существует или нет прав доступа
    console.log("Config not found or not accessible, creating default config");

    try {
      // Создаем директорию если её нет
      await fs.mkdir(path.dirname(configPath), { recursive: true });
      // Создаем файл с дефолтными настройками
      await fs.writeFile(configPath, yaml.stringify(DEFAULT_USER_CONFIG));
      return DEFAULT_USER_CONFIG;
    } catch (writeError) {
      console.error("Failed to create config file:", writeError);
      throw new Error(
        "Could not create config file. Please check permissions."
      );
    }
  }
}

export async function saveUserConfig(userConfig: UserConfig): Promise<void> {
  const configPath = path.join(APP_DIR, CONFIG_FILE_NAME);
  await fs.writeFile(configPath, yaml.stringify(userConfig));
}
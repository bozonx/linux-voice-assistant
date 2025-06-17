import fs from "fs/promises";
import path from "path";
import yaml from "yaml";
import {
  CONFIG_FILE_NAME,
  DEFAULT_USER_CONFIG,
  UserConfig,
} from "./types/UserConfig.js";

export async function createOrReadConfig(
  pathToConfig: string
): Promise<UserConfig> {
  // Формируем путь к файлу конфигурации в пользовательской директории
  const configPath = path.join(pathToConfig, CONFIG_FILE_NAME);

  try {
    // Проверяем существование файла и права доступа
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

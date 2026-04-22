use std::fs;
use std::path::PathBuf;

use serde::de::DeserializeOwned;
use serde::Serialize;
use serde_json::Value;
use tauri::{AppHandle, Manager};

use crate::errors::AppError;
use crate::models::{default_user_config, ChatHistoryItem, CONFIG_FILE_NAME};

fn app_config_dir(app: &AppHandle) -> Result<PathBuf, AppError> {
    let dir = app
        .path()
        .app_config_dir()
        .map_err(|error| AppError::Message(error.to_string()))?;

    fs::create_dir_all(&dir)?;

    Ok(dir)
}

fn app_data_dir(app: &AppHandle) -> Result<PathBuf, AppError> {
    let dir = app
        .path()
        .app_data_dir()
        .map_err(|error| AppError::Message(error.to_string()))?;

    fs::create_dir_all(&dir)?;

    Ok(dir)
}

fn read_json<T: DeserializeOwned>(path: &PathBuf, fallback: T) -> Result<T, AppError> {
    if !path.exists() {
        return Ok(fallback);
    }

    let raw = fs::read_to_string(path)?;
    let parsed = serde_json::from_str(&raw)?;

    Ok(parsed)
}

fn write_json<T: Serialize>(path: &PathBuf, value: &T) -> Result<(), AppError> {
    let raw = serde_json::to_string_pretty(value)?;
    fs::write(path, raw)?;
    Ok(())
}

pub fn read_or_create_user_config(app: &AppHandle) -> Result<Value, AppError> {
    let path = app_config_dir(app)?.join(CONFIG_FILE_NAME);

    if path.exists() {
        let raw = fs::read_to_string(&path)?;
        let value = serde_yaml::from_str(&raw)?;
        return Ok(value);
    }

    let default_config = default_user_config();
    save_user_config(app, &default_config)?;

    Ok(default_config)
}

pub fn save_user_config(app: &AppHandle, user_config: &Value) -> Result<(), AppError> {
    let path = app_config_dir(app)?.join(CONFIG_FILE_NAME);
    let raw = serde_yaml::to_string(user_config)?;
    fs::write(path, raw)?;
    Ok(())
}

pub fn get_editor_history(app: &AppHandle) -> Result<Vec<String>, AppError> {
    read_json(
        &app_data_dir(app)?.join("editor-history.json"),
        Vec::<String>::new(),
    )
}

pub fn save_editor_history(app: &AppHandle, value: String) -> Result<(), AppError> {
    let mut history = get_editor_history(app)?;
    history.retain(|item| item != &value);
    history.insert(0, value);
    write_json(&app_data_dir(app)?.join("editor-history.json"), &history)
}

pub fn remove_from_editor_history(app: &AppHandle, value: String) -> Result<(), AppError> {
    let mut history = get_editor_history(app)?;
    history.retain(|item| item != &value);
    write_json(&app_data_dir(app)?.join("editor-history.json"), &history)
}

pub fn clear_editor_history(app: &AppHandle) -> Result<(), AppError> {
    write_json(
        &app_data_dir(app)?.join("editor-history.json"),
        &Vec::<String>::new(),
    )
}

pub fn get_transform_history(app: &AppHandle) -> Result<Vec<String>, AppError> {
    read_json(
        &app_data_dir(app)?.join("transform-history.json"),
        Vec::<String>::new(),
    )
}

pub fn save_transform_history(app: &AppHandle, value: String) -> Result<(), AppError> {
    let mut history = get_transform_history(app)?;
    history.retain(|item| item != &value);
    history.insert(0, value);
    write_json(&app_data_dir(app)?.join("transform-history.json"), &history)
}

pub fn remove_from_transform_history(app: &AppHandle, value: String) -> Result<(), AppError> {
    let mut history = get_transform_history(app)?;
    history.retain(|item| item != &value);
    write_json(&app_data_dir(app)?.join("transform-history.json"), &history)
}

pub fn clear_transform_history(app: &AppHandle) -> Result<(), AppError> {
    write_json(
        &app_data_dir(app)?.join("transform-history.json"),
        &Vec::<String>::new(),
    )
}

pub fn get_chat_history(app: &AppHandle) -> Result<Vec<ChatHistoryItem>, AppError> {
    read_json(
        &app_data_dir(app)?.join("chat-history.json"),
        Vec::<ChatHistoryItem>::new(),
    )
}

pub fn save_chat_history(
    app: &AppHandle,
    chat_history_item: ChatHistoryItem,
) -> Result<(), AppError> {
    let mut history = get_chat_history(app)?;

    if let Some(existing) = history
        .iter_mut()
        .find(|item| item.id == chat_history_item.id)
    {
        existing.messages.extend(chat_history_item.messages);
        existing.last_msg_date = chat_history_item.last_msg_date;
        existing.description = chat_history_item.description;
    } else {
        history.insert(0, chat_history_item);
    }

    write_json(&app_data_dir(app)?.join("chat-history.json"), &history)
}

pub fn remove_from_chat_history(app: &AppHandle, id: String) -> Result<(), AppError> {
    let mut history = get_chat_history(app)?;
    history.retain(|item| item.id != id);
    write_json(&app_data_dir(app)?.join("chat-history.json"), &history)
}

pub fn clear_chat_history(app: &AppHandle) -> Result<(), AppError> {
    write_json(
        &app_data_dir(app)?.join("chat-history.json"),
        &Vec::<ChatHistoryItem>::new(),
    )
}

pub fn save_main_input_tmp(app: &AppHandle, value: String) -> Result<(), AppError> {
    write_json(
        &app_data_dir(app)?.join("main-input-tmp.json"),
        &serde_json::json!({
            "value": value,
            "lastSaved": chrono_like_now(),
        }),
    )
}

pub fn clear_main_input_tmp(app: &AppHandle) -> Result<(), AppError> {
    write_json(
        &app_data_dir(app)?.join("main-input-tmp.json"),
        &serde_json::json!({
            "value": "",
            "lastSaved": "",
        }),
    )
}

fn chrono_like_now() -> String {
    use std::time::{SystemTime, UNIX_EPOCH};

    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();

    now.to_string()
}

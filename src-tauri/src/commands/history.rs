use tauri::AppHandle;

use crate::errors::AppError;
use crate::models::ChatHistoryItem;
use crate::services::storage;

#[tauri::command]
pub fn get_editor_history(app: AppHandle) -> Result<Vec<String>, AppError> {
    storage::get_editor_history(&app)
}

#[tauri::command]
pub fn get_transform_history(app: AppHandle) -> Result<Vec<String>, AppError> {
    storage::get_transform_history(&app)
}

#[tauri::command]
pub fn get_chat_history(app: AppHandle) -> Result<Vec<ChatHistoryItem>, AppError> {
    storage::get_chat_history(&app)
}

#[tauri::command]
pub fn save_main_input_tmp(app: AppHandle, value: String) -> Result<(), AppError> {
    storage::save_main_input_tmp(&app, value)
}

#[tauri::command]
pub fn clear_main_input_tmp(app: AppHandle) -> Result<(), AppError> {
    storage::clear_main_input_tmp(&app)
}

#[tauri::command]
pub fn save_editor_history(app: AppHandle, value: String) -> Result<(), AppError> {
    storage::save_editor_history(&app, value)
}

#[tauri::command]
pub fn save_transform_history(app: AppHandle, value: String) -> Result<(), AppError> {
    storage::save_transform_history(&app, value)
}

#[tauri::command]
pub fn save_chat_history(
    app: AppHandle,
    chat_history_item: ChatHistoryItem,
) -> Result<(), AppError> {
    storage::save_chat_history(&app, chat_history_item)
}

#[tauri::command]
pub fn remove_from_editor_history(app: AppHandle, value: String) -> Result<(), AppError> {
    storage::remove_from_editor_history(&app, value)
}

#[tauri::command]
pub fn remove_from_transform_history(app: AppHandle, value: String) -> Result<(), AppError> {
    storage::remove_from_transform_history(&app, value)
}

#[tauri::command]
pub fn remove_from_chat_history(app: AppHandle, id: String) -> Result<(), AppError> {
    storage::remove_from_chat_history(&app, id)
}

#[tauri::command]
pub fn clear_editor_history(app: AppHandle) -> Result<(), AppError> {
    storage::clear_editor_history(&app)
}

#[tauri::command]
pub fn clear_transform_history(app: AppHandle) -> Result<(), AppError> {
    storage::clear_transform_history(&app)
}

#[tauri::command]
pub fn clear_chat_history(app: AppHandle) -> Result<(), AppError> {
    storage::clear_chat_history(&app)
}

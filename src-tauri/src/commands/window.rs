use tauri::{AppHandle, State};

use crate::errors::AppError;
use crate::services::runtime;
use crate::state::AppState;

#[tauri::command]
pub fn close_window(app: AppHandle, state: State<'_, AppState>) -> Result<(), AppError> {
    runtime::hide_main_window(&app, &state)
}

#[tauri::command]
pub fn type_into_window_and_close(_text: String) -> Result<(), AppError> {
    Err(AppError::Message(String::from(
        "Typing into external windows is not migrated yet",
    )))
}

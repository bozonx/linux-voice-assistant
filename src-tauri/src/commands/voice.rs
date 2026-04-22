use tauri::{AppHandle, State};

use crate::errors::AppError;
use crate::services::voice;
use crate::state::AppState;

#[tauri::command]
pub async fn start_voice_recognition(
    app: AppHandle,
    state: State<'_, AppState>,
) -> Result<(), AppError> {
    let params = state.params();
    let ws_url = voice::resolve_ws_url(&params);

    voice::start(app, &state, ws_url).await
}

#[tauri::command]
pub async fn stop_voice_recognition(state: State<'_, AppState>) -> Result<(), AppError> {
    voice::stop(&state).await
}

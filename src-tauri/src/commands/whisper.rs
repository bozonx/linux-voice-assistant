use std::fs;
use std::io::Write;
use tauri::AppHandle;

use crate::errors::AppError;
use crate::services::storage::app_cache_dir;

#[tauri::command]
pub fn is_whisper_model_downloaded(app: AppHandle, model_name: String) -> Result<bool, AppError> {
    let models_dir = app_cache_dir(&app)?
        .join("models")
        .join("whisper")
        .join(&model_name.replace("/", "_"));

    // In our simplified check, we just check if the directory exists and is not empty.
    // The frontend will still do the precise file check if needed.
    // Actually, checking if decoder_model_merged_quantized.onnx exists is a good heuristic.
    let check_file = models_dir
        .join("onnx")
        .join("decoder_model_merged_quantized.onnx");
    Ok(check_file.exists())
}

#[tauri::command]
pub fn save_whisper_model_file(
    app: AppHandle,
    model_name: String,
    file_name: String,
    data: Vec<u8>,
) -> Result<(), AppError> {
    let file_path = app_cache_dir(&app)?
        .join("models")
        .join("whisper")
        .join(&model_name.replace("/", "_"))
        .join(&file_name);

    if let Some(parent) = file_path.parent() {
        fs::create_dir_all(parent)?;
    }

    let mut file = fs::File::create(&file_path)?;
    file.write_all(&data)?;

    Ok(())
}

#[tauri::command]
pub fn delete_whisper_model(app: AppHandle, model_name: String) -> Result<(), AppError> {
    let model_dir = app_cache_dir(&app)?
        .join("models")
        .join("whisper")
        .join(&model_name.replace("/", "_"));

    if model_dir.exists() {
        fs::remove_dir_all(model_dir)?;
    }

    Ok(())
}

#[tauri::command]
pub fn get_whisper_model_path(
    app: AppHandle,
    model_name: String,
    file_name: String,
) -> Result<String, AppError> {
    let file_path = app_cache_dir(&app)?
        .join("models")
        .join("whisper")
        .join(&model_name.replace("/", "_"))
        .join(&file_name);

    Ok(file_path.to_string_lossy().to_string())
}

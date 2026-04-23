use std::io::Write;
use std::process::{Command, Stdio};
use std::thread;
use std::time::Duration;

use serde_json::Value;
use tauri::{AppHandle, State};

use crate::errors::AppError;
use crate::services::runtime;
use crate::state::AppState;

#[tauri::command]
pub fn close_window(app: AppHandle, state: State<'_, AppState>) -> Result<(), AppError> {
    runtime::hide_main_window(&app, &state)
}

#[tauri::command]
pub fn open_in_browser_and_close(
    app: AppHandle,
    state: State<'_, AppState>,
    url: String,
) -> Result<(), AppError> {
    run_command("xdg-open", &[&url])?;
    runtime::hide_main_window(&app, &state)
}

#[tauri::command]
pub fn type_into_window_and_close(
    app: AppHandle,
    state: State<'_, AppState>,
    text: String,
) -> Result<(), AppError> {
    let params = state.params();
    let window_insertion = params.user_config.get("windowInsertion");
    let insertion_method = window_insertion
        .and_then(|config| config.get("method"))
        .and_then(Value::as_str)
        .unwrap_or("xdotool");

    copy_to_clipboard(&text)?;

    if insertion_method == "ydotool" {
        let ydotool_bin = window_insertion
            .and_then(|config| config.get("ydotoolBin"))
            .and_then(Value::as_str)
            .unwrap_or("/usr/bin/ydotool");

        runtime::hide_main_window(&app, &state)?;
        thread::sleep(Duration::from_millis(300));
        run_command(ydotool_bin, &["key", "29:1", "47:1", "47:0", "29:0"])?;

        return Ok(());
    }

    let window_id = params.window_id.ok_or_else(|| {
        AppError::Message(String::from(
            "Target window is not available for text insertion",
        ))
    })?;
    let xdotool_bin = window_insertion
        .and_then(|config| config.get("xdotoolBin"))
        .and_then(Value::as_str)
        .or_else(|| params.user_config.get("xdotoolBin").and_then(Value::as_str))
        .unwrap_or("/usr/bin/xdotool");

    run_command(xdotool_bin, &["windowactivate", &window_id])?;
    thread::sleep(Duration::from_millis(300));
    run_command(xdotool_bin, &["key", "ctrl+v"])?;

    runtime::hide_main_window(&app, &state)
}

#[tauri::command]
pub fn put_into_clipboard_and_close(
    app: AppHandle,
    state: State<'_, AppState>,
    text: String,
) -> Result<(), AppError> {
    copy_to_clipboard(&text)?;
    runtime::hide_main_window(&app, &state)
}

fn copy_to_clipboard(text: &str) -> Result<(), AppError> {
    let mut child = Command::new("xsel")
        .args(["--clipboard", "--input", "--trim"])
        .stdin(Stdio::piped())
        .spawn()?;

    let mut stdin = child
        .stdin
        .take()
        .ok_or_else(|| AppError::Message(String::from("Failed to open xsel stdin")))?;
    stdin.write_all(text.as_bytes())?;
    drop(stdin);

    let status = child.wait()?;
    if !status.success() {
        return Err(AppError::Message(String::from(
            "xsel failed to write text to the clipboard",
        )));
    }

    Ok(())
}

fn run_command(binary: &str, args: &[&str]) -> Result<(), AppError> {
    let status = Command::new(binary).args(args).status()?;

    if !status.success() {
        return Err(AppError::Message(format!(
            "Command `{binary}` failed with status {status}",
        )));
    }

    Ok(())
}

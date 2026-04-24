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
    open_url(&url)?;
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
    if cfg!(target_os = "macos") {
        return write_to_clipboard_command("pbcopy", &[], text);
    }

    if cfg!(target_os = "windows") {
        return write_to_clipboard_command(
            "powershell",
            &["-NoProfile", "-Command", "Set-Clipboard"],
            text,
        );
    }

    copy_to_clipboard_linux(text)
}

fn copy_to_clipboard_linux(text: &str) -> Result<(), AppError> {
    let clipboard_commands: [(&str, &[&str]); 3] = [
        ("wl-copy", &["--type", "text/plain"]),
        ("xclip", &["-selection", "clipboard"]),
        ("xsel", &["--clipboard", "--input", "--trim"]),
    ];

    let mut last_error: Option<AppError> = None;

    for (binary, args) in clipboard_commands {
        match write_to_clipboard_command(binary, args, text) {
            Ok(()) => return Ok(()),
            Err(AppError::Io(error)) if error.kind() == std::io::ErrorKind::NotFound => continue,
            Err(error) => last_error = Some(error),
        }
    }

    if let Some(error) = last_error {
        return Err(error);
    }

    Err(AppError::Message(String::from(
        "No clipboard utility found. Install wl-clipboard, xclip, or xsel.",
    )))
}

fn write_to_clipboard_command(binary: &str, args: &[&str], text: &str) -> Result<(), AppError> {
    let mut child = Command::new(binary).args(args).stdin(Stdio::piped()).spawn()?;

    let mut stdin = child.stdin.take().ok_or_else(|| {
        AppError::Message(format!("Failed to open stdin for clipboard command `{binary}`"))
    })?;
    stdin.write_all(text.as_bytes())?;
    drop(stdin);

    let status = child.wait()?;
    if !status.success() {
        return Err(AppError::Message(format!(
            "Clipboard command `{binary}` failed with status {status}",
        )));
    }

    Ok(())
}

fn open_url(url: &str) -> Result<(), AppError> {
    if cfg!(target_os = "macos") {
        return run_command("open", &[url]);
    }

    if cfg!(target_os = "windows") {
        return run_command("cmd", &["/C", "start", "", url]);
    }

    run_command("xdg-open", &[url])
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

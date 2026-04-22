use tauri::menu::{MenuBuilder, MenuItemBuilder};
use tauri::tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent};
use tauri::{App, AppHandle, Emitter, Manager, WindowEvent};

use crate::errors::AppError;
use crate::state::AppState;

pub const MAIN_WINDOW_LABEL: &str = "main";
pub const PARAMS_CHANGED_EVENT: &str = "app://params-changed";
pub const VOICE_TEXT_EVENT: &str = "app://voice-text";
const TRAY_SHOW_ID: &str = "show";
const TRAY_QUIT_ID: &str = "quit";

pub fn emit_params(app: &AppHandle, state: &AppState) -> Result<(), AppError> {
    let params = state.params();

    if let Some(window) = app.get_webview_window(MAIN_WINDOW_LABEL) {
        window
            .emit(PARAMS_CHANGED_EVENT, params)
            .map_err(|error| AppError::Message(error.to_string()))?;
    }

    Ok(())
}

pub fn emit_voice_text(app: &AppHandle, text: String) -> Result<(), AppError> {
    if let Some(window) = app.get_webview_window(MAIN_WINDOW_LABEL) {
        window
            .emit(VOICE_TEXT_EVENT, text)
            .map_err(|error| AppError::Message(error.to_string()))?;
    }

    Ok(())
}

pub fn show_main_window(
    app: &AppHandle,
    state: &AppState,
    mode: Option<&str>,
) -> Result<(), AppError> {
    let window = app
        .get_webview_window(MAIN_WINDOW_LABEL)
        .ok_or_else(|| AppError::Message(String::from("Main window not found")))?;

    state.update_params(|params| {
        if let Some(mode) = mode {
            params.mode = Some(mode.to_string());
        }
        params.is_window_shown = true;
    });

    window
        .show()
        .map_err(|error| AppError::Message(error.to_string()))?;
    let _ = window.set_focus();
    emit_params(app, state)
}

pub fn hide_main_window(app: &AppHandle, state: &AppState) -> Result<(), AppError> {
    let window = app
        .get_webview_window(MAIN_WINDOW_LABEL)
        .ok_or_else(|| AppError::Message(String::from("Main window not found")))?;

    state.update_params(|params| {
        params.is_window_shown = false;
    });

    window
        .hide()
        .map_err(|error| AppError::Message(error.to_string()))?;
    emit_params(app, state)
}

pub fn setup(app: &mut App) -> Result<(), AppError> {
    setup_tray(app)?;
    Ok(())
}

fn setup_tray(app: &mut App) -> Result<(), AppError> {
    let show_item = MenuItemBuilder::with_id(TRAY_SHOW_ID, "Показать приложение").build(app)?;
    let quit_item = MenuItemBuilder::with_id(TRAY_QUIT_ID, "Выход").build(app)?;
    let menu = MenuBuilder::new(app)
        .items(&[&show_item, &quit_item])
        .build()?;

    let app_handle = app.handle().clone();
    let tray_icon = app.default_window_icon().cloned();

    let mut builder = TrayIconBuilder::with_id("main-tray");

    if let Some(icon) = tray_icon {
        builder = builder.icon(icon);
    }

    builder
        .menu(&menu)
        .tooltip("Librnet Assistant")
        .on_menu_event(move |app, event| {
            if let Some(state) = app.try_state::<AppState>() {
                match event.id.as_ref() {
                    TRAY_SHOW_ID => {
                        let _ = show_main_window(app, &state, Some("editor"));
                    }
                    TRAY_QUIT_ID => {
                        state.set_quitting(true);
                        app.exit(0);
                    }
                    _ => {}
                }
            }
        })
        .on_tray_icon_event(move |tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                let app = tray.app_handle();
                if let Some(state) = app.try_state::<AppState>() {
                    let params = state.params();
                    let result = if params.is_window_shown {
                        hide_main_window(app, &state)
                    } else {
                        show_main_window(app, &state, Some("editor"))
                    };

                    let _ = result;
                }
            }
        })
        .build(app)
        .map_err(|error| AppError::Message(error.to_string()))?;

    let _ = app_handle;

    Ok(())
}

pub fn handle_window_event(app: &AppHandle, event: &WindowEvent) {
    if let Some(state) = app.try_state::<AppState>() {
        match event {
            WindowEvent::CloseRequested { api, .. } => {
                if !state.is_quitting() {
                    api.prevent_close();
                    let _ = hide_main_window(app, &state);
                }
            }
            WindowEvent::Focused(false) => {}
            _ => {}
        }
    }
}

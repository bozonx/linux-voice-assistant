mod commands;
mod errors;
mod models;
mod services;
mod state;

use commands::app::{get_init_params, save_user_config};
use commands::history::{
    clear_chat_history, clear_editor_history, clear_main_input_tmp, clear_transform_history,
    get_chat_history, get_editor_history, get_transform_history, remove_from_chat_history,
    remove_from_editor_history, remove_from_transform_history, save_chat_history,
    save_editor_history, save_main_input_tmp, save_transform_history,
};
use commands::voice::{
    start_local_voice_recording, start_voice_recognition, stop_local_voice_recording,
    stop_voice_recognition,
};
use commands::window::{
    close_window, open_in_browser_and_close, put_into_clipboard_and_close,
    type_into_window_and_close,
};
use models::default_init_params;
use services::{dbus, runtime, storage};
use state::AppState;
use tauri::Manager;
use tauri_plugin_single_instance::init as single_instance;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(single_instance(|app, _args, _cwd| {
            if let Some(state) = app.try_state::<AppState>() {
                let _ = runtime::show_main_window(app, &state, None);
            }
        }))
        .setup(|app| {
            let user_config = storage::read_or_create_user_config(app.handle())?;
            app.manage(AppState::new(default_init_params(user_config)));
            runtime::setup(app)?;
            dbus::spawn_dbus_server(app.handle().clone());
            Ok(())
        })
        .on_window_event(|window, event| {
            runtime::handle_window_event(&window.app_handle(), event);
        })
        .invoke_handler(tauri::generate_handler![
            get_init_params,
            save_user_config,
            close_window,
            get_editor_history,
            get_transform_history,
            get_chat_history,
            save_main_input_tmp,
            clear_main_input_tmp,
            save_editor_history,
            save_transform_history,
            save_chat_history,
            remove_from_editor_history,
            remove_from_transform_history,
            remove_from_chat_history,
            clear_editor_history,
            clear_transform_history,
            clear_chat_history,
            start_voice_recognition,
            stop_voice_recognition,
            start_local_voice_recording,
            stop_local_voice_recording,
            open_in_browser_and_close,
            type_into_window_and_close,
            put_into_clipboard_and_close
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn main() {
    run();
}

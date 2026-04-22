use std::thread;
use std::time::Duration;

use tauri::{AppHandle, Manager};
use zbus::interface;

use crate::services::runtime;
use crate::state::AppState;

const MESSAGE_PATH: &str = "/org/librass/Object";
const MESSAGE_INTERFACE: &str = "org.librass.Interface";
const MESSAGE_DEST: &str = "org.librass.Service";

pub fn spawn_dbus_server(app: AppHandle) {
    thread::spawn(move || {
        let runtime = tauri::async_runtime::handle().clone();
        let connection = runtime.block_on(async {
            let interface = LibrassDbus { app: app.clone() };

            zbus::ConnectionBuilder::session()
                .expect("Failed to open DBus session")
                .name(MESSAGE_DEST)
                .expect("Failed to acquire DBus name")
                .serve_at(MESSAGE_PATH, interface)
                .expect("Failed to register DBus object")
                .build()
                .await
                .expect("Failed to build DBus connection")
        });

        let _connection = connection;

        loop {
            thread::sleep(Duration::from_secs(60));
        }
    });
}

struct LibrassDbus {
    app: AppHandle,
}

#[interface(name = "org.librass.Interface")]
impl LibrassDbus {
    async fn switch_mode(&self, message: &str) -> zbus::fdo::Result<()> {
        let mut parts = message.splitn(3, '|');
        let mode = parts.next().unwrap_or("editor");
        let window_id = parts.next().filter(|value| !value.is_empty());
        let selected_text = parts.next().filter(|value| !value.is_empty());

        if let Some(state) = self.app.try_state::<AppState>() {
            state.update_params(|params| {
                params.mode = Some(mode.to_string());
                params.window_id = window_id.map(str::to_string);
                params.selected_text = selected_text.map(str::to_string);
                params.is_window_shown = true;
            });

            let _ = runtime::show_main_window(&self.app, &state, Some(mode));
        }

        if let Some(window) = self.app.get_webview_window(runtime::MAIN_WINDOW_LABEL) {
            let _ = window.show();
            let _ = window.set_focus();
        }

        Ok(())
    }

    #[zbus(name = "Ping")]
    async fn ping(&self) -> zbus::fdo::Result<&str> {
        Ok(MESSAGE_INTERFACE)
    }
}

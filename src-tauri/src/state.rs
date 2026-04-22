use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Mutex;

use tokio::sync::watch;

use crate::models::InitParams;

pub struct VoiceSession {
    pub shutdown_tx: watch::Sender<bool>,
    pub thread: std::thread::JoinHandle<()>,
}

pub struct AppState {
    params: Mutex<InitParams>,
    quitting: AtomicBool,
    voice_session: Mutex<Option<VoiceSession>>,
}

impl AppState {
    pub fn new(params: InitParams) -> Self {
        Self {
            params: Mutex::new(params),
            quitting: AtomicBool::new(false),
            voice_session: Mutex::new(None),
        }
    }

    pub fn params(&self) -> InitParams {
        self.params.lock().expect("params lock poisoned").clone()
    }

    pub fn update_params<F>(&self, update: F) -> InitParams
    where
        F: FnOnce(&mut InitParams),
    {
        let mut params = self.params.lock().expect("params lock poisoned");
        update(&mut params);
        params.clone()
    }

    pub fn set_quitting(&self, quitting: bool) {
        self.quitting.store(quitting, Ordering::SeqCst);
    }

    pub fn is_quitting(&self) -> bool {
        self.quitting.load(Ordering::SeqCst)
    }

    pub fn replace_voice_session(&self, session: Option<VoiceSession>) -> Option<VoiceSession> {
        let mut guard = self
            .voice_session
            .lock()
            .expect("voice session lock poisoned");
        std::mem::replace(&mut *guard, session)
    }
}

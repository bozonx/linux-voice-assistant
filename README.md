# Librnet Assistant

Assistant for Linux for writers and programmers.

The project is being migrated to a Tauri-first architecture.

## Structure

- `apps/desktop-ui` - Vue application
- `packages/shared` - shared config, domain types, desktop contracts
- `src-tauri` - Rust backend and Tauri shell
- `_old` - legacy Electron/Node implementation kept for reference

## Current Migration Stage

Already moved to the new structure:

- frontend workspace moved from `vue/` to `apps/desktop-ui/`
- shared constants and types moved to `packages/shared/`
- desktop bridge rewritten around a Tauri-style command/event contract
- config/history persistence scaffolded in `src-tauri/`
- old Electron runtime moved to `_old/legacy-electron/`
- old shell helpers moved to `_old/legacy-run-ui.sh` and `_old/legacy-correct.sh`

Deferred for later stages:

- voice recognition
- D-Bus integration
- tray integration
- typing into external windows

## Setup

Install dependencies:

```bash
pnpm install
```

Run the frontend:

```bash
pnpm dev
```

Build the frontend:

```bash
pnpm build
```

Run the frontend type-check:

```bash
pnpm type-check
```

## Tauri

The desktop shell now lives in `src-tauri/`.

Target workflow after the remaining native integrations are migrated:

```bash
pnpm tauri dev
pnpm tauri build
```

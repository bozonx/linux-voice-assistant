# Librnet Assistant

Assistant for Linux for writers and programmers. Built with Electron and Vue.

## Key Bindings

Set these bindings in your OS settings:

- **Win + q** - `run-ui.sh select` (Action on selected text)
- **Win + w** - `run-ui.sh voice` (Voice input)
- **Win + e** - `run-ui.sh edit` (Open editor)

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Run in Development Mode:

You need two terminals:

**Terminal 1 (UI):**
```bash
cd vue
pnpm dev
```

**Terminal 2 (Electron):**
```bash
pnpm dev
```

3. Build the application:
```bash
pnpm build:electron
```

## External Dependencies

- `xdotool`
- `xclip`
- `pyenv`
- `docker` (for Vosk)

### ArgosTranslate (Optional for Translation)

Recommended installation path: `~/.local/opt/argostranslate`

```bash
mkdir -p ~/.local/opt/argostranslate
cd ~/.local/opt/argostranslate

pyenv install 3.11.9
pyenv local 3.11.9
python -m venv argos_env
source argos_env/bin/activate
pip install argostranslate

# Update and install languages
argospm update
argospm install translate-en_ru
argospm install translate-ru_en
argospm install translate-es_en
argospm install translate-en_es

# Test translation
~/.local/opt/argostranslate/argos_env/bin/argos-translate --from en --to ru "Hello World"
```

### Vosk (Speech Recognition)

Run Vosk server using Docker:

```bash
docker run --name vosk-ru -p 2700:2700 alphacep/kaldi-ru:latest
```

## Scripts

- `pnpm dev` - Run Electron in development mode (requires Vue dev server on port 3000)
- `pnpm prod` - Run Electron in production mode (loads built Vue files)
- `pnpm build` - Compile TypeScript for Electron
- `pnpm build:vue` - Build Vue frontend
- `pnpm build:electron` - Create production build/installer

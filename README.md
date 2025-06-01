# Linux Voice Assistant

A voice assistant application built with Electron for Linux.

Set bindings

- Win + q - `run-ui.sh select`
- Win + w - `run-ui.sh write`

## Setup

1. Install dependencies:
```bash
yarn
```

2. Run the application in development mode:
```bash
yarn start
```

4. Build the application:
```bash
npm run build
```

## Install external dependencies

- xdotool
- xclip
- pyenv

### argostranslate

! У него нет прямого перевода с испанского на русский, будет использоваться перевод на английский и только потом на русский

```bash
mkdir /home/ivan/.local/opt/argostranslate
cd /home/ivan/.local/opt/argostranslate

pyenv install 3.11.9
pyenv local 3.11.9
virtualenv -p ~/.pyenv/versions/3.11.9/bin/python3.11 argos_env
source argos_env/bin/activate
python3.11 -m venv argos_env
pip install argostranslate

# update languages
argospm update

argospm install translate-en_ru
argospm install translate-ru_en
argospm install translate-es_en
argospm install translate-en_es

# test
/home/ivan/.local/opt/argostranslate/argos_env/bin/argos-translate --from en --to ru "<TEXT>"

```

kate /home/ivan/.local/opt/argostranslate/translate_with_auto_detect.py

```python
import argostranslate.package
import argostranslate.translate

from_code = "en"
to_code = "es"

# Download and install Argos Translate package
argostranslate.package.update_package_index()
available_packages = argostranslate.package.get_available_packages()
package_to_install = next(
    filter(
        lambda x: x.from_code == from_code and x.to_code == to_code, available_packages
    )
)
argostranslate.package.install_from_path(package_to_install.download())

# Translate
translatedText = argostranslate.translate.translate("Hello World", from_code, to_code)
print(translatedText)
# '¡Hola Mundo!'
```

```bash
python install_model.py
```
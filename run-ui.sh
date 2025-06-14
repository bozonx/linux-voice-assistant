#!/bin/bash

# Получаем абсолютный путь к директории скрипта
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

WINDOW_ID=$(xdotool getactivewindow)
SELECTED_TEXT=$(xclip -selection primary -o)
MODE=$1

NODE_ENV=production "${SCRIPT_DIR}/node_modules/.bin/electron" "${SCRIPT_DIR}" --mode "${MODE}" --window-id "${WINDOW_ID}" --selected-text "${SELECTED_TEXT}"
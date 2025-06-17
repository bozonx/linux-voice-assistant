#!/bin/bash

# Получаем абсолютный путь к директории скрипта
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

WINDOW_ID=$(xdotool getactivewindow)
SELECTED_TEXT=$(xclip -selection primary -o)
MODE=$1

cd "${SCRIPT_DIR}"

NODE_ENV=production node "${SCRIPT_DIR}/common/correct.ts" --mode "${MODE}" --window-id "${WINDOW_ID}" --selected-text "${SELECTED_TEXT}"
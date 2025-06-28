#!/bin/bash


WINDOW_ID=$(xdotool getactivewindow)
SELECTED_TEXT=$(xclip -selection primary -o)
MODE=$1

dbus-send --session --type=method_call --dest=org.librass.Service /org/librass/Object org.librass.Interface.SwitchMode "string:${MODE}|${WINDOW_ID}|${SELECTED_TEXT}"

# Получаем абсолютный путь к директории скрипта
#SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
#NODE_ENV=production "${SCRIPT_DIR}/node_modules/.bin/electron" "${SCRIPT_DIR}" --mode "${MODE}" --window-id "${WINDOW_ID}" --selected-text "${SELECTED_TEXT}"

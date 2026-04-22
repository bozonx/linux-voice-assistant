#!/bin/bash

WINDOW_ID=$(xdotool getactivewindow 2>/dev/null || true)
SELECTED_TEXT=$(xclip -selection primary -o 2>/dev/null || true)
MODE=${1:-editor}

dbus-send --session --type=method_call \
  --dest=org.librass.Service \
  /org/librass/Object \
  org.librass.Interface.SwitchMode \
  "string:${MODE}|${WINDOW_ID}|${SELECTED_TEXT}"

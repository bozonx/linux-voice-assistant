import dbus from "@homebridge/dbus-native";
import { BrowserWindow } from "electron";
import { ParamsManager } from "./paramsManager";

// dbus-send --session --type=method_call --dest=org.librass.Service /org/librass/Object org.librass.Interface.SwitchMode string:write

const MESSAGE_PATH = "/org/librass/Object";
const MESSAGE_INTERFACE = "org.librass.Interface";
const MESSAGE_DEST = "org.librass.Service";
const MESSAGE_METHOD = "SwitchMode";

export function handleExternalCommands(
  paramsManager: ParamsManager,
  mainWindow: BrowserWindow
) {
  // @ts-ignore
  const sessionBus = dbus.sessionBus();

  sessionBus.connection.on("message", (message) => {
    if (
      message.path !== MESSAGE_PATH ||
      message.interface !== MESSAGE_INTERFACE ||
      message.destination !== MESSAGE_DEST
    )
      return;

    if (message.member === MESSAGE_METHOD && message.body.length > 0) {
      const [mode, windowId, ...selectedText] = message.body[0].split("|");

      console.log("DBUS message received", message);

      paramsManager.setParams({
        mode,
        windowId,
        selectedText: selectedText.join("|"),
      });

      mainWindow.show();
    }
  });

  sessionBus.requestName("org.librass.Service", 0, (err) => {
    if (err) console.error(err);
  });
}

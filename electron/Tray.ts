import { Menu } from "electron";
import { START_MODES } from "./types/types";

export function manageTray(app, mainWindow, tray, onClose) {
  const contextMenu = Menu.buildFromTemplate([
    { label: "Показать приложение", click: () => mainWindow.show() },
    { label: "Выход", click: () => app.quit() },
  ]);

  tray.setToolTip("Ваш помощник");
  tray.setContextMenu(contextMenu);

  // Сворачивание в трей при закрытии окна
  mainWindow.on("close", (event) => {
    // @ts-ignore
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide(); // Скрываем окно вместо закрытия
      onClose();
    }

    return false;
  });

  // @ts-ignore
  mainWindow.on("minimize", (event) => {
    event.preventDefault();
    mainWindow.hide();
    onClose();
  });
  // Показ окна при клике на иконку в трее
  tray.on("click", () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.webContents.send("params", {
        mode: START_MODES.EDITOR,
      });
      mainWindow.show();
    }
  });
}

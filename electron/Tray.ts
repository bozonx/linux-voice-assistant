import { Menu } from "electron";

export function manageTray(app, mainWindow, tray) {
  const contextMenu = Menu.buildFromTemplate([
    { label: "Показать приложение", click: () => mainWindow.show() },
    { label: "Выход", click: () => app.quit() },
  ]);

  tray.setToolTip("Мое приложение");
  tray.setContextMenu(contextMenu);

  // Сворачивание в трей при закрытии окна
  mainWindow.on("close", (event) => {
    // @ts-ignore
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide(); // Скрываем окно вместо закрытия
    }

    return false;
  });

  // @ts-ignore
  mainWindow.on("minimize", (event) => {
    event.preventDefault();
    mainWindow.hide();
  });
  // Показ окна при клике на иконку в трее
  tray.on("click", () => {
    mainWindow.show();
  });

  // Обработка полного выхода из приложения
  app.on("before-quit", () => {
    // @ts-ignore
    app.isQuitting = true;
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
      mainWindow = null;
    }
  });
}

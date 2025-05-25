const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

// Получаем аргументы командной строки
const getCommandLineArgs = () => {
    const args = process.argv.slice(2);
    const params = {};
    
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--window-id' && i + 1 < args.length) {
            params.windowId = args[i + 1];
            i++;
        } else if (args[i] === '--selected-text' && i + 1 < args.length) {
            params.selectedText = args[i + 1];
            i++;
        }
    }
    
    return params;
};

let mainWindow = null;

function createWindow() {
    const params = getCommandLineArgs();
    
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    mainWindow.loadFile('index.html');
    
    // Отправляем параметры в renderer процесс после загрузки страницы
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('init-params', params);
    });
    
    // Open DevTools in development mode
    if (process.argv.includes('--debug')) {
        mainWindow.webContents.openDevTools();
    }
}

// Обработчик для выполнения xdotool команды
ipcMain.on('type-text', (event, { text, windowId }) => {
    // Сначала активируем окно
    exec(`xdotool windowactivate ${windowId}`, (error) => {
        if (error) {
            console.error('Error activating window:', error);
            return;
        }
        
        // Затем вводим текст
        exec(`xdotool type "${text}"`, (error) => {
            if (error) {
                console.error('Error typing text:', error);
            }
            // Закрываем окно после ввода текста
            if (mainWindow) {
                mainWindow.close();
            }
        });
    });
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
}); 
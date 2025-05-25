// This file contains the frontend logic for your application
const { remote, ipcRenderer } = require('electron');

// Глобальные переменные для хранения параметров
let windowId = null;
let selectedText = null;

document.addEventListener('DOMContentLoaded', () => {
    console.log('Application started');
    
    // Устанавливаем фокус на textarea
    const textarea = document.getElementById('inputText');
    textarea.focus();
    
    // Получаем параметры инициализации
    ipcRenderer.on('init-params', (event, params) => {
        windowId = params.windowId;
        selectedText = params.selectedText;
        
        console.log('Received params:', { windowId, selectedText });
        
        // Если есть выбранный текст, вставляем его в textarea
        if (selectedText) {
            textarea.value = selectedText;
            // Устанавливаем курсор в конец текста
            textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
        }
    });
    
    // Получаем текст из textarea
    const getInputText = () => {
        return textarea.value;
    };

    // Обработчики для кнопок
    document.getElementById('createNote').addEventListener('click', () => {
        console.log('Создание заметки:', getInputText());
    });

    document.getElementById('correctText').addEventListener('click', () => {
        console.log('Корректировка текста:', getInputText());
    });

    document.getElementById('editText').addEventListener('click', () => {
        console.log('Редактура текста:', getInputText());
    });

    document.getElementById('searchText').addEventListener('click', () => {
        console.log('Поиск в интернете:', getInputText());
    });

    document.getElementById('askAI').addEventListener('click', () => {
        console.log('Вопрос к ИИ:', getInputText());
    });

    document.getElementById('translateToRu').addEventListener('click', () => {
        console.log('Перевод на русский:', getInputText());
    });

    document.getElementById('translateToEn').addEventListener('click', () => {
        console.log('Перевод на английский:', getInputText());
    });

    document.getElementById('translateToEs').addEventListener('click', () => {
        console.log('Перевод на испанский:', getInputText());
    });

    document.getElementById('toCapitalize').addEventListener('click', () => {
        const text = getInputText();
        const result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        textarea.value = result;
        textarea.focus();
    });

    document.getElementById('toUppercase').addEventListener('click', () => {
        const text = getInputText();
        textarea.value = text.toUpperCase();
        textarea.focus();
    });

    document.getElementById('toLowercase').addEventListener('click', () => {
        const text = getInputText();
        textarea.value = text.toLowerCase();
        textarea.focus();
    });

    document.getElementById('toCamelCase').addEventListener('click', () => {
        const text = getInputText();
        const result = text
            .split(/[\s-_]+/)
            .map((word, index) => 
                index === 0 
                    ? word.toLowerCase() 
                    : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join('');
        textarea.value = result;
        textarea.focus();
    });

    document.getElementById('toSnakeCase').addEventListener('click', () => {
        const text = getInputText();
        const result = text
            .split(/[\s-_]+/)
            .map(word => word.toLowerCase())
            .join('_');
        textarea.value = result;
        textarea.focus();
    });

    document.getElementById('toKebabCase').addEventListener('click', () => {
        const text = getInputText();
        const result = text
            .split(/[\s-_]+/)
            .map(word => word.toLowerCase())
            .join('-');
        textarea.value = result;
        textarea.focus();
    });

    // Кнопка закрытия
    document.getElementById('closeButton').addEventListener('click', () => {
        window.close();
    });
}); 
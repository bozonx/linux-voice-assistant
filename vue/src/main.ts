import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import miniToastr from "mini-toastr";
import "./assets/main.css";

// // Проверяем, запущено ли приложение в Electron
// const isElectron = window.electron !== undefined;

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");

miniToastr.init({ timeout: 10000 });

// Добавляем глобальный тип для window
// declare global {
//   interface Window {
//     electron?: {
//       // Здесь можно добавить типы для electron API
//     };
//   }
// }

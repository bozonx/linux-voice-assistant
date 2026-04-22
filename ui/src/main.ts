import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import miniToastr from "mini-toastr";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");

miniToastr.init({ timeout: 10000 });

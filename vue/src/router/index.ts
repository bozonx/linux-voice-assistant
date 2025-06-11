import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HistoriaView from "../views/HistoriaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/historia",
      name: "historia",
      component: HistoriaView,
    },
  ],
});

export default router;

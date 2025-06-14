import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HistoryView from "../views/HistoryView.vue";
import ConfigView from "../views/ConfigView.vue";

const router = createRouter({
  history: createMemoryHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/historia",
      name: "historia",
      component: HistoryView,
    },
    {
      path: "/config",
      name: "config",
      component: ConfigView,
    },
  ],
});

export default router;

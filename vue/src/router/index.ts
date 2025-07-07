import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HistoryView from "../views/HistoryView.vue";
import ConfigView from "../views/ConfigView.vue";
import ChatView from "../views/ChatView.vue";
import WriteModeView from "../views/WriteModeView.vue";
import VoiceView from "../views/VoiceView.vue";
import SelectModeView from "../views/SelectModeView.vue";
import AiTaskView from "../views/AiTaskView.vue";
import EditorView from "../views/EditorView.vue";

const router = createRouter({
  history: createMemoryHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true,
    },
    {
      path: "/editor",
      name: "editor",
      component: EditorView,
      props: true,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView,
    },
    {
      path: "/config",
      name: "config",
      component: ConfigView,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatView,
      props: true,
    },
    {
      path: "/write",
      name: "write",
      component: WriteModeView,
    },
    {
      path: "/voice",
      name: "voice",
      component: VoiceView,
    },
    {
      path: "/edit",
      name: "edit",
      component: AiTaskView,
    },
    {
      path: "/select",
      name: "select",
      component: SelectModeView,
    },
  ],
});

export default router;

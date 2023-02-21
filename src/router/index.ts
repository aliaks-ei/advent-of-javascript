import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pomodoro-timer",
      name: "pomodoro",
      component: () =>
        import("@/challenges/1-pomodoro-timer/PomodoroTimer.vue"),
    },
    {
      path: "/piano",
      name: "piano",
      component: () => import("@/challenges/3-piano/Piano.vue"),
    },
  ],
});

export default router;

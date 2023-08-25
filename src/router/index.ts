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
    {
      path: "/keyboard",
      name: "keyboard",
      component: () => import("@/challenges/4-keyboard/ComputerKeyboard.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/challenges/11-FAQ/FAQSection.vue"),
    },
  ],
});

export default router;

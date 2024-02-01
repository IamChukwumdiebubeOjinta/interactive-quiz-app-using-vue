import Home from "../pages/Home.vue";
import QuizSection from "../pages/QuizSection.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: QuizSection,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: "NotFound" },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;

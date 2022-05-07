import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingPage from "../pages/landing-page/LandingPage.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: LandingPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };

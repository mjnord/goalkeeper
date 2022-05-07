import { db } from "@/db/database";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import InitializationPage from "../pages/initialization-page/InitializationPage.vue";
import LandingPage from "../pages/landing-page/LandingPage.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "landing-page",
    beforeEnter: async () => {
      const nodes = await db.getNodes();
      if (!nodes.length) {
        return { name: "init" };
      }
      return true;
    },
    component: LandingPage,
  },
  {
    path: "/init",
    name: "init",
    component: InitializationPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };

import { db } from "@/db/database";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
    component: () => import("../pages/landing-page/LandingPage.vue"),
  },
  {
    path: "/init",
    name: "init",
    component: () =>
      import("../pages/initialization-page/InitializationPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };

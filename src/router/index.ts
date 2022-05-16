import { db } from "@/db/database";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "nodes-page",
    meta: {
      active: true,
      i18n: "nodesPage",
    },
    beforeEnter: async () => {
      const nodes = await db.getNodes();
      if (!nodes.length) {
        console.log("!nodes.length: returning to init");
        return { name: "init" };
      }
      return true;
    },
    component: () => import("../pages/nodes-page/NodesPage.vue"),
  },
  {
    path: "/init",
    name: "init",
    meta: {
      active: true,
      i18n: "initializationPage",
    },
    component: () =>
      import("../pages/initialization-page/InitializationPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };

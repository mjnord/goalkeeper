import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "nodes-page",
    meta: {
      active: true,
      i18n: "nodesPage",
    },
    component: () => import("../pages/nodes-page/NodesPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };

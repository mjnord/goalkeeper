import ServerNetwork from "@/assets/icons/ServerNetwork.vue";
import { Component } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

type GoalkeeperRoute = RouteRecordRaw & {
  meta: {
    active: boolean;
    i18n: string;
    icon: Component;
  };
};

export const routes: GoalkeeperRoute[] = [
  {
    path: "/",
    name: "nodes-page",
    meta: {
      active: true,
      i18n: "nodesPage",
      icon: ServerNetwork,
    },
    component: () => import("../pages/nodes-page/NodesPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };

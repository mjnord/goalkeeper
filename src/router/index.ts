import Compass from "@/assets/icons/Compass.vue";
import ServerNetwork from "@/assets/icons/ServerNetwork.vue";
import { Component } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NodeDetailsPage from "../pages/node-details/NodeDetails.vue";
import NodesPage from "../pages/nodes-page/NodesPage.vue";

type GoalkeeperRoute = RouteRecordRaw & {
  meta: {
    active: boolean;
    i18n: string;
    icon?: Component;
  };
};

export const routes: GoalkeeperRoute[] = [
  {
    path: "/nodes",
    name: "nodes-page",
    meta: {
      active: true,
      i18n: "nodesPage",
      icon: ServerNetwork,
    },
    component: NodesPage,
  },
  {
    path: "/discover",
    name: "discover-page",
    meta: {
      active: true,
      i18n: "discoverPage",
      icon: Compass,
    },
    component: NodesPage,
  },
  {
    path: "/nodes/:nodeId",
    name: "node-details",
    meta: {
      active: false,
      i18n: "nodeDetails",
    },
    component: NodeDetailsPage,
  },

  // will match everything and put it under `$route.params.pathMatch`
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    meta: {
      active: false,
      i18n: "not-found",
    },
    component: () => import("../pages/nodes-page/NodesPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };

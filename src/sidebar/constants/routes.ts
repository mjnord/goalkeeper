import { routes } from "@/router";

export const activeRoutes = routes
  .filter((route) => route.meta?.active)
  .map((activeRoute) => ({
    i18n: activeRoute.meta?.i18n as string,
    name: activeRoute.name as string,
  }));

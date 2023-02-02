import { createRouter, createWebHistory, Router } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/pages/errors/ErrorNotFound.vue"),
  },
];

const buildRouter = (): Router => {
  const r = routes;

  return createRouter({
    history: createWebHistory(),
    routes: r,
  });
};

const router = buildRouter();

export default router;

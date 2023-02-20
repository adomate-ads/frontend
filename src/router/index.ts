import { createRouter, createWebHistory, Router } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/pages/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/pages/About.vue"),
  },
  {
    path: "/google-ads",
    name: "Google-Ads",
    component: () => import("@/views/pages/errors/ErrorNotFound.vue"),
  },
  {
    path: "/seo-monitoring",
    name: "SEO-Monitoring",
    component: () => import("@/views/pages/errors/ErrorNotFound.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("@/views/pages/errors/ErrorNotFound.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/pages/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/pages/Signup.vue"),
  },
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

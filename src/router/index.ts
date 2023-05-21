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
    path: "/services",
    name: "Services",
    component: () => import("@/views/pages/Services.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("@/views/pages/Pricing.vue"),
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
    path: "/get-started",
    name: "Get Started",
    component: () => import("@/views/pages/GetStarted.vue"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("@/views/pages/Reviews.vue"),
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
    scrollBehavior() {
      return {
        top: 0,
        behavior: "smooth",
      };
    },
    history: createWebHistory(),
    routes: r,
  });
};

const router = buildRouter();

export default router;

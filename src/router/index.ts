import { createRouter, createWebHistory, Router } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/pages/Home.vue"),
  },
  {
    path: "/about/:section?",
    name: "About",
    component: () => import("@/views/pages/About.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("@/views/pages/Services.vue"),
  },
  {
    path: "/pricing/:section?",
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
    path: "/knowledge-base",
    name: "KnowledgeBase",
    component: () => import("@/views/pages/KnowledgeBase.vue"),
  },
  {
    path: "/knowledge-base/getting-started",
    name: "GettingStarted",
    component: () => import("@/views/pages/knowledge-base/GettingStarted.vue"),
  },
  {
    path: "/knowledge-base/developer-documentation",
    name: "DeveloperDocumentation",
    component: () =>
      import("@/views/pages/knowledge-base/DeveloperDocumentation.vue"),
  },
  {
    path: "/knowledge-base/features-and-functionality",
    name: "FeaturesAndFunctionality",
    component: () =>
      import("@/views/pages/knowledge-base/FeaturesAndFunctionality.vue"),
  },
  {
    path: "/knowledge-base/tips-and-tutorials",
    name: "TipsAndTutorials",
    component: () =>
      import("@/views/pages/knowledge-base/TipsAndTutorials.vue"),
  },
  {
    path: "/knowledge-base/billing-and-payments",
    name: "BillingAndPayments",
    component: () =>
      import("@/views/pages/knowledge-base/BillingAndPayments.vue"),
  },
  {
    path: "/knowledge-base/reporting-and-analytics",
    name: "ReportingAndAnalytics",
    component: () =>
      import("@/views/pages/knowledge-base/ReportingAndAnalytics.vue"),
  },
  {
    path: "/knowledge-base/security-and-privacy",
    name: "SecurityAndPrivacy",
    component: () =>
      import("@/views/pages/knowledge-base/SecurityAndPrivacy.vue"),
  },
  {
    path: "/knowledge-base/troubleshooting-and-faqs",
    name: "TroubleshootingAndFaqs",
    component: () =>
      import("@/views/pages/knowledge-base/TroubleshootingAndFaqs.vue"),
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import("@/views/pages/Resources.vue"),
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
    scrollBehavior(to) {
      if (to.params.section) {
        return {
          el: `#${to.params.section}`,
          top: 75,
          behavior: "smooth",
        };
      }
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

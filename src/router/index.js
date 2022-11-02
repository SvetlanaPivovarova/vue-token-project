import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "token",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/tokens",
      name: "token-list",
      component: () => import("../views/Tokens.vue"),
    },
    {
      path: "/add-tokens",
      name: "add-tokens",
      component: () => import("../views/AddToken.vue"),
    },
    {
      path: "/token/:id/delete",
      name: "delete-token",
      component: () => import("../views/DeleteTokenForm.vue"),
    },
  ],
});

export default router;

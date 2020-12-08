import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Login } from "@/views";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

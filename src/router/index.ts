import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stats/",
    name: "Problem",
    component: () => import("@/views/Problem.vue"),
    children: [
      {
        path: "1",
        component: () => import("@/views/problems/1.vue"),
      },
      {
        path: "2",
        component: () => import("@/views/problems/2.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

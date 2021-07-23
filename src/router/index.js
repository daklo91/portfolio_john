import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Work from "../views/Work.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

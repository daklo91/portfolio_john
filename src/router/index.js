import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Work from "../views/Work.vue";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import WorkPost from "../views/WorkPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:title",
    name: "BlogPost",
    component: BlogPost,
  },
  {
    path: "/work/:title",
    name: "WorkPost",
    component: WorkPost,
  },
];

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHashHistory(),
  routes,
});

export default router;

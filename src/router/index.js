import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
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
    path: "/about",
    name: "About",
    component: About,
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
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 150);
    });
  },
  history: createWebHashHistory(),
  routes,
});

export default router;

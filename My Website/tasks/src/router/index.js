import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
// import Login from "../components/identity/Login.vue";
import identity from "../components/identity/identity";
import Create_Task from "../components/Task/Create_Task";
import Page404 from "../components/Page404";
import CreateNewBlog from "../components/Blog/CreateNewBlog";
import Blog from "../components/Blog/AllBlogs";
import ReadBlog from "../components/Blog/ReadBlog";
// lazy-loaded
const Profile = () => import("../components/Profile.vue");
// const BoardAdmin = () => import("../components/BoardAdmin.vue");
// const BoardModerator = () => import("../components/BoardModerator.vue");
// const BoardUser = () => import("../components/BoardUser.vue");
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/Create_Task",
    name: "Create_Task",
    component: Create_Task,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/identity",
    name: "identity",
    component: identity,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/Create_Blog",
    name: "Create_Blog",
    // lazy-loaded
    component: CreateNewBlog,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/Blog/:id",
    name: "ReadBlog",
    component: ReadBlog,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    component: Page404,
  },
  { path: "/", component: Home, alias: "/home" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

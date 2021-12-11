import Vue from "vue";
import VueRouter from "vue-router";
import drawerRouter from "./drawerRouter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dashboard",
  },
].concat(drawerRouter);

const router = new VueRouter({
  routes,
});

export default router;

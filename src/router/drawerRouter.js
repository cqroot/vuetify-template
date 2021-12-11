const drawerRouter = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { icon: "mdi-view-dashboard" },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: { icon: "mdi-help-box" },
  },
];

export default drawerRouter;

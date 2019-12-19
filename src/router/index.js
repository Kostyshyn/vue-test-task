import Vue from "vue";
import VueRouter from "vue-router";
import Content from "../views/ContentModule/Content.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "content",
    component: Content
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

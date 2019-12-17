import Vue from "vue";
import store from "./store";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import Levels from "./views/Levels.vue";
import Level1 from "./views/levels/level-1.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      beforeEnter: (to, from, next) => {
        next(store.state.control);
      }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      beforeEnter: (to, from, next) => {
        next(store.state.logueo);
      }
    },
    {
      path: "/levels",
      name: "Levels",
      component: Levels,
      beforeEnter: (to, from, next) => {
        next(store.state.logueo);
      }
    },
    {
      path: "/level-1",
      name: "Level1",
      component: Level1
    }
  ]
});

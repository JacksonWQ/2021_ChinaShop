import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Person from "../pages/Person/Person";
import Login from "../pages/Login/Login";

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/person',
      component: Person,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

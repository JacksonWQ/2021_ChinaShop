import Vue from "vue";
import VueRouter from "vue-router";

import About from "../pages/About";
import Home from "../pages/Home";
import Suggestion from "../pages/Suggestion";

import Love from "../pages/Home/Love";
import Me from "../pages/Home/Me";
import News from "../pages/Home/News";

import NewsDetail from "../pages/Home/NewsDetail";

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News,
          children: [
            {
              path: "details/:id",
              component: NewsDetail
            }
          ]
        },
        {
          path: '/home/love',
          component: Love
        },
        {
          path: '/home/me',
          component: Me
        },
        {
          path: "",
          redirect:"/home/me"
        },
      ]
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/suggestion",
      component: Suggestion
    },
    {
      path: "/",
      redirect: "/about"
    }
  ]
})

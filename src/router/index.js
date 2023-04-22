import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store/user";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/course",
    name: "Course",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Course.vue"),
  },
  {
    path: "/course-info/:id",
    name: "CourseInfo",
    component: () =>
      import(/* webpackChunkName: "CourseInfo" */ "../views/Course-Info.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "CourseInfo" */ "../views/Login.vue"),
  },
  {
    path: "/course-play/:courseId/:chapterId",
    name: "coursePlay",
    component: () =>
      import(/* webpackChunkName: "CourseInfo" */ "../views/coursePlay.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
    beforeEnter: (to, from, next) => {
      console.log(useUserStore().userInfo.id)
      if (useUserStore().userInfo.id) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: "/confirmOrder",
    name: "confirmOrder",
    component: () =>
      import(/* webpackChunkName: "CourseInfo" */ "../views/confirmOrder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
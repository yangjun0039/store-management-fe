import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/custom',
        name: 'Custom',
        component: () => import('@/views/custom/Custom.vue'),
      },
      {
        path: '/custom/add',
        name: 'CustomAdd',
        component: () => import('@/views/custom/CustomAdd.vue')
      },
      {
        path: '/project',
        name: 'Project',
        component: () => import('@/views/service/Project.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

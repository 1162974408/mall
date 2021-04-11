import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/home.vue')
const apps = () => import('../views/apps/apps.vue')
const shopp = () => import('../views/shopp/shopp.vue')
const user = () => import('../views/user/user.vue')
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/apps',
    component: apps
  },
  {
    path: '/shopp',
    component: shopp
  },
  {
    path: '/user',
    component: user
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Devin Butts',
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'Devin Butts',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/career',
    name: 'career',
    meta: {
      title: 'Devin Butts',
    },
    component: () => import(/* webpackChunkName: "career" */ '../views/CareerView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

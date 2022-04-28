import { createRouter, createWebHistory } from 'vue-router'

// import importants routes
import home from './views/home/home.vue'
const routes = [
    {
        path: '/',
        redirect: { name: 'login' }
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/login/login.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
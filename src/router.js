import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import store from './store'

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
        component: home,
        redirect: { name: 'dashboard' },
        children : [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('./views/home/dashboard/dashboard.vue')
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('./views/home/profile/profile.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/login/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/register/register.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (!user && !router.name == 'login') {
            store.commit('removeUser')
            router.push({ name: 'login' })
        } else {
            store.commit('setUser', user)
            next()
        }
    })
})

export default router

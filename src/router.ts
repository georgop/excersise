import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Users from './views/Users.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/users' },
    { path: '/users', component: Users }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

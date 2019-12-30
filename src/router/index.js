
import Vue from 'Vue'
import Router from 'vue-router'

import Layout from '@/viewer/layout/Layout.vue'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    // base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'base',
            redirect: '/home'
        },{
            path: '/home',
            name: 'home',
            component: Layout,
            children: [{
                path: 'index',
                name: 'index',
                component: () => import('@/viewer/home/home.vue')
            }]
        }]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
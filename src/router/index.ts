import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'NotToxicDev - Home',
        component: Home
    },{
        path: '/about',
        name: 'NotToxicDev - About',
        component: () => import('../views/About.vue')
    },{
        path: '/contacts',
        name: 'NotToxicDev - Contacts',
        component: () => import('../views/Contacts.vue')
    },{
        path: '/games',
        name: 'NotToxicDev - Games',
        component: () => import('../views/Games.vue')
    },{
        path: '/youtube',
        name: 'NotToxicDev - Youtube',
        component: () => import('../views/Youtube.vue')
    },{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/404.vue') }
]
})

export default router
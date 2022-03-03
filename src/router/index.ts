import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: {name: 'home'}
        },{
        path: '/NotToxicDev-website/',
        name: 'NotToxicDev - Home',
        component: Home
    },{
        path: '/NotToxicDev-website/about',
        name: 'NotToxicDev - About',
        component: () => import('../views/About.vue')
    },{
        path: '/NotToxicDev-website/contacts',
        name: 'NotToxicDev - Contacts',
        component: () => import('../views/Contacts.vue')
    },{
        path: '/NotToxicDev-website/games',
        name: 'NotToxicDev - Games',
        component: () => import('../views/Games.vue')
    },{
        path: '/NotToxicDev-website/youtube',
        name: 'NotToxicDev - Youtube',
        component: () => import('../views/Youtube.vue')
    },{ path: '/NotToxicDev-website/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/404.vue') }
]
})

export default router
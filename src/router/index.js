import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import('../components/home.vue')
    },
    {
        path:'/others',
        component:() => import('../components/others.vue')
    },
    {
        path:'/others1',
        component:() => import('../components/others.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;
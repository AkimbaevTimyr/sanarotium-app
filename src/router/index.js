import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import Sanatorium from "@/pages/Sanatorium.vue";
import Sanatoriums from "@/pages/Sanatoriums.vue";
import Reviews from "@/pages/Reviews.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/sanatorium/:name/:id',
        name: 'sanatorium',
        component: Sanatorium
    },
    {
        path: '/sanatoriums',
        name: 'sanatoriums',
        component: Sanatoriums
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: Reviews
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from) {
        return { top: 0 }
    },
})

export default router
import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import Sanatorium from "@/pages/Sanatorium.vue";
import Sanatoriums from "@/pages/Sanatoriums.vue";

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
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
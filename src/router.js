import { createWebHistory, createRouter } from 'vue-router';

import DefaultLayout from "@/components/DefaultLayout";
import Login from '@/components/Login.vue';
import Join from '@/components/Join.vue';
import ProductInsert from '@/components/Product/ProductInsert.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/join',
        component: Join
    },
    {
        path: '/ProductInsert',
        component: ProductInsert
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
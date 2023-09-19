import { createWebHistory, createRouter } from 'vue-router';

import DefaultLayout from "@/components/DefaultLayout";
import Join from '@/components/Join.vue';
import ProductInsert from '@/components/product/ProductInsert.vue';
import ProductDetail from '@/components/product/ProductDetail.vue';
import ProductList from '@/components/product/ProductList.vue';
import Login from '@/components/member/Login.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout
    },
    {
        path: '/join',
        component: Join
    },
    {
        path: '/productInsert',
        component: ProductInsert
    },
    {
        path: '/prdDetail',
        component: ProductDetail
    },
    {
        path: '/productList',
        component: ProductList
    },
    {
        path: '/login',
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
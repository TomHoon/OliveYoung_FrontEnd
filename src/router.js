import { createWebHistory, createRouter } from 'vue-router';

import DefaultLayout from "@/components/DefaultLayout";
import Join from '@/components/Join.vue';
import ProductInsert from '@/components/product/ProductInsert.vue';
import ProductDetail from '@/components/product/ProductDetail.vue';
import ProductList from '@/components/product/ProductList.vue';
import Login from '@/components/member/Login.vue';
import Cart from '@/components/member/Cart.vue';


const routes = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: DefaultLayout
    },
    {
        path: '/join',
        name: 'Join',
        component: Join
    },
    {
        path: '/productInsert',
        name: 'ProductInsert',
        component: ProductInsert
    },
    {
        path: '/prdDetail',
        name: 'ProductDetail',
        component: ProductDetail,
        props: true
    },
    {
        path: '/productList',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
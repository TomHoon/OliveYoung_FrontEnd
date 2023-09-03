import { createApp } from 'vue';
import App from './App.vue';
import DefaultLayout from '@/components/DefaultLayout.vue';
import Login from '@/components/Login.vue';
import Join from '@/components/Join.vue';

import {createWebHistory, createRouter} from 'vue-router'

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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.component('DefaultLayout', DefaultLayout);

app.use(router);

app.mount('#app');

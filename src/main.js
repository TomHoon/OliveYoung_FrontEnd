import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from '@/router.js'
import GlobalJs from '@/js/global.js'

// StackLayer 컴포넌트 등록
import Main from '@/components/Main.vue'
import ProductDetail from '@/components/Product/ProductDetail.vue'
import TestStack from '@/components/TestStack.vue'



const store = createStore({
    state() {
        return {
            mainLayer: [
                { pageName: 'Main', pageInfo: { temp: '1234' }, transferObj: { test: '1' } }
            ]
        };
    }
});

const app = createApp(App);


app.component('Main', Main);
app.component('TestStack', TestStack)
app.component('ProductDetail', ProductDetail)
app.use(router);
app.use(store);
app.use(GlobalJs);

app.mount('#app');
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home.vue'


const routers = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component: Home,
        }
    ]
});


export default routers;
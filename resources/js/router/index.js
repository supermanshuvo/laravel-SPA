import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue'


const routers = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component: Home,
            name:'home',
        }
    ]
});


export default routers;
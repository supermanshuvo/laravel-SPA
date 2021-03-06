import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/home.vue'
import CategoryList from '../pages/category/index.vue'
import CreateCategory from '../pages/category/create.vue'


const routers = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component: Home,
            name:'home',
        },
        {
            path:'/category',
            component: CategoryList,
            name:'category-list',
        },
        {
            path:'/create',
            component: CreateCategory,
            name: 'create-category'
        }
    ]
});


export default routers;
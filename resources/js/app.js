import Vue from 'vue';
import routers from './router/index'

require('./bootstrap');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router:routers,
});

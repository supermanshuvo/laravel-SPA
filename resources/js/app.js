import Vue from 'vue';

require('./bootstrap');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
});

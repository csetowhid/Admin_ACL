require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

const router = new VueRouter({
  routes,
  // mode:'history' // short for `routes: routes`
})


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/adminmaster.vue').default);


const app = new Vue({
    el: '#app',
    router
});

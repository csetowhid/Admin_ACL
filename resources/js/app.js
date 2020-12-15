require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

const router = new VueRouter({
  routes,
  // mode:'history' // short for `routes: routes`
})
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

//SweetAlert
// ES6 Modules or TypeScript

import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast;

//Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import storeinfo from './store/store';

const store = new Vuex.Store(
    storeinfo
)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/adminmaster.vue').default);


const app = new Vue({
    el: '#app',
    router,
    store
});

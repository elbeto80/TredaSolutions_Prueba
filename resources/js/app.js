import './bootstrap';

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '*', component:()=> import('./components/NotFound.vue') },
    { path: '/', component:()=> import('./components/HomeComponent.vue') },
    { path: '/tiendas', component:()=> import('./components/TiendasComponent.vue') },
    { path: '/productos', component:()=> import('./components/ProductosComponent.vue') },
]

const router = new VueRouter({    
    routes,
    // mode: 'history'
})

const app = new Vue({
    el: '#app',
    router,
});

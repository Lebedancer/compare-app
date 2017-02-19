import 'babel-polyfill';
import Vue from 'vue/dist/vue.js'
import template from './app-template.html'
import router from './router'
import VueRouter from 'vue-router'
import Navigation from './components/Navigation'

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    template,
    components: {
        Navigation
    }
});
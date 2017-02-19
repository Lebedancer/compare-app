import 'babel-polyfill';
import Vue from 'vue/dist/vue.js'
import template from './app-template.html'

const root = new Vue({
    el: '#app',
    template,
    data: {
        name: `Mike Reynolds`,
        currentTime: new Date()
    },
});
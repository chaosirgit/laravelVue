/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import SvgIcon from '@/components/SvgIcon'// svg component
import '../icons/index.js' // icon
import './styles/index.scss' // global css
Vue.use(VueRouter);
Vue.use(ElementUI);
import router from './routes.js';

new Vue({
    el: '#app',
    router
});

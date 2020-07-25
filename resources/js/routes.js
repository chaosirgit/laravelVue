import VueRouter from 'vue-router';

let routes = [
    {
        path: '/admin/login',
        component: require('./components/admin/Login').default
    },
    {
        path : '/',
        component: require('./components/ExampleComponent').default
    }
];

export default new VueRouter({
    mode:'history',
    routes
});

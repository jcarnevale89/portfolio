import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'about',
      path: '/about',
      component: About,
    },
    {
      name: 'testing',
      path: '/testing',
      component: About,
    },
    {
      name: 'contact',
      path: '/contact',
      component: About,
    },
  ],
});

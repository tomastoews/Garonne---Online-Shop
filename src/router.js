import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(Router)

const base = process.env.NODE_ENV === 'production'
            ? '/garonne/'
            : '/';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      component: Home
    }
  ],
  mode: 'history',
  base: base
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '*',
    redirect: '/'
  }, {
    path: '/',
    name: 'diaries',
    component: () => import('./components/diaries.vue')
  }, {
    path: '/add-diary',
    name: 'add-diary',
    component: () => import('./components/diary/add-diary.vue'),
  }, {
    path: '/register',
    name: 'register',
    component: () => import('./components/auth/register.vue'),
  }, {
    path: '/login',
    name: 'login',
    component: () => import('./components/auth/login.vue'),
  }]
})
import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/Signup'
import UploadImage from '@/components/UploadImage'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(BootstrapVue);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/upload',
      name: 'UploadImage',
      component: UploadImage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

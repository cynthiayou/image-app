import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Images from '@/components/Images'
import Signup from '@/components/Signup'
import UploadImage from '@/components/UploadImage'
import Login from '@/components/Login'
import ImageDetails from '@/components/ImageDetails'

Vue.use(Router)
Vue.use(BootstrapVue);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'images',
      component: Images
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/upload',
      name: 'uploadImage',
      component: UploadImage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/image/:id',
      name: "imageDetails",
      component: ImageDetails
    }
  ]
})

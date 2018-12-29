// This is the Vue ROUTER'S index.
import Vue from 'vue' // Yes here even though this isn't the root of the app
import Router from 'vue-router'
// This router turns URLs into a choice of components
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

// Code provided as part of the routed webpack template.
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

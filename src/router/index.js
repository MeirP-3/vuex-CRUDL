import Vue from 'vue'
import Router from 'vue-router'
import Hello from './../components/Hello'
import Crud from './../components/Crud'
import UserPrefs from './../components/UserPrefs'
import App from '../App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/crud',
      name: 'crud',
      component: Crud
    },
    {
      path: '/user-prefs',
      name: 'user-prefs',
      component: UserPrefs
    }
  ]
})

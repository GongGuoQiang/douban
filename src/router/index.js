import Vue from 'vue'
import Router from 'vue-router'
import Pagesview from '@/views/Pagesview'
import Home from '../views/home'
import MovieView from '../views/movieview'
import BookView from '../views/bookview'
import StatusView from '../views/statusview'
import groupview from '../views/groupview'
import registerview from '../views/RegisterView'
import LoginView from '../views/LoginView'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        redirect: '/pages/'
      },
      {
          path: '/pages',
          component: Pagesview,
          children:[
              {
                path: '',
                redirect: '/pages/home'
              },
              {
                path: 'home',
                name: 'homeview',
                component: Home
              },
              {
                path: 'movie',
                name: 'movieview',
                component: MovieView
              },
              {
                path: 'book',
                name: 'bookview',
                component: BookView
              },
              {
                path: 'status',
                name: 'status',
                component: StatusView
              },
              {
                path: 'group',
                name: 'groupview',
                component: groupview
              },
          ]
      },
      {
            path: '/register',
            name: 'RegisterView',
            component: registerview
      },
      {
            path: '/loginview',
            name: 'loginview',
            component: LoginView
      },
      {
        path: '*',
        redirect: '/pages/'
      }

  ]
})
